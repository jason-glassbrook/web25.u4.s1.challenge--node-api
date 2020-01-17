/***********************************************************
  validateProject
***********************************************************/

const _ = require ('lodash/fp')

const {
  requireRequestConforms,
} = require ('../../../middleware')

const validateProject = () => requireRequestConforms (
  {
    'body' : {
      'name' : _.isString,
      'description' : _.isString,
      'completed' : _.anyPass ([ _.isBoolean, _.isUndefined ])
    }
  },
  ' -- { body : { name : string, description : string, completed : boolean | undefined } }',
)

/**************************************/

module.exports = validateProject
