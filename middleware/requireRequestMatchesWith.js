/***********************************************************
  requireRequestMatchesWith
------------------------------------------------------------
  -> here -> next
  -> here -X
***********************************************************/

const _ = require ('lodash/fp')
const { not } = require ('../tools')
const respondWithError = require ('./respondWithError')

/***************************************
  MAIN
***************************************/

const requireRequestMatchesWith = (shape, customizer, restOfErrorMessage = '', restOfError = {}) => (ri, ro, next) => {
  const requestMatchesWith = _.isMatchWith (customizer) (shape) (ri)

  if (not (requestMatchesWith)) {
    respondWithError (
      400,
      ` -- request must match with <shape>` + restOfErrorMessage,
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

module.exports = requireRequestMatchesWith
