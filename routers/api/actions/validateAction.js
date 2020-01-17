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
      'project_id' : _.anyPass ([ _.isInteger, _.isString ]),
      'description' : _.isString,
      'notes' : _.isString,
      'completed' : _.anyPass ([ _.isBoolean, _.isUndefined ]),
    }
  },
  '',
  {
    shape : {
      'body' : {
        'project_id' : 'string | integer',
        'description' : 'string',
        'notes' : 'string',
        'completed' : 'boolean | undefined',
      }
    }
  }
)

/**************************************/

module.exports = validateAction
