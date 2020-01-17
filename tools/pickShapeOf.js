/***********************************************************
  pickShapeOf
***********************************************************/

const _ = require ('lodash/fp')
const pickPaths = require ('./pickPaths')

/***************************************
  definition
***************************************/

const pickShapeOf = /* (shape) => (object) => */ (
  _.flow ([
    _.keys,
    pickPaths,
  ]) /* (shape) (object) */
)

// const old.pickShapeOf = (shape) => /* (object) => */ (
//   _.flow ([
//     // log ('- before:'),
//     _.pick (shape),
//     // log ('- after:'),
//   ]) /* (object) */
// )

/**************************************/

module.exports = pickShapeOf
