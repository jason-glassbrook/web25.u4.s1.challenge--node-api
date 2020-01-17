/***********************************************************
  validateProjectId
***********************************************************/

const {
  respondWithError,
  requireRequestConforms,
} = require ('../../../middleware')

const validateProjectId = () => (ri, ro, next) => {
  next ()
}

/**************************************/

module.exports = validateProjectId
