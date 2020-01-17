/***********************************************************
  /middleware - index
***********************************************************/

module.exports = Object.fromEntries (
  [
    'respondWithError',
    'requireRequestHas',
    'requireRequestHasBody',
    'requireRequestConforms',
    'requireRequestMatchesWith',
    'requireRequestMatches',
  ].map (
    (name) => [ name , require (`./${name}`) ]
  )
)
