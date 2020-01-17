/***********************************************************
  ~/actions - router
***********************************************************/

/// tools ///

const { clog } = require ('../../../tools')
const express = require ('express')

/// middleware ///

const {
  respondWithError,
  requireRequestHasBody,
} = require ('../../../middleware')

const validateActionId = require ('./validateActionId')
const validateAction = require ('./validateAction')

/***************************************
  setup router
***************************************/

const router = express.Router ()
const database = {
  'actions' : require ('../actions/database'),
  // 'projects' : require ('../projects/database'),
}

/***************************************
  requests
***************************************/

router.route ('/')
  .get ([
    (ri, ro, next) => {
      database['actions'].get ()
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
    validateAction (),
    respondWithError (501),
    (ri, ro) => {},
  ])

router.route ('/:action_id')
  .all ([
    validateActionId (database['actions'].get),
    // -- on success: adds ri.locals.action
  ])
  .get ([
    (ri, ro, next) => {
      // respond...
      ro
        .status (200)
        .json (ri.locals.action)
    },
  ])
  .put ([
    requireRequestHasBody (),
    validateAction (),
    respondWithError (501),
    (ri, ro) => {},
  ])
  .delete ([
    (ri, ro, next) => {
      database['actions'].remove (ri.params.action_id)
        .then ((value) => {
          // respond...
          ro
            .status (200)
            .json (ri.locals.action)
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
