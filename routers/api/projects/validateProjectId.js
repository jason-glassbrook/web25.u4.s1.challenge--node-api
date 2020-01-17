/***********************************************************
  validateProjectId
***********************************************************/

/// tools ///

const _ = require ('lodash/fp')
const { not } = require ('../../../tools')
// const { clog } = require ('../../../tools')

/// middleware ///

const {
  respondWithError,
  requireRequestConforms,
} = require ('../../../middleware')

/***************************************
  MAIN
***************************************/

const validateProjectId = (getProjectById) => (
  (ri, ro, next) => {
    const { project_id } = ri.params

    getProjectById (project_id)
      .then ((value) => {
        if (_.isNil (value)) {
          // not found
          respondWithError (
            404,
            ` -- could not find project where id=${project_id}`,
          ) (ri, ro)
        }
        else {
          // put it in `ri.locals`
          ri.locals = {
            ...(ri.locals || {}),
            project : value,
          }
          next ()
        }
      })
      .catch ((error) => {
        respondWithError (500) (ri, ro)
      })
  }
)

/**************************************/

module.exports = validateProjectId
