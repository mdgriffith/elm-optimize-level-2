var _String_startsWith = F2(
    function (prefix, str) {
        var prefixLength = prefix.length;
        var i = -1;
        if (str.length < prefixLength) {
            return false;
        }
        while (++i < prefixLength) {
            if (prefix[i] !== str[i]) { return false; }
        }
        return true;
    });