/***********************************************************
  validateAction
***********************************************************/

const _ = require ('lodash/fp')

const {
  requireRequestConforms,
} = require ('../../../middleware')

const validateAction = () => requireRequestConforms (
  {
    'body' : {
      'project_id' : _.isInteger,
      'description' : _.isString,
      'notes' : _.isString,
      'completed' : _.anyPass ([ _.isBoolean, _.isUndefined ])
    }
  },
  ' -- { body : { project_id : integer, description : string, notes : string, completed : boolean | undefined } }',
)

/**************************************/

module.exports = validateAction
