/***********************************************************
  /middleware - index
***********************************************************/

module.exports = {
  respondWithError : require ('./respondWithError'),
  requireRequestHas : require ('./requireRequestHas'),
  requireRequestHasBody : require ('./requireRequestHasBody'),
  requireRequestConforms : require ('./requireRequestConforms'),
  requireRequestMatchesWith : require ('./requireRequestMatchesWith'),
  requireRequestMatches : require ('./requireRequestMatches'),
}
