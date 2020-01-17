/***********************************************************
  validateActionId
***********************************************************/

/// tools ///

const _ = require ('lodash/fp')
const { not } = require ('../../../tools')
const { clog } = require ('../../../tools')

/// middleware ///

const {
  respondWithError,
  requireRequestConforms,
} = require ('../../../middleware')

/***************************************
  MAIN
***************************************/

const validateActionId = (getActionById) => (
  (ri, ro, next) => {
    const { action_id } = ri.params

    getActionById (action_id)
      .then ((value) => {
        if (_.isNil (value)) {
          // not found
          respondWithError (
            404,
            ` -- could not find action where id=${action_id}`,
          ) (ri, ro)
        }
        else {
          // put it in `ri.locals`
          ri.locals = {
            ...(ri.locals || {}),
            action : value,
          }
          next ()
        }
      })
      .catch ((error) => {
        clog (error)
        respondWithError (500) (ri, ro)
      })
  }
)

/**************************************/

module.exports = validateActionId
