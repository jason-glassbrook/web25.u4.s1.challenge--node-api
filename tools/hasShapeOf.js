/***********************************************************
  hasShapeOf
***********************************************************/

const _ = require ('lodash/fp')
const hasPaths = require ('./hasPaths')

/***************************************
  MAIN
***************************************/

const hasShapeOf = /* (shape) => (object) => */ (
  _.flow ([
    _.keys,
    hasPaths,
  ]) /* (shape) (object) */
)

// const old.hasShapeOf = (shape) => (
//   _.flow ([
//     // log ('- :'),
//     _.keys,
//     // log ('- :'),
//     _.difference (_.keys (shape)),
//     // log ('- :'),
//     _.isEmpty,
//     // log ('- :'),
//   ])
// )

/**************************************/

module.exports = hasShapeOf
