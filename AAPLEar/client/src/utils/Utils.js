export default class Utils {
    static IMG_LOAD_FINISH = "img_load_finish";
    constructor() {

    }
    static ce(type, style, prop) {
        let elem = document.createElement(type);
        if (style) Object.assign(elem.style, style);
        if (prop) Object.assign(elem, prop);
        return elem;
    }
    static randomColor() {
        let c = "#";
        for (let i = 0; i < 6; i++) {
            c += Math.floor(Math.random() * 16).toString(16);
        }
        return c;
    }
    static random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    static loadImgs(imgList, baseUrl, handler, type) {
        let img = new Image();
        img.addEventListener("load", Utils.loadHandler);
        let url = Utils.getImgUrl(imgList[0], baseUrl, type);
        img.src = url;
        img.imgList = imgList;
        img.baseUrl = baseUrl;
        img.handler = handler;
        img.type = type;
        img.list = [];
        img.num = 0;
    }
    static loadHandler(e) {
        let img = this.cloneNode(false);
        this.list.push(img);
        this.num++;
        if (this.num > this.imgList.length - 1) {
            this.removeEventListener("load", Utils.loadHandler);
            if (this.handler) {
                this.handler(this.list);
                return;
            }
            let evt = new Event(Utils.IMG_LOAD_FINISH);
            evt.list = this.list;
            document.dispatchEvent(evt);
            return;
        }
        this.src = Utils.getImgUrl(this.imgList[this.num], this.baseUrl, this.type);
    }
    static getImgUrl(name, baseUrl, type) {
        let url = "";
        if (baseUrl) url += baseUrl;
        if (type) {
            if (name.indexOf(".") < 0) name += "." + type;
            else name = name.replace(/\.\w+$/, "." + type);
        }
        url += name;
        return url
    }
}