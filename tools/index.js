/***********************************************************
  /tools - index
***********************************************************/

module.exports = Object.fromEntries (
  [
    /// longhand ///
    'not',
    /// console[_x_] shorthand ///
    'cerror',
    'clog',
    'cwarn',
    /// tap loggers ///
    'tapLog',
    'tapInitLog',
    'tapExitLog',
    'tapInitExitLogs',
    /// structural tests ///
    'hasPaths',
    'pickPaths',
    'hasShapeOf',
    'pickShapeOf',
  ].map (
    (name) => [ name , require (`./${name}`) ]
  )
)
