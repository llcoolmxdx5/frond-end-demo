import QueryString from "../utils/Querystring.js";
import MainControl from "../controller/MainControl.js";
import MainModel from "../model/MainModel.js";
export default class AJAX {
    static method = "POST";
    static dataType = "JSON";
    constructor() {

    }
    static post(prom) {
        if (AJAX.dataType === AJAX.JSON) {
            AJAX.httpSend("POST", encodeURIComponent(JSON.stringify(prom)))
        } else if (AJAX.dataType === AJAX.QUERYSTRING) {
            AJAX.httpSend("POST", QueryString.stringify(prom));
        }
    }
    static get(prom) {
        if (AJAX.dataType === AJAX.JSON) {
            AJAX.httpSend("GET", encodeURIComponent(JSON.stringify(prom)))
        } else if (AJAX.dataType === AJAX.QUERYSTRING) {
            AJAX.httpSend("GET", QueryString.stringify(prom));
        }
    }
    static httpSend(type, data) {
        var data1 = (type === "POST" ? data : null);
        data = (type === "POST" ? "" : "?" + data);
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", AJAX.readyStateChangeHandler);
        xhr.open(type, "http://" + AJAX.URL + data);
        xhr.send(data1);
    }

    static readyStateChangeHandler(e) {
        if (this.readyState !== 4) return;
        if (this.readyState === 4 && this.status !== 200) {
            console.log("失败了");
            return;
        }
        var data;
        if (AJAX.dataType === AJAX.JSON) {
            data = JSON.parse(decodeURIComponent(this.response));
        } else if (AJAX.dataType === AJAX.QUERYSTRING) {
            data = QueryString.parse(this.response);
        }
        switch (data.type) {
            case 0x01:
                MainModel.getInstance().goodsList = data.result;
                MainControl.dispatch(MainControl.CREATE_GOODS_LIST_EVENT);
                break;
            case 0x02:
                MainModel.getInstance().shoppingList = data.result;
                MainControl.dispatch(MainControl.CREATE_SHOPPING_LIST_EVENT);
                break;
            case 0x03:
                MainModel.getInstance().shoppingList = data.result;
                MainControl.dispatch(MainControl.ADD_GOODS_EVENT);
                break;
            case 0x04:
                MainModel.getInstance().shoppingList = data.result;
                MainControl.dispatch(MainControl.CHANGE_NUM_EVENT);
                break;
            case 0x05:
                MainModel.getInstance().shoppingList = data.result;
                MainControl.dispatch(MainControl.DELETED_NUM_EVENT);
                break;
            case 0x06:
                MainModel.getInstance().shoppingList = data.result;
                MainControl.dispatch(MainControl.SELECTED_GOODS_EVENT);
                break;
        }
    }
    static get URL() {
        return "10.9.42.247:8010/api/v1";
    }
    static get JSON() {
        return "JSON";
    }
    static get QUERYSTRING() {
        return "queryString";
    }
}