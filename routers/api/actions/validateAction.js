/***********************************************************
  validateAction
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

const shape = {
  'body' : {
    'project_id' : _.anyPass ([ _.isInteger, _.isString ]),
    'description' : _.isString,
    'notes' : _.isString,
    'completed' : _.anyPass ([ _.isBoolean, _.isUndefined ]),
  }
}

const restOfErrorMessage = ''

const restOfError = {
  shape : {
    'body' : {
      'project_id' : 'string | integer',
      'description' : 'string',
      'notes' : 'string',
      'completed' : 'boolean | undefined',
    }
  }
}

/*------------------------------------*/

const validateAction = () => (
  requireRequestConforms (shape, restOfErrorMessage, restOfError)
)

/**************************************/

module.exports = validateAction
