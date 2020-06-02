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
  MAIN
***************************************/

const maybePartial = (isPartial) => (exactTests) => {

  let tests
  if (isPartial) {
    tests = [ _.isUndefined , ...exactTests ]
  }
  else {
    tests = exactTests
  }

  return _.anyPass (tests)

}

/*----------------*/

const conformsThru = (mode = 'exact') => (
  (objVal, srcVal, key, obj, src) => {

    let act
    if (_.isPlainObject (srcVal)) {
      // continue nesting
      act = _.isMatchWith (conformsThru (mode)) (srcVal)
    }
    else {
      // perform some test
      const testWith = maybePartial (mode == 'partial')

      if (_.isFunction (srcVal)) {
        // it's a test function -- use it
        act = testWith ([ srcVal ])
      }
      else {
        // it's a literal value -- create a test
        act = testWith ([ _.isEqual (srcVal) ])
      }
    }

    return act (objVal)

  }
)

/*----------------*/

const requireRequestConforms = (shape, mode, restOfErrorMessage = '', restOfError = {}) => (
  (ri, ro, next) => {

    const requestConforms = _.isMatchWith (conformsThru (mode)) (shape) (ri)

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
)

/**************************************/

module.exports = requireRequestConforms
