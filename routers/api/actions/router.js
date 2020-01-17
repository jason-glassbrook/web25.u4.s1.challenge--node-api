/***********************************************************
  ~/actions - router
***********************************************************/

/// tools ///

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
const database = require ('./database')

/***************************************
  requests
***************************************/

router.route ('/')
  .get ([
    respondWithError (501),
    (ri, ro) => {},
  ])
  .post ([
    requireRequestHasBody (),
    validateAction (),
    respondWithError (501),
    (ri, ro) => {},
  ])

router.route ('/:action_id')
  .all ([
    validateActionId (),
  ])
  .get ([
    respondWithError (501),
    (ri, ro) => {},
  ])
  .put ([
    requireRequestHasBody (),
    validateAction (),
    respondWithError (501),
    (ri, ro) => {},
  ])
  .delete ([
    respondWithError (501),
    (ri, ro) => {},
  ])

router.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = router
