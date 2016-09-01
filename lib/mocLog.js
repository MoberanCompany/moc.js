(function () {
    "use strict";
    var LOG_LEVEL_DEBUG = 0;
    var LOG_LEVEL_INFO = 1;
    var LOG_LEVEL_WARN = 2;
    var LOG_LEVEL_ERROR = 3;
    var LOG_LEVEL_FATAL = 4;

    var LOG_COLOR_DEBUG = 'limegreen';
    var LOG_COLOR_INFO = 'deepskyblue';
    var LOG_COLOR_WARN = 'orange';
    var LOG_COLOR_ERROR = 'red';
    var LOG_COLOR_FATAL = 'darkred';

    var root = this;
    var moc = root.moc;
    moc.config.logLevel =  LOG_COLOR_DEBUG;

    /**
     *  moc Log
     */
    moc.log = {

        debug: function(log) {
            if (moc.config.logLevel <= LOG_LEVEL_DEBUG ) {
                console.log('%c debug : ' + log + '  ' , 'background: ' + LOG_COLOR_DEBUG + '; color: white; ');
            }
        },
        info: function (log) {
            if (moc.config.logLevel <= LOG_LEVEL_INFO ) {
                console.log('%c info : ' + log + '  ' , 'background: ' + LOG_COLOR_INFO + '; color: white; display: block;');
            }
        },
        warn: function (log) {
            if (moc.config.logLevel <= LOG_LEVEL_WARN ) {
                console.log('%c warn : ' + log + '  ' , 'background: ' + LOG_COLOR_WARN + '; color: white; display: block;');
            }
        },
        error: function (log) {
            if (moc.config.logLevel <= LOG_LEVEL_ERROR ) {
                console.log('%c error : ' + log + '  ' , 'background: ' + LOG_COLOR_ERROR + '; color: white; display: block;');
            }
        },
        fatal: function (log) {
            if (moc.config.logLevel <= LOG_LEVEL_FATAL ) {
                console.log('%c fatal : ' + log + '  ' , 'background: ' + LOG_COLOR_FATAL + '; color: white; display: block;');
            }
        },
    };
}).call(window);