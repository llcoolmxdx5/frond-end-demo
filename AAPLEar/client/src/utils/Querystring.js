export default class QueryString {
    constructor() {

    }
    static stringifyPrimitive(v) {
        switch (typeof v) {
            case 'string':
                return v;
            case 'boolean':
                return v ? 'true' : 'false';
            case 'number':
                return isFinite(v) ? v : '';
            default:
                return '';
        }
    }
    static hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    static stringify(obj, sep, eq, name) {
        sep = sep || '&';
        eq = eq || '=';
        if (obj === null) {
            obj = undefined;
        }
        if (typeof obj === 'object') {
            return Object.keys(obj).map(function (k) {
                var ks = encodeURIComponent(QueryString.stringifyPrimitive(k)) + eq;
                if (Array.isArray(obj[k])) {
                    return obj[k].map(function (v) {
                        return ks + encodeURIComponent(QueryString.stringifyPrimitive(v));
                    }).join(sep);
                } else {
                    return ks + encodeURIComponent(QueryString.stringifyPrimitive(obj[k]));
                }
            }).join(sep);
        }
        if (!name) return '';
        return encodeURIComponent(QueryString.stringifyPrimitive(name)) + eq +
            encodeURIComponent(QueryString.stringifyPrimitive(obj));
    }
    static parse(qs, sep, eq, options) {
        sep = sep || '&';
        eq = eq || '=';
        var obj = {};
        if (typeof qs !== 'string' || qs.length === 0) {
            return obj;
        }
        var regexp = /\+/g;
        qs = qs.split(sep);

        var maxKeys = 1000;
        if (options && typeof options.maxKeys === 'number') {
            maxKeys = options.maxKeys;
        }

        var len = qs.length;
        if (maxKeys > 0 && len > maxKeys) {
            len = maxKeys;
        }
        for (var i = 0; i < len; ++i) {
            var x = qs[i].replace(regexp, '%20'),
                idx = x.indexOf(eq),
                kstr, vstr, k, v;

            if (idx >= 0) {
                kstr = x.substr(0, idx);
                vstr = x.substr(idx + 1);
            } else {
                kstr = x;
                vstr = '';
            }

            k = decodeURIComponent(kstr);
            v = decodeURIComponent(vstr);

            if (!QueryString.hasOwnProperty(obj, k)) {
                obj[k] = v;
            } else if (Array.isArray(obj[k])) {
                obj[k].push(v);
            } else {
                obj[k] = [obj[k], v];
            }
        }

        return obj;
    }
}