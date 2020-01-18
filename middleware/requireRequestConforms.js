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

const maybePartial = (isPartial) => (tests) => (
  _.anyPass (
    _.cond ([
      [ _.identity, _.constant ([ _.isUndefined, ...tests ]) ],
      [ _.T, _.constant (tests) ]
    ]) (isPartial)
  )
)

const nestedConforms = (mode = 'exact') => (object, source) => (
  _.cond ([
    [ _.isFunction, _.constant (
      maybePartial (mode == 'partial') ([ source ])
    )],
    [ _.isObject, () => (
      _.isMatchWith (nestedConforms (mode)) (source)
    )],
    [ _.T, () => (
      maybePartial (mode == 'partial') ([ _.isEqual (source) ])
    )]
  ]) (source) (object)
)

const requireRequestConforms = (shape, mode, restOfErrorMessage = '', restOfError = {}) => (ri, ro, next) => {

  const requestConforms = _.isMatchWith (nestedConforms (mode)) (shape) (ri)

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
