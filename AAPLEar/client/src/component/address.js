import City from "../assets/city_code.js";
import Utils from "../utils/Utils.js";
export default class Address {
  constructor(parent) {
    this.parent = parent;
    this.createUl1();
    this.bool = false;
  }
  createUl1() {
    let ul = Utils.ce("ul", {
      listStyle: "none",
      width: "150px",
      height: "400px",
      border: "1px solid #ccc",
      overflow: "auto",
      padding: 0,
    });
    for (let i = 0; i < City.length; i++) {
      let li = Utils.ce("li", {});
      li.textContent = City[i]["name"];
      li.addEventListener("mouseenter", (e) => {
        this.mouseHandler1(e);
      });
      ul.appendChild(li);
    }
    this.parent.appendChild(ul);
  }
  mouseHandler1(e) {
    if (e.type === "mouseenter") {
      e.target.className = "current";
      let arr = this.siblings(e.target);
      for (let i = 0; i < arr.length; i++) {
        arr[i].className = "";
      }
      for (let i = 0; i < City.length; i++) {
        if (City[i]["name"] === e.target.textContent) {
          this.procince = e.target.textContent;
          this.createUl2(City[i]["city"]);
        }
      }
    }
    // else if (e.type === 'mouseleave') {
    //     e.target.style.backgroundColor = 'white'
    // }
  }
  createUl2(item) {
    if (this.ul2) {
      this.ul2.remove();
      this.ul2 = null;
    }
    this.ul2 = Utils.ce("ul", {
      listStyle: "none",
      width: "180px",
      height: "400px",
      border: "1px solid #ccc",
      overflow: "auto",
      position: "absolute",
      left: "160px",
      top: "21px",
    });
    for (let i = 0; i < item.length; i++) {
      let li = Utils.ce("li", {});
      li.textContent = item[i]["name"];
      li.addEventListener("mouseenter", (e) => {
        this.mouseHandler2(e, item);
      });
      this.ul2.appendChild(li);
    }
    this.parent.appendChild(this.ul2);
  }
  mouseHandler2(e, item) {
    if (e.type === "mouseenter") {
      e.target.className = "current";
      let arr = this.siblings(e.target);
      for (let i = 0; i < arr.length; i++) {
        arr[i].className = "";
      }
      for (let i = 0; i < item.length; i++) {
        if (item[i]["name"] === e.target.textContent) {
          this.city = e.target.textContent;
          this.createUl3(item[i]["area"]);
        }
      }
    }
  }
  createUl3(item) {
    if (this.ul3) {
      this.ul3.remove();
      this.ul3 = null;
    }
    this.ul3 = Utils.ce("ul", {
      listStyle: "none",
      width: "180px",
      height: "400px",
      border: "1px solid #ccc",
      overflow: "auto",
      position: "absolute",
      left: "360px",
      top: "21px",
    });
    for (let i = 0; i < item.length; i++) {
      let li = Utils.ce("li", {});
      li.textContent = item[i]["name"];
      li.addEventListener("mouseenter", (e) => {
        this.mouseHandler3(e);
      });
      li.addEventListener("mouseleave", (e) => {
        this.mouseHandler3(e);
      });
      li.addEventListener("click", (e) => {
        this.clickHandler(e);
      });
      this.ul3.appendChild(li);
    }
    this.parent.appendChild(this.ul3);
  }
  mouseHandler3(e) {
    if (e.type === "mouseenter") {
      e.target.style.backgroundColor = "green";
    } else if (e.type === "mouseleave") {
      e.target.style.backgroundColor = "white";
    }
  }
  clickHandler(e) {
    this.town = e.target.textContent;
    let address = document.querySelector("#address > div");
    address.style.display = "none";
    let add = document.querySelector("#address > a");
    add.textContent = "送货地址为：" + this.procince + this.city + this.town;
    localStorage.address = JSON.stringify(
      "送货地址为：" + this.procince + this.city + this.town
    );
  }
  getAddress() {
    return this.procince + this.city + this.town;
  }
  siblings(elm) {
    var a = [];
    var p = elm.parentNode.children;
    for (var i = 0, pl = p.length; i < pl; i++) {
      if (p[i] !== elm) a.push(p[i]);
    }
    return a;
  }
}
