/***********************************************************
  requireRequestHasBody
------------------------------------------------------------
  -> here -> next
  -> here -X
***********************************************************/

const requireRequestHas = require ('./requireRequestHas')

/***************************************
  definition
***************************************/

const requireRequestHasBody = (...rest) => (
  requireRequestHas ([ 'body' ], ...rest)
)

/**************************************/

module.exports = requireRequestHasBody
