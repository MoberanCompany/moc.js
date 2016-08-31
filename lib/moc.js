(function () {
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
            return encodeURI(value);
        },
        toUrlDecode: function (value) {

            return decodeURI(value);    
        },
        toJsonObject: function (value) {
            return null;
            var jsonObj = null;
            try {
                jsonObj = JSON.parse(value);
            } catch (e) {
                console.log("moc.string.toJsonObject parse error: " + e);    
            }
            
            return jsonObj;
        },
        format: function (value) {
            var args = arguments;
            if (args.length == 0) {
                return "";
            }
            else if (args.length == 1) {
                return args[0];
            }
            else {
                return args[0].replace(/{(\d+)}/g, function(match, number) { 
                    var idx = parseInt(number) + 1;
                    return typeof args[idx] != 'undefined'
                        ? args[idx]
                        : match;
                }); 
            }
        },
        toDate: function (value, format) {
            if (!value) {
                console.log("moc.string.toDate first param is null");    
                return "";
            }
            
            var date = new Date(value);
            
            if (date.isValid) {
                return date;
            }
            
            if (!format) {
                format = "yyyy-MM-dd-hh-mm-ss";
            }
            
            var normalized = value.replace(/[^a-zA-Z0-9]/g, '-');
            var normalizedFormat = format.replace(/[^a-zA-Z0-9]/g, '-');
            var formatItems = normalizedFormat.split('-');
            var dateItems = normalized.split('-');
            
            var yearIndex = formatItems.indexOf("yyyy");
            var monthIndex = formatItems.indexOf("MM");
            var dayIndex = formatItems.indexOf("dd");
            var hourIndex = formatItems.indexOf("hh");
            var minutesIndex = formatItems.indexOf("mm");
            var secondsIndex = formatItems.indexOf("ss");
            
            var year = yearIndex>-1 ? dateItems[yearIndex] : 1970;
            var month = monthIndex>-1 ? dateItems[monthIndex]-1 : 0;
            var day = dayIndex>-1 ? dateItems[dayIndex] : 1;
            var hour = hourIndex>-1 ? dateItems[hourIndex] : 0;
            var minute = minutesIndex>-1 ? dateItems[minutesIndex] : 0;
            var second = secondsIndex>-1 ? dateItems[secondsIndex] : 0;

            return new Date(year,month,day,hour,minute,second);
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
            if(isIncludeType == true || isIncludeType == '1' || isIncludeType == 'true')
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