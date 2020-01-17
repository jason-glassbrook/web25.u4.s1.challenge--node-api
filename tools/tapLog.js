/***********************************************************
  tapLog
***********************************************************/

const _ = require ('lodash/fp')
const clog = require ('./clog')

/***************************************
  definition
***************************************/

const tapLog = (message) =>
  _.tap ((x) => {
    _.cond ([
      [ _.isString, clog ],
    ]) (message)
    clog (x)
  })

/**************************************/

module.exports = tapLog
