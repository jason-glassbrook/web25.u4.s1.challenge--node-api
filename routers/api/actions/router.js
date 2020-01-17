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

/// requests ///
router.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = router
