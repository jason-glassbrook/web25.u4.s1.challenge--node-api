/***********************************************************
  error
***********************************************************/

const kvPairs = require ('./kvPairs')
const message = require ('./message')

/***************************************
  definition
***************************************/

const error = (text, restOfError = {}, rest = {}) => kvPairs (
  [[ 'error', message (text, restOfError) ]], rest
)

/**************************************/

module.exports = error
