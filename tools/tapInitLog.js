/***********************************************************
  tapInitLog
***********************************************************/

const _ = require ('lodash/fp')
const tapLog = require ('./tapLog')

/***************************************
  definition
***************************************/

const tapInitLog = (fun) =>
  _.flow ([
    tapLog ('- init:'),
    fun,
  ])

/**************************************/

module.exports = tapInitLog
