(function() {
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
    var moc = root.moc = {
        version: '1.0',
        config: {
            logLevel: LOG_LEVEL_DEBUG,
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
    function URLEncode(url) {
        return encodeURI(url);
    }

    /**
     * moc Util
     */
    moc.util = {
        isMobile: function () {
            var check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        },
        getMobileDevice: function () {
            
        },
        
        getCookie: function(cName) {
            return getCookie(cName);
        },
        setCookie: function(cName, cValue, cDay) {
            if (cDay) {
                setCookie(cName, cValue, cDay);
            } else {
                setCookie(cName, cValue, 30);
            }
        },
        checkLocalStorage: function() {
            return checkLocalStorage();
        },
        saveLocalStorage: function(key, value) {
            var res = false;
            if (checkLocalStorage()) {
                localStorage.setItem(key, value);
                res = true;
            }
            return res;
        },
        getLocalStorage: function(key) {
            var res = false;
            if (checkLocalStorage()) {
                res = localStorage.getItem(key);
            }
            return res;
        },
        removeLocalStorage: function(key) {
            var res = false;
            if (checkLocalStorage()) {
                localStorage.removeItem(key);
                res = true;
            }
            return res;
        },
    };
    
    function setCookie(cName, cValue, cDay){
        var expire = new Date();
        expire.setDate(expire.getDate() + cDay);
        var cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
        if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
        document.cookie = cookies;
    };

    function getCookie(cName) {
        cName = cName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cName);
        var cValue = '';
        if(start != -1){
            start += cName.length;
            var end = cookieData.indexOf(';', start);
            if(end == -1)end = cookieData.length;
            cValue = cookieData.substring(start, end);
        }
        return unescape(cValue);
    };
    
    function checkLocalStorage(){
        var test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch(e) {
            return false;
        }
    };

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