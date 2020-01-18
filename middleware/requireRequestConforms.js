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

const nestedConforms = (object, source) => (
  _.cond ([
    [ /* if */
      _.isFunction, () => (
        source (object)
      )
    ],
    [ /* else if */
      _.isObject, () => (
        _.isMatchWith (nestedConforms) (source) (object)
      )
    ],
    [ /* else */
      _.T, () => (
        _.isEqual (source) (object)
      )
    ]
  ]) (source)

  // if (_.isFunction (source)) {
  //   return (source (object))
  // }
  // else if (_.isObject (source)) {
  //   return _.isMatchWith (nestedConforms) (source) (object)
  // }
  // else {
  //   return _.isEqual (source) (object)
  // }
)

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
