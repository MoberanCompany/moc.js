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
        toJsonObject: function (value) {
            return null;
        },
        format: function (value) {

        },
        toDate: function (value) {

        }
    };

    /**
     * moc Util
     */
    moc.util = {
        toUrlEncode: function (value) {
            return URLEncode(value);
        },
        toUrlDecode: function (value) {

        }
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

    function URLEncode(url) {
        return encodeURI(url);
    }
}).call(window);