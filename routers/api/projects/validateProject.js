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

const shape = {
  'body' : {
    'name' : _.isString,
    'description' : _.isString,
    'completed' : _.anyPass ([ _.isBoolean, _.isUndefined ]),
  },
}

const restOfErrorMessage = ''

const restOfError = {
  shape : {
    'body' : {
      'name' : 'string',
      'description' : 'string',
      'completed' : 'boolean | undefined',
    }
  },
}

/*------------------------------------*/

const validateProject = (mode) => (
  requireRequestConforms (shape, mode, restOfErrorMessage, restOfError)
)

/**************************************/

module.exports = validateProject
