/***********************************************************
  requireRequestHasBody
------------------------------------------------------------
  -> here -> next
  -> here -X
***********************************************************/

const requireRequestHas = require ('./requireRequestHas')

/***************************************
  MAIN
***************************************/

const requireRequestHasBody = (...rest) => (
  requireRequestHas ([ 'body' ], ...rest)
)

/**************************************/

module.exports = requireRequestHasBody
