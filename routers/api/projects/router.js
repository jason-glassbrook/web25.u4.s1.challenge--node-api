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
const database = require ('./database')

/***************************************
  requests
***************************************/

router.route ('/')
  .get ([
    (ri, ro, next) => {
      database.get ()
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
    respondWithError (501),
    (ri, ro) => {},
  ])

router.route ('/:project_id')
  .all ([
    validateProjectId (database.get),
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
      database.remove (ri.params.project_id)
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
    validateProjectId (database.get),
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
    (ri, ro) => {
      ri.body.project_id = ri.params.project_id
      next ()
    },
    validateAction (),
    respondWithError (501),
    (ri, ro) => {},
  ])

router.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = router
