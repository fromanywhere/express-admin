class Utils {
    static getLink(controllerName, params) {
        var url = '/' + controllerName + '?';
        if (params && Object.keys(params).length) {
            for (var paramId in params) {
                if (params.hasOwnProperty(paramId)) {
                    url += '&' + encodeURIComponent(paramId) + '=' + encodeURIComponent(params[paramId]);
                }
            }
        }
        return url;
    }

    static escapeHTML(unsafe_str) {
        return unsafe_str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

module.exports = Utils;