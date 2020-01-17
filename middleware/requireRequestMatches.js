/***********************************************************
  requireRequestMatches
------------------------------------------------------------
  -> here -> next
  -> here -X
***********************************************************/

const _ = require ('lodash/fp')
const { not } = require ('../tools')
const respondWithError = require ('./respondWithError')

/***************************************
  definition
***************************************/

const requireRequestMatches = (shape, restOfErrorMessage = '', restOfError = {}) => (ri, ro, next) => {
  const requestMatches = _.isMatch (shape) (ri)

  if (not (requestMatches)) {
    respondWithError (
      400,
      ` -- request must match <shape>` + restOfErrorMessage,
      {
        shape,
        ...restOfError,
      },
    ) (ri, ro)
  }
  else {
    next ()
  }
}

/**************************************/

module.exports = requireRequestMatches
