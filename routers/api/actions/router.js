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
const database = require ('./database')

/// requests ///
router.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = router
