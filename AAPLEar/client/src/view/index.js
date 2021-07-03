import Carousel from "../component/Carousel.js";
import Pagination from "../component/Pagination.js";
import AJAX from "../utils/AJAX.js";
import "../assets/css/index.scss";

export default class Index {
  constructor() {
    document.title = "耳机商城";
    this.app = document.querySelector("#app");
    this.createCarousel();
    this.createItemTitle();
    let prop = {};
    this.selectBool = false;
    location.hash
      .split("?")[1]
      .split("&")
      .forEach(function (item, value) {
        let itemArr = item.split("=");
        prop[itemArr[0]] = itemArr[1];
      });
    AJAX("/goodsList", prop).then((res) => {
      this.page = res.body.results.page;
      this.item = res.body.results.items;
      this.createBody();
      let currentPage = prop.page;
      new Pagination(this.app, currentPage, this.page, prop);
      this.init();
    });
  }

  init() {
    let div = document.querySelector("#app > div.select");
    let divT = div.offsetTop + 224;
    let div1 = document.querySelector("#body > div.con > div.body > div.left");
    window.addEventListener("scroll", (e) => {
      let scrollT = document.documentElement.scrollTop;
      if (scrollT > divT) {
        div.style.position = "fixed";
        div.style.top = "0";
        div.style.left = "0";
        div.style.width = "100%";
        div1.style.top = scrollT - divT + 56 + "px";
      } else {
        div.style.position = "";
        div1.style.top = 0;
      }
    });
  }

  createCarousel() {
    let imgSrc = ["left.png", "right.png", "lb01.png", "lb02.png", "lb03.png"];
    new Carousel(imgSrc, this.app);
  }

  createItemTitle() {
    let divSelect = document.createElement("div");
    divSelect.className = "select";
    let divContent = document.createElement("div");
    divContent.className = "content clearfix";
    let divLeft = document.createElement("div");
    divLeft.className = "select-left";
    let span0 = document.createElement("span");
    span0.textContent = "筛选";
    let a1 = document.createElement("a");
    a1.href = "/#/index?page=1&s=featured";
    a1.textContent = "重置";
    divLeft.appendChild(span0);
    divLeft.appendChild(a1);
    divLeft.addEventListener("click", (e) => {
      let left = document.querySelector("#body > div > div > div.left");
      let right = document.querySelector("#body > div > div > div.right");
      let divArr = document.querySelectorAll(
        "#body > div > div > div.right  div.div1 > a > div.div2"
      );
      if (this.selectBool === false) {
        left.style.display = "none";
        right.style.width = "1400px";
        divArr.forEach((item) => {
          item.style.height = "698px";
        });
        this.selectBool = true;
      } else {
        left.style.display = "block";
        right.style.width = "1202px";
        divArr.forEach((item) => {
          item.style.height = "613px";
        });
        this.selectBool = false;
      }
    });
    let divRight = document.createElement("div");
    divRight.className = "select-right";
    divRight.textContent = "排序方式:";
    let span1 = document.createElement("span");
    span1.textContent = "精选";
    span1.addEventListener("click", (e) => {
      this.sortClickHandler(e);
    });
    let span2 = document.createElement("span");
    span2.className = "bottom";
    let divSort = document.createElement("div");
    divSort.className = "sort";
    let ul = document.createElement("ul");
    let typeArr = ["精选", "最新", "价格:由低到高", "价格:由高到低"];
    let linkArr = [
      "/#/index?page=1&s=featured",
      "/#/index?page=1&s=newest",
      "/#/index?page=1&s=priceLH",
      "/#/index?page=1&s=priceHL",
    ];
    for (let i = 0; i < 4; i++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.textContent = typeArr[i];
      a.href = linkArr[i];
      li.appendChild(a);
      ul.appendChild(li);
    }
    divSort.appendChild(ul);
    divRight.appendChild(span1);
    divRight.appendChild(span2);
    divRight.appendChild(divSort);
    divContent.appendChild(divLeft);
    divContent.appendChild(divRight);
    divSelect.appendChild(divContent);
    this.app.appendChild(divSelect);
  }

  sortClickHandler(e) {
    let divSort = e.target.nextElementSibling.nextElementSibling;
    divSort.style.display = "block";
    e.target.nextElementSibling.className = "top";
    e.stopPropagation();
    let arr = Array.from(divSort.childNodes[0].childNodes);
    arr.forEach((item) => {
      let a = item.firstChild;
      if (a.textContent === e.target.textContent) {
        a.style.color = "#888";
        a.style.cursor = "default";
        a.href = "javascript:void(0)";
      }
    });
    document.onclick = (e1) => {
      divSort.style.display = "none";
      e.target.nextElementSibling.className = "bottom";
    };
  }

  createBody() {
    let divBody = document.createElement("div");
    divBody.id = "body";
    divBody.className = "clearfix";
    let divCon = document.createElement("div");
    divCon.className = "con";
    let divBody1 = document.createElement("div");
    divBody1.className = "body";
    let divLeft = document.createElement("div");
    divLeft.className = "left";
    let divRight = document.createElement("div");
    divRight.className = "right";
    let divTitle = document.createElement("div");
    divTitle.className = "title";
    let span = document.createElement("span");
    span.textContent = "产品类型";
    divTitle.appendChild(span);
    let ul = document.createElement("ul");
    let linkArr1 = ["headphone", "speaker", "headphonecase", "audioadapter"];
    let textArr = ["耳机", "扬声器", "耳机保护壳", "音频适配器"];
    let btn = document.querySelector(
      "#app > div.select > div > div.select-left > a"
    );
    for (let i = 0; i < 4; i++) {
      let obj = {};
      location.hash
        .split("?")[1]
        .split("&")
        .forEach((item) => {
          let item1 = item.split("=");
          obj[item1[0]] = item1[1];
        });
      obj.page = 1;
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.textContent = textArr[i];
      let str = "";
      for (let j in obj) {
        if (j === "f") continue;
        str += `${j}=${obj[j]}&`;
      }
      if (obj.f === undefined) {
        btn.style.display = "none";
        a.href = `#/index?${str.slice(0, -1)}&f=${linkArr1[i]}`;
        a.style.color = "#333";
      } else {
        btn.style.display = "inline";
        let arr = obj.f.split("-");
        let obj1 = {};
        for (let k in arr) {
          obj1[arr[k]] = k;
        }
        if (linkArr1[i] in obj1) {
          a.style.color = "#0070c9";
          li.style.backgroundColor = "#f2f2f2";
          delete obj1[linkArr1[i]];
        }
        let str = linkArr1[i] + "-";
        for (let k in obj1) {
          str += k + "-";
        }
        if (Object.keys(obj1).length === 0) {
          a.href = `#/index?${str.slice(0, -1)}`;
        } else {
          a.href = `#/index?${str.slice(0, -1)}&f=${str.slice(0, -1)}`;
        }
      }
      li.appendChild(a);
      ul.appendChild(li);
    }
    this.item.forEach((item) => {
      let div1 = document.createElement("div");
      div1.className = "div1";
      let aCon = document.createElement("a");
      aCon.href = `/#/detail?id=${item.id}`;
      let div2 = document.createElement("div");
      div2.className = "div2";
      let div3 = document.createElement("div");
      div3.className = "div3";
      let img1 = document.createElement("img");
      img1.src =
        "/src/assets/img/img-" + item.productImages.items[0].src.slice(6);
      let div4 = document.createElement("div");
      div4.className = "div4";
      let divTip = document.createElement("div");
      divTip.className = "tip";
      let span1 = document.createElement("span");
      span1.textContent = item.violatorTranslatedText
        ? item.violatorTranslatedText
        : " ";
      divTip.appendChild(span1);
      let divTitle = document.createElement("div");
      divTitle.className = "title";
      let a1 = document.createElement("a");
      a1.href = `/#/detail?id=${item.id}`;
      a1.textContent = item.title;
      divTitle.appendChild(a1);
      let divPrice = document.createElement("div");
      divPrice.className = "price";
      let price = String(item.productPrice);
      if (price.length > 3) {
        price = price.slice(0, -3) + "," + price.slice(-3);
      }
      divPrice.innerHTML = `RMB&nbsp;<span>${price}</span>`;
      let dl = document.createElement("dl");
      let dt = document.createElement("dt");
      dt.textContent = "All colors";
      dl.appendChild(dt);
      if (item.colorGallery.items.length > 0) {
        item.colorGallery.items.forEach((item, index) => {
          let dd = document.createElement("dd");
          let img2 = document.createElement("img");
          img2.width = "16px";
          img2.src = "/src/assets/img/" + item.src.slice(6);
          dd.appendChild(img2);
          dl.appendChild(dd);
        });
      }
      div4.appendChild(divTip);
      div4.appendChild(divTitle);
      div4.appendChild(divPrice);
      div4.appendChild(dl);
      div3.appendChild(img1);
      div3.appendChild(div4);
      div2.appendChild(div3);
      aCon.appendChild(div2);
      div1.appendChild(aCon);
      divRight.appendChild(div1);
    });
    divLeft.appendChild(divTitle);
    divLeft.appendChild(ul);
    divBody1.appendChild(divLeft);
    divBody1.appendChild(divRight);
    divCon.appendChild(divBody1);
    divBody.appendChild(divCon);
    this.app.appendChild(divBody);
  }
}
