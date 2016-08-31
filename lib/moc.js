(function() {
    "use strict";
    var root = this;
    var moc = root.moc = {
        version: '1.0',
        config: {
            logLevel: 'info'
        }
    };
    moc.getVersion = function() {
        return this.version;
    };

    /**
     * moc String
     */
    moc.string = {
        toUrlEncode: function (value) {
            return URLEncode(value);
        },
        toUrlDecode: function (value) {

        },
        toJsonObject: function (value) {
            return null;
        },
        format: function (value) {

        },
        toDate: function (value) {

        }
    };
    /**
     * moc Number
     */
    moc.number = {
    };

    function URLEncode(url) {
        return encodeURI(url);
    }

    /**
     * moc Util
     */
    moc.util = {
        isMobile: function () {
            var result = false;
            return result;
        },
        getMobileDevice: function () {
            
        },

    };

    /**
     *  moc Log
     */
    moc.log = {
        info: function () {
            
        },
        debug: function () {

        },
    };

}).call(window);