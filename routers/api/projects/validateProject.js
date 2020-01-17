/***********************************************************
  validateProject
***********************************************************/

/// tools ///

const _ = require ('lodash/fp')

/// middleware ///

const {
  requireRequestConforms,
} = require ('../../../middleware')

/***************************************
  MAIN
***************************************/

const validateProject = () => requireRequestConforms (
  {
    'body' : {
      'name' : _.isString,
      'description' : _.isString,
      'completed' : _.anyPass ([ _.isBoolean, _.isUndefined ]),
    }
  },
  '',
  {
    shape : {
      'body' : {
        'name' : 'string',
        'description' : 'string',
        'completed' : 'boolean | undefined',
      }
    },
  }
)

/**************************************/

module.exports = validateProject
