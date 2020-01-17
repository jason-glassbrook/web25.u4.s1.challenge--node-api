/***********************************************************
  ~/api - router
***********************************************************/

/// tools ///
const express = require ('express')
const { respondWithError } = require ('../middleware')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// wares ///
router.use ([
  express.json (),
])

/// sub-routers ///
const subs = [ 'actions' , 'projects' ]
subs.forEach ((sub) => {
  router.use (`/${sub}`, require (`./${sub}`).router)
})

/// requests ///
router.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = router
