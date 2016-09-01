(function () {
    var root = this;
    var moc = root.moc;
    "use strict";
    /**
     * moc String
     */
    moc.string = {
        toUrlEncode: function (value) {
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
}).call(window);