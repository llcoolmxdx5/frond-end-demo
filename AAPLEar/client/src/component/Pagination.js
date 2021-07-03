import "../assets/css/pagination.scss";

export default class Pagination {
  constructor(parent, currentPage, totalPage, prop) {
    this.currentPage = Number(currentPage);
    this.totalPage = Number(totalPage);
    this.parent = parent;
    this.prop = prop;
    if (this.totalPage !== 1) this.createBody();
  }
  getProp(page1) {
    let prop1 = this.prop;
    prop1.page = page1;
    let str = "";
    for (let i in prop1) {
      str += `${i}=${prop1[i]}&`;
    }
    str = str.slice(0, -1);
    return str;
  }
  createBody() {
    let page = document.createElement("div");
    page.id = "page";
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let href1 =
      this.currentPage === 1
        ? ""
        : `href="#/index?${this.getProp(this.currentPage - 1)}`;
    let className1 = this.currentPage === 1 ? "" : 'class="active"';
    li1.innerHTML = `<a ${href1} ${className1}>&lt;</a>`;
    let li2 = document.createElement("li");
    let input = document.createElement("input");
    input.type = "text";
    input.value = this.currentPage;
    input.addEventListener("keypress", (e) => {
      this.keypressHandler(e);
    });
    let span1 = document.createElement("span");
    span1.textContent = "/";
    let span2 = document.createElement("span");
    span2.textContent = this.totalPage;
    li2.appendChild(input);
    li2.appendChild(span1);
    li2.appendChild(span2);
    let li3 = document.createElement("li");
    let href2 =
      this.currentPage === this.totalPage
        ? ""
        : `href="#/index?${this.getProp(this.currentPage + 1)}"`;
    let className2 =
      this.currentPage === this.totalPage ? "" : 'class="active"';
    li3.innerHTML = `<a ${href2} ${className2}>&gt;</a>`;
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    page.appendChild(ul);
    this.parent.appendChild(page);
  }
  keypressHandler(e) {
    if (e.which === 13) {
      let value = Number(e.target.value);
      if (Object.prototype.toString.call(value).slice(8, -1) !== "Number")
        return;
      if (value === this.currentPage) return;
      if (value < 1 || value > this.totalPage) return;
      location.hash = `#/index?${this.getProp(value)}`;
    }
  }
}
