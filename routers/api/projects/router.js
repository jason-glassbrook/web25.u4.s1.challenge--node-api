/***********************************************************
  ~/projects - router
***********************************************************/

/// tools ///

const { clog } = require ('../../../tools')
const express = require ('express')

/// middleware ///

const {
  respondWithError,
  requireRequestHasBody,
} = require ('../../../middleware')

const validateProjectId = require ('./validateProjectId')
const validateProject = require ('./validateProject')

const {
  validateAction,
} = require ('../actions')

/***************************************
  setup router
***************************************/

const router = express.Router ()
const database = {
  'actions' : require ('../actions/database'),
  'projects' : require ('../projects/database'),
}

/***************************************
  requests
***************************************/

router.route ('/')
  .get ([
    (ri, ro, next) => {
      database['projects'].get ()
        .then ((value) => {
          // respond...
          ro
            .status (200)
            .json (value)
        })
        .catch ((error) => {
          // respond...
          clog (error)
          respondWithError (500) (ri, ro)
        })
    },
  ])
  .post ([
    requireRequestHasBody (),
    validateProject (),
    (ri, ro, next) => {
      database['projects'].insert (ri.body)
        .then ((value) => {
          // respond...
          ro
            .status (201)
            .json (value)
        })
        .catch ((error) => {
          // respond...
          clog (error)
          respondWithError (500) (ri, ro)
        })
    },
  ])

router.route ('/:project_id')
  .all ([
    validateProjectId (database['projects'].get),
    // -- on success: adds ri.locals.project
  ])
  .get ([
    (ri, ro, next) => {
      // respond...
      ro
        .status (200)
        .json (ri.locals.project)
    },
  ])
  .put ([
    requireRequestHasBody (),
    validateProject (),
    respondWithError (501),
    (ri, ro) => {},
  ])
  .delete ([
    (ri, ro, next) => {
      database['projects'].remove (ri.params.project_id)
        .then ((value) => {
          // respond...
          ro
            .status (200)
            .json (ri.locals.project)
        })
        .catch ((error) => {
          // respond...
          clog (error)
          respondWithError (500) (ri, ro)
        })
    },
  ])

router.route ('/:project_id/actions')
  .all ([
    validateProjectId (database['projects'].get),
    // -- on success: adds ri.locals.project
  ])
  .get ([
    (ri, ro, next) => {
      // respond...
      ro
        .status (200)
        .json (ri.locals.project.actions)
    },
  ])
  .post ([
    requireRequestHasBody (),
    // put `project_id` in action's `ri.body`
    (ri, ro, next) => {
      ri.body.project_id = ri.params.project_id
      next ()
    },
    validateAction (),
    (ri, ro, next) => {
      database['actions'].insert (ri.body)
        .then ((value) => {
          // respond...
          ro
            .status (201)
            .json (value)
        })
        .catch ((error) => {
          // respond...
          clog (error)
          respondWithError (500) (ri, ro)
        })
    },
  ])

router.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = router
