/**************************************/

module.exports = {
  /// longhand ///
  not : require ('./not'),
  /// console[_x_] shorthand ///
  cerror : require ('./cerror'),
  clog   : require ('./clog'),
  cwarn  : require ('./cwarn'),
  /// tap loggers ///
  tapLog          : require ('./tapLog'),
  tapInitLog      : require ('./tapInitLog'),
  tapExitLog      : require ('./tapExitLog'),
  tapInitExitLogs : require ('./tapInitExitLogs'),
  /// structural tests ///
  hasPaths    : require ('./hasPaths'),
  pickPaths   : require ('./pickPaths'),
  hasShapeOf  : require ('./hasShapeOf'),
  pickShapeOf : require ('./pickShapeOf'),
}
