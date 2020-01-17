/***********************************************************
  ~/projects - index
***********************************************************/

module.exports = Object.fromEntries (
  [
    'database',
    'router',
    'validateProjectId',
    'validateProject',
  ].map (
    (name) => [ name , require (`./${name}`) ]
  )
)
