(function () {
    "use strict";
    var root = this;
    var moc = root.moc = {
        version: '1.0',
        config: {
        }
    };
    moc.getVersion = function() {
        return this.version;
    };

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
}).call(window);