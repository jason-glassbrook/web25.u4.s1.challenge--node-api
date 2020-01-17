/***********************************************************
  errors
***********************************************************/

const { error } = require ('../')

/***************************************
  definition
***************************************/

const buildRestOfError = (request, restOfError) => ({
  method : request.method,
  route : request.originalUrl,
  ...restOfError,
})

const errors = {
  '400' :
    (restOfErrorMessage = '', restOfError = {}) => (request) => (error (
      `bad request` + restOfErrorMessage,
      buildRestOfError (request, restOfError),
    )),
  '404' :
    (restOfErrorMessage = '', restOfError = {}) => (request) => (error (
      `resource not found` + restOfErrorMessage,
      buildRestOfError (request, restOfError),
    )),
  '500' :
    (restOfErrorMessage = '', restOfError = {}) => (request) => (error (
      `something bad happened` + restOfErrorMessage,
      buildRestOfError (request, restOfError),
    )),
  '501' :
    (restOfErrorMessage = '', restOfError = {}) => (request) => (error (
      `not implemented ... yet?` + restOfErrorMessage,
      buildRestOfError (request, restOfError),
    )),
}

/**************************************/

module.exports = errors
