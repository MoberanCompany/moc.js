/**
 * moc Number
 */
(function () {
    var root = this;
    var moc = root.moc;
    "use strict";
    moc.number = {
        toComma: function (value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        fillZero: function (value, length) {
            return Array(Math.max(length - String(value).length + 1, 0)).join('0') + value;
        },
        toBytes: function (value, type, isIncludeType) {
            var result;
            var divValue = 1024;
            switch (type.toLowerCase()) {
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
            if (isIncludeType == '1' || isIncludeType == 'true' || isIncludeType === true)
                return result + type;
            return result;
        }
    };
}).call(window);