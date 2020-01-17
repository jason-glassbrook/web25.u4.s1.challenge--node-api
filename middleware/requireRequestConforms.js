/***********************************************************
  requireRequestConforms
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

function nestedConforms (object, source) {
  if (_.isFunction (source)) {
    return (source (object))
  }
  else {
    return _.isMatchWith (nestedConforms) (source) (object)
  }
}

const requireRequestConforms = (shape, restOfErrorMessage = '', restOfError = {}) => (ri, ro, next) => {

  const requestConforms = _.isMatchWith (nestedConforms) (shape) (ri)

  if (not (requestConforms)) {
    respondWithError (
      400,
      ` -- request must conform with <shape>` + restOfErrorMessage,
      {
        shape : 'please read the documentation',
        ...restOfError,
      },
    ) (ri, ro)
  }
  else {
    next ()
  }
}

/**************************************/

module.exports = requireRequestConforms
