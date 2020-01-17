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

/// requests ///
router.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = router
