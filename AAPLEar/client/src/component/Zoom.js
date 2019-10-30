import Utils from "../utils/Utils.js";

class Zoom {
    static MASK_WH = 303.75;
    maskLeft = 0;
    maskTop = 0;

    constructor(_data) {
        this.data = _data;
        this.zoomCon = this.createElem();
        this.createMiniZoom();
        this.createMaxZoom();
    }

    createElem() {
        if (this.elem) return this.elem;
        return Utils.ce("div", {
            position: "absolute",
        });
    }

    appendTo(parent) {
        parent.appendChild(this.zoomCon);
    }

    updatePosition() {
        this.miniZoomRect = this.miniZoom.getBoundingClientRect();
        this.maxZoom.style.left = this.miniZoom.offsetWidth + 1 + "px";
    }

    getZoomHeight() {
        return this.miniZoom.offsetHeight;
    }

    createMiniZoom() {
        this.miniZoom = Utils.ce("div", {
            width: '450px',
            height: "450px",
            position: "absolute",
            border: "1px solid #999999",
            backgroundImage: 'url("src/assets/img/img-01-01.jpeg")',
            backgroundSize: '100% 100%'
        });
        this.mask = Utils.ce("div", {
            width: Zoom.MASK_WH + "px",
            height: Zoom.MASK_WH + "px",
            backgroundColor: "rgba(255,200,0,0.3)",
            position: "absolute",
            display: 'none',
        });
        this.miniZoom.appendChild(this.mask);
        this.zoomCon.appendChild(this.miniZoom);
        this.miniZoom.addEventListener("mouseenter", e => {
            this.mouseHandler(e)
        });
        this.miniZoom.addEventListener("mouseleave", e => {
            this.mouseHandler(e)
        });
    }

    createMaxZoom() {
        this.maxZoom = Utils.ce("div", {
            width: "540px",
            height: "540px",
            border: '1px solid #999999',
            display: "none",
            backgroundImage: "url(src/assets/img/img-01-01.jpeg)",
            position: "absolute",
            zIndex: 10
        });
        this.zoomCon.appendChild(this.maxZoom);
    }

    mouseHandler(e) {
        this.maxZoom.style.display = this.mask.style.display = e.type === "mouseenter" ? "block" : "none";
        if (e.type === "mouseenter") {
            this.miniZoom.addEventListener("mousemove", e => {
                this.maskMoveHandler(e)
            });
        } else {
            this.miniZoom.removeEventListener("mousemove", e => {
                this.maskMoveHandler(e)
            });
        }
    }

    maskMoveHandler(e) {
        this.miniZoomRect = this.miniZoom.getBoundingClientRect();
        this.maskLeft = e.clientX - this.miniZoomRect.x - Zoom.MASK_WH / 2;
        this.maskTop = e.clientY - this.miniZoomRect.y - Zoom.MASK_WH / 2;
        if (this.maskLeft <= 0) this.maskLeft = 0;
        if (this.maskTop <= 0) this.maskTop = 0;
        if (this.maskLeft >= this.miniZoomRect.width - Zoom.MASK_WH) this.maskLeft = this.miniZoomRect.width - 2 - Zoom.MASK_WH;
        if (this.maskTop >= this.miniZoomRect.height - Zoom.MASK_WH) this.maskTop = this.miniZoomRect.height - 2 - Zoom.MASK_WH;
        this.mask.style.left = this.maskLeft + "px";
        this.mask.style.top = this.maskTop + "px";
        Object.assign(this.maxZoom.style, {
            backgroundPositionX: -this.maskLeft * (540 / Zoom.MASK_WH) + "px",
            backgroundPositionY: -this.maskTop * (540 / Zoom.MASK_WH) + "px",
        })
    }

    updateZoomImg(src) {
        this.miniZoom.style.backgroundImage = this.maxZoom.style.backgroundImage = `url(${src})`;
    }
}

class Carousel {
    static ZOOM_IMG_CHANGE_EVENT = "zoom_img_change_event";
    // imgCon;

    constructor(_data) {
        this.data = _data;
        this.carousel = this.createElem();
        this.createCarouselBn();
        this.createImgCon();
    }

    createElem() {
        if (this.carousel) return this.carousel;
        return Utils.ce("div", {
            width: "450px",
            height: "58px",
            marginBottom: "18px",
            marginTop: "18px",
            position: "absolute",
            // backgroundColor:"rgba(255,0,0,0.2)"
        });
    }

    setCarouselTop(top) {
        this.carousel.style.top = top + "px";
    }

    appendTo(parent) {
        parent.appendChild(this.carousel);
    }

    createCarouselBn() {
        let bnList = ["left.png", "right.png"];
        for (let i = 0; i < bnList.length; i++) {
            let bn = Utils.ce("img", {
                    position: "absolute",
                    left: i === 0 ? "5px" : "none",
                    right: i === 1 ? "5px" : "none",
                    top: "15px"
                },
                {
                    src: "src/assets/img/" + bnList[i]
                });
            this.carousel.appendChild(bn);
            bn.addEventListener("click", e => {
                this.carouselBnHandler(e)
            });
        }
    }

    createImgCon() {
        let con = Utils.ce("div", {
            width: "380px",
            height: "58px",
            position: "absolute",
            left: "35px",
            overflow: "hidden"
        });
        this.imgCon = Utils.ce("ul", {
            height: "58px",
            listStyle: "none",
            margin: "0px",
            padding: "0px",
            transition: "all 0.2s",
            left: "0px",
            width: this.data.length * (58 + 18) + "px",
            position: "absolute"
        });
        for (let i = 0; i < this.data.length; i++) {
            let li = Utils.ce("li", {
                float: "left",
                margin: "0px 9px"
            });
            let img = Utils.ce("img", {
                // border:"2px solid #e53e41"
                width: '54px',
                height: '54px',
                border: "2px solid rgba(0,0,0,0)"
            }, {
                src: "src/assets/img/" + this.data[i]
            });
            li.appendChild(img);
            this.imgCon.appendChild(li);
            if (i === 0) this.changeImgIcon(img);
        }
        con.appendChild(this.imgCon);
        this.carousel.appendChild(con);
        this.imgCon.addEventListener("mouseover", e => {
            this.selectedImgHandler(e)
        });
    }

    carouselBnHandler(e) {
        if (e.currentTarget.src.indexOf("left") > -1) {
            this.imgCon.style.left = "0px";
        } else {
            this.imgCon.style.left = -(this.imgCon.offsetWidth - this.imgCon.parentElement.offsetWidth) + "px";
        }
    }

    selectedImgHandler(e) {
        if (e.target.nodeName !== "IMG") return;
        this.changeImgIcon(e.target);
    }

    changeImgIcon(elem) {
        if (this.pre) {
            this.pre.style.border = "2px solid rgba(0,0,0,0)";
        }
        this.pre = elem;
        this.pre.style.border = "2px solid #e53e41";
        let src = elem.src.replace("_icon", "");
        let evt = new Event(Carousel.ZOOM_IMG_CHANGE_EVENT);
        evt.src = src;
        document.dispatchEvent(evt);
    }
}

export default class GoodsZoom {
    constructor(_data) {
        this.data = _data;
        this.elem = this.createElem();
        this.zoom = new Zoom(_data);
        this.carousel = new Carousel(_data);
        this.zoom.appendTo(this.elem);
        this.carousel.appendTo(this.elem);
        document.addEventListener(Carousel.ZOOM_IMG_CHANGE_EVENT, e => {
            this.changeZoomImage(e);
        });
    }
    init(){
        let img = document.querySelector('#app > div > div:nth-child(2) > div > ul > li > img');
        let evt = new Event(Carousel.ZOOM_IMG_CHANGE_EVENT);
        evt.src = img.src;
        document.dispatchEvent(evt);
    }

    createElem() {
        if (this.elem) return this.elem;
        return Utils.ce("div", {
            position: "relative",
            top: "50px",
            marginLeft: "340px"
        });
    }

    appendTo(parent) {
        parent.appendChild(this.elem);
        this.zoom.updatePosition();
        this.carousel.setCarouselTop(this.zoom.getZoomHeight());
        this.init()
    }

    changeZoomImage(e) {
        this.zoom.updateZoomImg(e.src);
    }
}