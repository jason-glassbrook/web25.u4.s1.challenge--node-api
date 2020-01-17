/***********************************************************
  tapExitLog
***********************************************************/

const _ = require ('lodash/fp')
const tapLog = require ('./tapLog')

/***************************************
  definition
***************************************/

const tapExitLog = (fun) =>
  _.flow ([
    fun,
    tapLog ('- exit:'),
  ])

/**************************************/

module.exports = tapExitLog
