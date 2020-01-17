/***********************************************************
  ~/actions - index
***********************************************************/

module.exports = Object.fromEntries (
  [
    'database',
    'router',
    'validateActionId',
    'validateAction',
  ].map (
    (name) => [ name , require (`./${name}`) ]
  )
)
