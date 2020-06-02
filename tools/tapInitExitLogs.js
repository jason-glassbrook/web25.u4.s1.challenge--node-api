/***********************************************************
  tapInitExittapLogs
***********************************************************/

const _ = require ('lodash/fp')
const tapLog = require ('./tapLog')

/***************************************
  MAIN
***************************************/

const tapInitExittapLogs = (fun) =>
  // _.flow ([ tapInitLog, tapExitLog ]) (fun)
  _.flow ([
    tapLog ('- init:'),
    fun,
    tapLog ('- exit:'),
  ])

/**************************************/

module.exports = tapInitExittapLogs
