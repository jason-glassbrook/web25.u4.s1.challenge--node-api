/***********************************************************
  validateActionId
***********************************************************/

const {
  respondWithError,
  requireRequestConforms,
} = require ('../../../middleware')

const validateActionId = () => (ri, ro, next) => {
  next ()
}

/**************************************/

module.exports = validateActionId
