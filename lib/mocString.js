/**
 * moc.js String 확장 기능 - v0.1
 */
Object.extend(String.prototype, (function(){
    /**
     * URL Encoding String을 리턴 합니다.
     * @param targetStr
     * @returns {string}
     */
    function toUrlEncode(targetStr){
        return "";
    }

    /**
     * URL Decode String을 리턴합니다.
     * @param targetStr
     * @returns {string}
     */
    function toUrlDecode(targetStr){
        return "";
    }

    /**
     * Json String을 Json Object로 변환하여 리턴합니다.
     * @param targetStr
     * @returns {Json Object}
     */
    function toJsonObject(targetStr){
        return null;
    }

    function format(string) {
        return "";
    }

    /**
     * 날짜 형태의 Date String을 Date Object로 변환하여 리턴합니다.
     * @param targetStr
     * @returns {Date}
     */
    function toDate(targetStr){
        var result = new Date();
        return result;
    }

})());
