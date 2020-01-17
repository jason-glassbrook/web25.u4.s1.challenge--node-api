/***********************************************************
  message
***********************************************************/

const kvPairs = require ('./kvPairs')

/***************************************
  definition
***************************************/

const message = (text, rest = {}) => kvPairs (
  [[ 'message', text ]], rest
)

/**************************************/

module.exports = message
