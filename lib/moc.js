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
        toComma: function(value){
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        fillZero: function(value, length){
            return Array(Math.max(length - String(value).length + 1, 0)).join('0') + value;
        },
        toBytes: function(value, type, isIncludeType){
            var result;
            var divValue = 1024;
            switch (type.toLowerCase()){
                case 'kb':
                    result = (value / (divValue)).toFixed(3);
                    break;
                case 'mb':
                    result = (value / (divValue * 1000)).toFixed(3);
                    break;
                case 'gb':
                    result = (value / (divValue * 1000000)).toFixed(3);
                    break;
                case 'tb':
                    result = (value / (divValue * 1000000000)).toFixed(3);
                    break;
                case 'pb':
                    result = (value / (divValue * 1000000000000)).toFixed(3);
                    break;
                case 'eb':
                    result = (value / (divValue * 1000000000000000)).toFixed(3);
                    break;
                case 'zb':
                    result = (value / (divValue * 1000000000000000000)).toFixed(3);
                    break;
                case 'yb':
                    result = (value / (divValue * 1000000000000000000000)).toFixed(3);
                    break;
                default :
                    return null;
            }
            if(isIncludeType == '1' || isIncludeType == 'true' || isIncludeType === true)
                return result + type;
            return result;
        }
    };

    function URLEncode(url) {
        return encodeURI(url);
    }

    /**
     * moc Util
     */
    var mobileDeviceList = new Array("iPhone", "iPod", "BlackBerry", "Android", "Windows CE", "LG", "MOT", "SAMSUNG", "SonyEricsson");
    moc.util = {
        isMobile: function () {
            var result = false;
            return result;
        },
        getMobileDevice: function () {
            var result = "";
            for(var device in mobileDeviceList){
                if(navigator.userAgent.match(mobileDeviceList[device]) != null){
                    result = mobileDeviceList[device];
                    break;
                }
            }
            return result;
        },
        getBrowser: function () {
            var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if(/trident/i.test(M[1])){
                tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
                return {name:'IE',version:(tem[1]||'')};
            }
            if(M[1]==='Chrome'){
                tem=ua.match(/\bOPR\/(\d+)/)
                if(tem!=null)   {return {name:'Opera', version:tem[1]};}
            }
            M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
            if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
            return {
                name: M[0],
                version: M[1]
            };
        },
        formSerializeJsonObject: function (formObj) {
            var result = {};
            if (formObj){
                var a = formObj.serializeArray();
                $.each(a, function() {
                    if (result[this.name]) {
                        if (!result[this.name].push) {
                            result[this.name] = [result[this.name]];
                        }
                        result[this.name].push(this.value || '');
                    } else {
                        result[this.name] = this.value || '';
                    }
                });
            }
            return result;
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

}).call(window);