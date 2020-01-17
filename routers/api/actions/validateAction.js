/***********************************************************
  validateAction
***********************************************************/

const {
  respondWithError,
  requireRequestConforms,
} = require ('../../../middleware')

const validateAction = () => (ri, ro, next) => {
  next ()
}

/**************************************/

module.exports = validateAction
