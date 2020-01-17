/***********************************************************
  ~/projects - router
***********************************************************/

/// tools ///

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
    respondWithError (501),
    (ri, ro) => {},
  ])
  .post ([
    requireRequestHasBody (),
    validateProject (),
    respondWithError (501),
    (ri, ro) => {},
  ])

router.route ('/:project_id')
  .all ([
    validateProjectId (),
  ])
  .get ([
    respondWithError (501),
    (ri, ro) => {},
  ])
  .put ([
    requireRequestHasBody (),
    validateProject (),
    respondWithError (501),
    (ri, ro) => {},
  ])
  .delete ([
    respondWithError (501),
    (ri, ro) => {},
  ])

router.route ('/:project_id/actions')
  .all ([
    validateProjectId (),
  ])
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

router.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = router
