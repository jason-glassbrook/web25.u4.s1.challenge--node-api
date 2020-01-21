/***********************************************************
  ~/api - router
***********************************************************/

/// tools ///
const express = require ('express')
const { respondWithError } = require ('../../middleware')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// wares ///
router.use ([
  express.json (),
])

/// sub-routers ///
server.use ('/actions', require ('./actions').router)
server.use ('/projects', require ('./projects').router)

/// requests ///
router.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = router
