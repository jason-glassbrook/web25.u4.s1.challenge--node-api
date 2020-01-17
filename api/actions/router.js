/***********************************************************
  ~/actions - router
***********************************************************/

/// tools ///
const express = require ('express')
const { respondWithError } = require ('../../middleware')

/***************************************
  setup router
***************************************/

const router = express.Router ()

/// requests ///
router.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = router
