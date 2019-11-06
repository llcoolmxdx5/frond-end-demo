# 自己实现一个路由

## 路由原理

前端路由实现起来其实很简单，本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式

- hash 模式
- history 模式

`www.test.com/##/` 就是 Hash URL，当 `##` 后面的哈希值发生变化时，不会向服务器请求数据，可以通过 `hashchange` 事件来监听到 URL 的变化，从而进行跳转页面。

![img](https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-043729.png)

History 模式是 HTML5 新推出的功能，比之 Hash URL 更加美观

![img](https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-043731.png)

## hash & history 基础

### hash

现在的网络应用程序越来越多的使用AJAX异步请求完成页面的无缝刷新，导致浏览器的URL不会发生任何变化而完成了请求，从而破换了用户浏览体验。同时本次浏览的页面内容在用户下次使用URL访问时将无法重新呈现，而解决该问题的一个途径便是使用`window.location.hash`属性及窗口的`onhashchange`事件下面具体介绍几个使用过程中必须理解的要点。：

1，散列值浏览器是不会随请求发送到服务器端的（即地址栏中＃及以后的内容）。

2，可以通过window.location.hash属性获取和设置的哈希值。

3，如果注册onhashchange事件，设置散列值会触发事件。可以通过设置window.onhashchange注册事件监听器，也可以在主体元素上设置onhashchange属性注册。

4，window.location.hash值的变化会直接反应到浏览器地址栏（＃后面的部分会发生变化）。

5，同时浏览器地址栏散列值的变化也会触发window.location.hash值的变化，从而触发onhashchange事件。

6，当浏览器地址栏中URL包含哈希如 `http://www.baidu.com/#home`，这时按下输入，浏览器发送`http://www.baidu.com/`请求至服务器，请求完毕之后设置散列值为#home，进而触发onhashchange事件。

7，当只改变浏览器地址栏URL的哈希部分，这时按下回车，浏览器不会发送任何请求至服务器，这时发生的只是设置散列值新修改的哈希值，并触发onhashchange事件。

8，html`<a>`标签属性href可以设置为页面的元素ID如#top，当点击该链接时页面跳转至该id元素所在区域，同时浏览器自动设置window.location.hash属性，同时地址栏哈希值发生改变，并触发onhashchange事件。

### history

#### 概述

`window.history`属性指向 History 对象，它表示当前窗口的浏览历史。

History 对象保存了当前窗口访问过的所有页面网址。下面代码表示当前窗口一共访问过3个网址。

```js
window.history.length // 3
```

由于安全原因，浏览器不允许脚本读取这些地址，但是允许在地址之间导航。

```js
// 后退到前一个网址
history.back()

// 等同于
history.go(-1)
```

浏览器工具栏的“前进”和“后退”按钮，其实就是对 History 对象进行操作。

#### 属性

History 对象主要有两个属性。

- `History.length`：当前窗口访问过的网址数量（包括当前网页）
- `History.state`：History 堆栈最上层的状态值（详见下文）

```js
// 当前窗口访问过多少个网页
window.history.length // 1

// History 对象的当前状态
// 通常是 undefined，即未设置
window.history.state // undefined
```

#### 方法

**`History.back()、History.forward()、History.go()`**

这三个方法用于在历史之中移动。

- `History.back()`：移动到上一个网址，等同于点击浏览器的后退键。对于第一个访问的网址，该方法无效果。
- `History.forward()`：移动到下一个网址，等同于点击浏览器的前进键。对于最后一个访问的网址，该方法无效果。
- `History.go()`：接受一个整数作为参数，以当前网址为基准，移动到参数指定的网址，比如`go(1)`相当于`forward()`，`go(-1)`相当于`back()`。如果参数超过实际存在的网址范围，该方法无效果；如果不指定参数，默认参数为`0`，相当于刷新当前页面。

```js
history.back();
history.forward();
history.go(-2);
```

`history.go(0)`相当于刷新当前页面。

```js
history.go(0); // 刷新当前页面
```

注意，移动到以前访问过的页面时，页面通常是从浏览器缓存之中加载，而不是重新要求服务器发送新的网页。

**`History.pushState()`**

`History.pushState()`方法用于在历史中添加一条记录。

```js
window.history.pushState(state, title, url)
```

该方法接受三个参数，依次为：

- `state`：一个与添加的记录相关联的状态对象，主要用于`popstate`事件。该事件触发时，该对象会传入回调函数。也就是说，浏览器会将这个对象序列化以后保留在本地，重新载入这个页面的时候，可以拿到这个对象。如果不需要这个对象，此处可以填`null`。
- `title`：新页面的标题。但是，现在所有浏览器都忽视这个参数，所以这里可以填空字符串。
- `url`：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址。

假定当前网址是`example.com/1.html`，使用`pushState()`方法在浏览记录（History 对象）中添加一个新记录。

```js
var stateObj = { foo: 'bar' };
history.pushState(stateObj, 'page 2', '2.html');
```

添加新记录后，浏览器地址栏立刻显示`example.com/2.html`，但并不会跳转到`2.html`，甚至也不会检查`2.html`是否存在，它只是成为浏览历史中的最新记录。这时，在地址栏输入一个新的地址(比如访问`google.com`)，然后点击了倒退按钮，页面的 URL 将显示`2.html`；你再点击一次倒退按钮，URL 将显示`1.html`。

总之，`pushState()`方法不会触发页面刷新，只是导致 History 对象发生变化，地址栏会有反应。

使用该方法之后，就可以用`History.state`属性读出状态对象。

```js
var stateObj = { foo: 'bar' };
history.pushState(stateObj, 'page 2', '2.html');
history.state // {foo: "bar"}
```

如果`pushState`的 URL 参数设置了一个新的锚点值（即`hash`），并不会触发`hashchange`事件。反过来，如果 URL 的锚点值变了，则会在 History 对象创建一条浏览记录。

如果`pushState()`方法设置了一个跨域网址，则会报错。

```js
// 报错
// 当前网址为 http://example.com
history.pushState(null, '', 'https://twitter.com/hello');
```

上面代码中，`pushState`想要插入一个跨域的网址，导致报错。这样设计的目的是，防止恶意代码让用户以为他们是在另一个网站上，因为这个方法不会导致页面跳转。

**`history.replaceState()`**

`History.replaceState()`方法用来修改 History 对象的当前记录，其他都与`pushState()`方法一模一样。

假定当前网页是`example.com/example.html`。

```js
history.pushState({page: 1}, 'title 1', '?page=1')
// URL 显示为 http://example.com/example.html?page=1

history.pushState({page: 2}, 'title 2', '?page=2');
// URL 显示为 http://example.com/example.html?page=2

history.replaceState({page: 3}, 'title 3', '?page=3');
// URL 显示为 http://example.com/example.html?page=3

history.back()
// URL 显示为 http://example.com/example.html?page=1

history.back()
// URL 显示为 http://example.com/example.html

history.go(2)
// URL 显示为 http://example.com/example.html?page=3
```

#### popstate 事件

每当同一个文档的浏览历史（即`history`对象）出现变化时，就会触发`popstate`事件。

注意，仅仅调用`pushState()`方法或`replaceState()`方法 ，并不会触发该事件，只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用`History.back()`、`History.forward()`、`History.go()`方法时才会触发。另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。

使用的时候，可以为`popstate`事件指定回调函数。

```js
window.onpopstate = function (event) {
  console.log('location: ' + document.location);
  console.log('state: ' + JSON.stringify(event.state));
};

// 或者
window.addEventListener('popstate', function(event) {
  console.log('location: ' + document.location);
  console.log('state: ' + JSON.stringify(event.state));
});
```

回调函数的参数是一个`event`事件对象，它的`state`属性指向`pushState`和`replaceState`方法为当前 URL 所提供的状态对象（即这两个方法的第一个参数）。上面代码中的`event.state`，就是通过`pushState`和`replaceState`方法，为当前 URL 绑定的`state`对象。

这个`state`对象也可以直接通过`history`对象读取。

```js
var currentState = history.state;
```

注意，页面第一次加载的时候，浏览器不会触发`popstate`事件。

## 实现

> 单页面应用利用了JavaScript动态变换网页内容,避免了页面重载;路由则提供了浏览器地址变化,网页内容也跟随变化,两者结合起来则为我们提供了体验良好的单页面web应用

### 前端路由实现方式

路由需要实现三个功能:

   ①浏览器地址变化,切换页面;

   ②点击浏览器【后退】、【前进】按钮，网页内容跟随变化；

   ③刷新浏览器，网页加载当前路由对应内容

在单页面web网页中, 单纯的浏览器地址改变, 网页不会重载, 如单纯的hash网址改变网页不会变化,因此我们的路由主要是通过监听事件, 并利用js实现动态改变网页内容,有两种实现方式:

`hash`路由:  监听浏览器地址hash值变化,执行相应的js切换网页
`history`路由:  利用history API实现url地址改变, 网页内容改变

#### hash路由

首先定义一个`Router`类

```js
class Router {
  constructor(obj) {
    // 路由模式
    this.mode = obj.mode
    // 配置路由
    this.routes = {
      '/index'              : 'views/index/index',
      '/index/detail'       : 'views/index/detail/detail',
      '/index/detail/more'  : 'views/index/detail/more/more',
      '/subscribe'          : 'views/subscribe/subscribe',
      '/proxy'              : 'views/proxy/proxy',
      '/state'              : 'views/state/stateDemo',
      '/state/sub'          : 'views/state/components/subState',
      '/dom'                : 'views/visualDom/visualDom',
      '/error'              : 'views/error/error'
    }
    this.init()
  }
}
```

路由初始化`init()`时监听`load`,`hashchange`两个事件:

```js
window.addEventListener('load', this.hashRefresh.bind(this), false);
window.addEventListener('hashchange', this.hashRefresh.bind(this), false);
```

浏览器地址hash值变化直接通过a标签链接实现

```js
<nav id="nav" class="nav-tab">
  <ul class='tab'>
    <li><a class='nav-item' href="#/index">首页</a></li>
    <li><a class='nav-item' href="#/subscribe">观察者</a></li>
    <li><a class='nav-item' href="#/proxy">代理</a></li>
    <li><a class='nav-item' href="#/state">状态管理</a></li>
    <li><a class='nav-item' href="#/dom">虚拟DOM</a></li>
  </ul>
</nav>
<div id="container" class='container'>
  <div id="main" class='main'></div>
</div>
```

hash值变化后,回调方法:

```js
/**
 * hash路由刷新执行
 */
hashRefresh() {
  // 获取当前路径,去掉查询字符串,默认'/index'
  var currentURL = location.hash.slice(1).split('?')[0] || '/index';
  this.name = this.routes[this.currentURL]
  this.controller(this.name)
}
/**
  * 组件控制器
  * @param {string} name
  */
controller(name) {
  // 获得相应组件
  var Component = require('../' + name).default;
  // 判断是否已经配置挂载元素,默认为$('#main')
  var controller = new Component($('#main'))
}
```

考虑到存在多级页面嵌套路由的存在,需要对嵌套路由进行处理:

- 直接子页面路由时,按父路由到子路由的顺序加载页面
- 父页面已经加载,再加载子页面时,父页面保留,只加载子页面

改造后的路由刷新方法为:

```js
hashRefresh() {
  // 获取当前路径,去掉查询字符串,默认'/index'
  var currentURL = location.hash.slice(1).split('?')[0] || '/index';  
  // 多级链接拆分为数组,遍历依次加载
  this.currentURLlist = currentURL.slice(1).split('/')
  this.url = ""
  this.currentURLlist.forEach((item, index) => {
    // 导航菜单激活显示
    if (index === 0) {
      this.navActive(item)
    }
    this.url += "/" + item
    this.name = this.routes[this.url]
    // 404页面处理
    if (!this.name) {
      location.href = '#/error'
      return false
    }
    // 对于嵌套路由的处理
    if (this.oldURL && this.oldURL[0]==this.currentURLlist[0]) {
      this.handleSubRouter(item,index)
    } else {
      this.controller(this.name)
    }
  });
  // 记录链接数组,后续处理子级组件
  this.oldURL = JSON.parse(JSON.stringify(this.currentURLlist))
}
/**
  * 处理嵌套路由
  * @param {string} item 链接list中当前项
  * @param {number} index 链接list中当前索引
  */
handleSubRouter(item,index){
  // 新路由是旧路由的子级
  if (this.oldURL.length < this.currentURLlist.length) {
    // 相同路由部分不重新加载
    if (item !== this.oldURL[index]) {
      this.controller(this.name)
    }
  }
  // 新路由是旧路由的父级
  if (this.oldURL.length > this.currentURLlist.length) {
    var len = Math.min(this.oldURL.length, this.currentURLlist.length)
    // 只重新加载最后一个路由
    if (index == len - 1) {
      this.controller(this.name)
    }
  }
}
```

这样,一个hash路由组件就实现了。

使用时,只需new一个Router实例即可:`new Router({mode:'hash'})`

#### history 路由

`window.history`属性指向 History 对象,是浏览器的一个属性,表示当前窗口的浏览历史,History 对象保存了当前窗口访问过的所有页面地址。

> webpack开发环境下,需要在devServer对象添加以下配置:
>
> ```js
> historyApiFallback: {
>   rewrites: [
>     { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
>   ],
> }
> ```

history路由主要是通过`history.pushState()`方法向浏览记录中添加一条历史记录,并同时触发js回调加载页面

当【前进】、【后退】时，会触发`history.popstate` 事件,加载`history.state`中存放的路径

history路由实现与hash路由的步骤类似,由于需要配置路由模式切换,页面中所有的a链接都采用了hash类型链接,history路由初始化时,需要拦截a标签的默认跳转:

```js
  /**
   * history模式劫持 a链接
   */
  bindLink() {
    $('#nav').on('click', 'a.nav-item', this.handleLink.bind(this))
  }
 /**
   * history 处理a链接
   * @param  e 当前对象Event
   */
  handleLink(e) {
    e.preventDefault();
    // 获取元素路径属性
    let href = $(e.target).attr('href')
    // 对非路由链接直接跳转
    if (href.slice(0, 1) !== '#') {
      window.location.href = href
    } else {
      let path = href.slice(1)
      history.pushState({
        path: path
      }, null, path)
      // 加载相应页面
      this.loadView(path.split('?')[0])
    }
  }
```

history路由初始化需要绑定`load`、`popstate`事件

```js
this.bindLink()
window.addEventListener('load', this.loadView.bind(this, location.pathname));
window.addEventListener('popstate', this.historyRefresh.bind(this));
```

浏览是【前进】或【后退】时,触发`popstate`事件,执行回调函数

```js
/**
  * history模式刷新页面
  * @param  e  当前对象Event
  */
historyRefresh(e) {
  const state = e.state || {}
  const path = state.path.split('?')[0] || null
  if (path) {
    this.loadView(path)
  }
}
```

history路由模式首次加载页面时,可以默认一个页面,这时可以用`history.replaceState`方法

```js
if (this.mode === 'history' && currentURL === '/') {
  history.replaceState({path: '/'}, null, '/')
  currentURL = '/index'
}
```

对于404页面的处理,也类似

```js
history.replaceState({path: '/error'}, null, '/error')
this.loadView('/error')
```

#### 整合代码

App.js

```js
import Router from './router/index'

const MODE = 'history';

class App {
  constructor() {
    this.initEvent();
    this.router = new Router(MODE);
  }

  initEvent() {
    var self = this;
    $("nav").on('click', 'li', function () {
      $(this).addClass("active").siblings().removeClass('active');
      let path = $(this).attr("data-hash");
      if (self.mode === 'hash') {
        location.hash = path;
      } else {
        history.pushState({ url: path }, '', path);
        self.router.loadView(path);
      }

    })
  }
}

new App();
```

Router/index.js

```js
import positionController from '../controller/positionController';
import searchController from '../controller/searchController';
import profrileController from '../controller/profileController';
import detailController from '../controller/detailController';
import errorPage from '../controller/404';

export default class Routr {
  constructor(mode) {
    this.mode = mode ? mode : 'hash';
    this.initEvent();
    this.routers = {
      "position": positionController,
      "position/detail": detailController,
      "search": searchController,
      "profile": profrileController,
      "404": errorPage
    }
    //默认加载页面
    this.loadView('position');
  }

  //加载指定视图
  loadView(path) {
    if (!path || path === "") {
      path = "position";
    }
    let controller = this.routers[path];
    new controller().render()
  }

  //事件绑定
  initEvent() {
    if (this.mode === 'hash') {
      window.addEventListener('hashchange', () => {
        console.log(location.hash);
        var hash = location.hash.replace('#', '');
        let id;
        if (/details\//.test(hash)) {
          id = hash.split('/')[1];
          hash = hash.split('/')[0];
        }
        if (this.routers[hash]) {
          this.loadView(hash);
        } else {
          this.loadView("404");
        }
      })
    } else {
      window.addEventListener('popstate', () => {
        let url = history.state ? history.state.url : 'position';
        this.loadView(url);
      })

    }

  }

}
```

## 移动端事件

在前端的移动Web开发中，有一部分事件只在移动端产生，如触摸相关的事件。接下来给大家简单总结一下移动端的事件。

### 1. PC端事件在移动端的兼容问题

#### 1.1 click事件的200~300ms延迟问题

由于移动端默认的布局视口宽度是980像素，所以网页文字非常小，为了快速让网页还原到原来的大小，Safari最新引入了双击缩放功能：用户双击手机页面的时候，浏览器会智能的缩放当前页面到原始大小。

> 双击缩放的原理就是，当用户click一次之后，浏览器会经过约300ms之后检测是否再有一次click，如果有的话，就会缩放页面。否则的话就是一个click事件。

由于双击缩放功能存在，click事件触发就会有大约200~300ms的延迟。

#### 1.2 dblclick事件失效

由于双击缩放的存在，pc端的dblclick事件也失效了。

### 2. 移动端特有的touch事件

由于移动端设备大都具备触摸功能，所以移动端浏览器都引入了触摸(touch)事件。

touch相关的事件跟普通的其他dom事件一样使用，可以直接用addEventListener来监听和处理。

最基本的touch事件包括4个事件：

1. touchstart： 当在屏幕上按下手指时触发
2. touchmove： 当在屏幕上移动手指时触发
3. touchend： 当在屏幕上抬起手指时触发
4. touchcancel 当一些更高级别的事件发生的时候（如电话接入或者弹出信息）会取消当前的touch操作，即触发touchcancel。一般会在touchcancel时暂停游戏、存档等操作。

#### 2.1 touch事件与click事件同时触发

在很多情况下，触摸事件和鼠标事件会同时被触发（目的是让没有对触摸设备优化的代码仍然可以在触摸设备上正常工作）。

因为双击缩放检测的存在，在移动设备屏幕上点击操作的事件执行顺序：

**`touchstart`(瞬间触发)  →  `touchend` → `click`(200-300ms延迟)**

> 如果你使用了触摸事件，可以调用 event.preventDefault()来阻止鼠标点击事件被触发。

#### 2.2 touchstart事件

 当用户手指触摸到的触摸屏的时候触发。事件对象的 target 就是touch 发生位置的那个元素。

```html
<div>
    点击我！
</div>
<script>
    var box = document.querySelector("div");
    box.addEventListener("touchstart", function (e) {
       console.log('touchstart');
    });
</script>
```

#### 2.3 touchmove事件

当用户在触摸屏上移动触点(手指)的时候，触发这个事件。一定是先要触发touchstart事件，再有可能触发 touchmove 事件。

touchmove 事件的target 与最先触发的 touchstart 的 target 保持一致。touchmove事件和鼠标的mousemove事件一样都会多次重复调用，所以，事件处理时不能有太多耗时操作。不同的设备，移动同样的距离 touchmove 事件的触发频率是不同的。

> 注意：
>
> 1. 即使手指移出了 原来的target 元素，则 touchmove 仍然会被一直触发，而且 target 仍然是原来的 target 元素。
> 2. touchmove事件会多次重复触发，由于移动端计算资源宝贵，尽量保证事件截流；

```html
<div>
    <p></p>
</div>
<script>
    var i = 1;
    var box = document.querySelector("div");
    var p = document.querySelector("p");
    box.addEventListener("touchmove", function (e){
        p.innerHTML = e.target.tagName + ", " + i++;
    })
</script>
```

#### 2.4 touchend事件

 当用户的手指抬起的时候，会触发 touchend 事件。如何用户的手指从触屏设备的边缘移出了触屏设备，也会触发 touchend 事件。

> touchend 事件的 target 也是与 touchstart 的 target 一致，即使已经移出了元素。

#### 2.5 touchcancel事件

 当触点由于某些原因被中断时触发。有几种可能的原因如下(具体的原因根据不同的设备和浏览器有所不同):

- 由于某个事件取消了触摸：例如触摸过程被一个模态的弹出框打断。
- 触点离开了文档窗口，而进入了浏览器的界面元素、插件或者其他外部内容区域。
- 当用户产生的触点个数超过了设备支持的个数，从而导致 TouchList 中最早的 Touch对象被取消

> touchcancel 事件一般用于保存现场数据。比如：正在玩游戏，如果发生了 。touchcancel 事件，则应该把游戏当前状态相关的一些数据保存起来。

### 3. 触摸事件对象

`TouchEvent` 是一类描述手指在触摸平面（触摸屏、触摸板等）的状态变化的事件。这类事件用于描述一个或多个触点，使开发者可以检测触点的移动，触点的增加和减少，等等。

每 个 [`Touch`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FTouch) 对象代表一个触点; 每个触点都由其位置，大小，形状，压力大小，和目标 [`element`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FElement) 描述。 [`TouchList`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FTouchList) 对象代表多个触点的一个列表.

#### 3.1 TouchEvent

*TouchEvent的属性继承了 UIEvent 和 Event。*

属性列表：

1. [`TouchEvent.changedTouches`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FTouchEvent%2FchangedTouches)： 一个 [`TouchList`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FTouchList) 对象，包含了代表所有从上一次触摸事件到此次事件过程中，状态发生了改变的触点的 [`Touch`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FTouch) 对象。
2. [`TouchEvent.targetTouches`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FTouchEvent%2FtargetTouches)： 一个 [`TouchList`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FTouchList) 对象，是包含了如下触点的 [`Touch`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FTouch) 对象：触摸起始于当前事件的目标 [`element`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FElement) 上，并且仍然没有离开触摸平面的触点。
3. [`TouchEvent.touches`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FTouchEvent%2Ftouches)： 一 个 [`TouchList`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FTouchList) 对象，包含了所有当前接触触摸平面的触点的 [`Touch`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FTouch) 对象，无论它们的起始于哪个 [`element`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FElement) 上，也无论它们状态是否发生了变化。

```html
 <style>
    .box {
      width: 100px;
      height: 100px;
      border: 1px solid #09c;
      background-color: #0dc;
    }
  </style>
  <div class="box"></div>
  <script>
    window.onload = function() {
      var box = document.querySelector('.box');
      box.addEventListener('touchstart', function(e) {
        console.dir(e); // 查看TouchEvent对象的属性和方法
      });
    }
  </script>
```

#### 3.2 TouchList详解

 一个`TouchList`代表一个触摸屏幕上所有触点的列表。

 举例来讲, 如果一个用户用三根手指接触屏幕(或者触控板), 与之相关的`TouchList` 对于每根手指都会生成一个 `Touch`对象, 共计 3 个.

1. 只读属性：`length`

   返回这个`TouchList`中`Touch`对的个数。(就是有几个手指接触到了屏幕)

2. 方法：`item(index)`

   返回`TouchList`中指定索引的`Touch`对象。

```html
<div>
    <p style="font-size: 50px; color: #ffffff;"></p>
</div>
<script>
    var box = document.querySelector("div");
    var p = document.querySelector("p");
    box.addEventListener("touchend", function (e){
        p.innerHTML = e.changedTouches.length;  //返回Touch对象的个数
        for(var i = 0; i < e.changedTouches.length; i++){
            //遍历出来每个Touch对象
            console.log(e.changedTouches.item(i));
        }
    })
</script>
```

**测试多个手指触摸屏幕：**

```html
<div></div>
<p></p>
<script>
    var div = document.querySelector("div");
    var p = document.querySelector("p");
    div.addEventListener("touchstart", function (e){
        var msg = "touches.length: " + e.touches.length +
                "<br> targetTouches.length: " + e.targetTouches.length +
                "<br> changedTouches.length: " + e.changedTouches.length;
        p.innerHTML = msg;
    })
</script>
```

操作：

1. 放1个手指在div上
2. 先放1个手指在其他地方，然后再放1个手指在div上
3. 先放1个手指在其他地方，然后再逐渐放2个手指在div上

### 3.3 Touch详解

 `Touch`表示用户和触摸设备之间接触时单独的交互点(`a single point of contact`)。 这个交互点通常是一个手指或者触摸笔， 触摸设备通常是触摸屏或者触摸板。

基本属性列表（都是只读）:

| 编号 | 属性名       | 属性说明                                                     |
| ---- | ------------ | ------------------------------------------------------------ |
| 1.   | `identifier` | 表示每 1 个 `Touch` 对象 的独一无二的 `identifier`。有了这个 `identifier` 可以确保你总能追踪到这个 `Touch`对象。 |
| 2.   | `screenX`    | 触摸点相对于屏幕左边缘的 `x` 坐标。                          |
| 3.   | `scre`enY    | 触摸点相对于屏幕上边缘的 `y` 坐标。                          |
| 4.   | `clientX`    | 触摸点相对于浏览器的 `viewport`左边缘的 `x` 坐标。不会包括左边的滚动距离。 |
| 5.   | `clientY`    | 触摸点相对于浏览器的 `viewport`上边缘的 `y` 坐标。不会包括上边的滚动距离。 |
| 6.   | `pageX`      | 触摸点相对于 `document`的左边缘的 `x` 坐标。 与 `clientX` 不同的是，他包括左边滚动的距离，如果有的话。 |
| 7.   | `pageY`      | 触摸点相对于 `document`的左边缘的 `y` 坐标。 与 `clientY` 不同的是，他包括上边滚动的距离，如果有的话。 |
| 8.   | `target`     | 总是表示 手指最开始放在触摸设备上的触发点所在位置的 `element`。 即使已经移出了元素甚至移出了`document`, 他表示的`element`仍然不变 |

案例：

```js
var box = document.querySelector("div");
var p = document.querySelector("p");
box.ontouchstart = function (e){
    var touchList = e.changedTouches;
    for (var i = 0; i < touchList.length; i++){
        var touch = touchList[i];
        var msg = `id : ${touch.identifier} <br>
                       screenX : ${touch.screenX} <br>
                       screenY : ${touch.screenY} <br>
                       clientX : ${touch.clientX} <br>
                       clientY : ${touch.clientY} <br>
                       pageX : ${touch.pageX} <br>
                       pageY : ${touch.pageY} <br>
                       target: ${touch.target.nodeName} <br>
                        `;
        p.innerHTML = msg;
    }
}
```

### 4. 封装移动端tap事件

由于点击事件经常使用，如果用click会有延迟问题，一般我们会用touch事件模拟移动端的点击事件, 以下是封装的几个事件，仅供参考。

```js
(function (window){  //传入window，提高变量的查找效率
    function myQuery(selector){  //这个函数就是对外提供的接口。
        //调用这个函数的原型对象上的_init方法，并返回
        return myQuery.prototype._init(selector);
    }
    myQuery.prototype = {
        /*初始化方法，获取当前query对象的方法*/
        _init: function (selector){
            if (typeof selector == "string"){
                //把查找到的元素存入到这个原型对象上。
                this.ele = window.document.querySelector(selector);
                //返回值其实就是原型对象。
                return this;
            }
        },
        /*单击事件：
         * 为了规避click的300ms的延迟，自定义一个单击事件
         * 触发时间：
         *   当抬起手指的时候触发
         *   需要判断手指落下和手指抬起的事件间隔，如果小于500ms表示单击时间。
         *   如果是大于等于500ms，算是长按时间
         * */
        tap: function (handler){
            this.ele.addEventListener("touchstart", touchFn);
            this.ele.addEventListener("touchend", touchFn);

            var startTime,
                endTime;

            function touchFn(e){
                e.preventDefault()
                switch (e.type){
                    case "touchstart":
                        startTime = new Date().getTime();
                        break;
                    case "touchend":
                        endTime = new Date().getTime();
                        if (endTime - startTime < 500){
                            handler.call(this, e);
                        }
                        break;
                }
            }
        },
        /**
         * 长按
         * @param handler
         */
        longTag: function (handler){
            this.ele.addEventListener("touchstart", touchFn);
            this.ele.addEventListener("touchmove", touchFn);
            this.ele.addEventListener("touchend", touchFn);
            var timerId;

            function touchFn(e){
                switch (e.type){
                    case "touchstart" :  //500ms之后执行
                        timerId = setTimeout(function (){
                            handler.call(this, e);
                        }, 500)
                        break;
                    case "touchmove" :
                        //如果中间有移动也清除定时器
                        clearTimeout(timerId)
                        break;
                    case "touchend" :
                        //如果在500ms之内抬起了手指，则需要定时器
                        clearTimeout(timerId);
                        break;
                }
            }
        },
        /**
         * 左侧滑动。
         * 记录手指按下的左边，在离开的时候计算 deltaX是否满足左滑的条件
         */
        slideLeft: function (handler){
            this.ele.addEventListener("touchstart", touchFn);
            this.ele.addEventListener("touchend", touchFn);
            var startX, startY, endX, endY;

            function touchFn(e){
                e.preventDefault();
                var firstTouch = e.changedTouches[0];
                switch (e.type){
                    case "touchstart":
                        startX = firstTouch.pageX;
                        startY = firstTouch.pageY;
                        break;
                    case "touchend":
                        endX = firstTouch.pageX;
                        endY = firstTouch.pageY;
                        //x方向移动大于y方向的移动，并且x方向的移动大于25个像素，表示在向左侧滑动
                        if (Math.abs(endX - startX) >= Math.abs(endY - startY) && startX - endX >= 25){
                            handler.call(this, e);
                        }
                        break;
                }
            }
        },
        /* 右侧滑动 */
        rightLeft: function (e){
            //TODO:
        }
    }
    window.$ = window.myQuery = myQuery;
})(window);

// ========================
// 使用：
$("div").tap(function (e){
    console.log("单击事件")
})
$("div").longTag(function (){
    console.log("长按事件");
})
$("div").slideLeft(function (e){
    console.log(this);
    this.innerHTML = "左侧滑动了....."
})
```

### 5. 触摸手势封装相关的框架及事件

手势相关的事件一般就是tap类（触屏）和滑动（swipe)事件两类。都是基于原生的touchstart、touchmove、touchend事件，封装成不同的手势类型自定义事件。

#### 5.1 tap类事件

触碰事件，我目前还不知道它和touch的区别，一般用于代替click事件，有tap longTap singleTap doubleTap四种之分。

1. tap: 手指碰一下屏幕会触发
2. longTap: 手指长按屏幕会触发
3. singleTap: 手指碰一下屏幕会触发
4. doubleTap: 手指双击屏幕会触发

#### 5.2 swipe类事件

滑动事件，有swipe swipeLeft swipeRight swipeUp swipeDown 五种之分。

1. swipe：手指在屏幕上滑动时会触发
2. swipeLeft：手指在屏幕上向左滑动时会触发
3. swipeRight：手指在屏幕上向右滑动时会触发
4. swipeUp：手指在屏幕上向上滑动时会触发
5. swipeDown：手指在屏幕上向下滑动时会触发

#### 5.3 zepto的手势相关事件

[Zepto.js](https://link.jianshu.com?t=http%3A%2F%2Fwww.zeptojs.cn%2F) 是一个轻量级的针对现代高级浏览器的JavaScript库， 它适配了jQuery的大部分api，也就是jQuery怎么用，Zepto.js就怎么用。它非常小，非常适合移动端。

Zepto.js的touch模块中封装了手势相关的代码。封装了再触摸设备上触发tap– 和 swipe– 相关事件，也适用于所有的`touch`(iOS, Android)和`pointer`事件(Windows Phone)。

- 触屏事件：tap、singleTap、doubleTap、longTap(>750ms）
- 滑动事件：swipe、swipeLeft,、swipeRight,、swipeUp,、swipeDown

```html
<style>.delete { display: none; }</style>

<ul id=items>
  <li>List item 1 <span class=delete>DELETE</span></li>
  <li>List item 2 <span class=delete>DELETE</span></li>
</ul>

<script>
$('#items li').swipe(function(){
  $('.delete').hide()
  $('.delete', this).show()
})

$('.delete').tap(function(){
  $(this).parent('li').remove()
})
</script>
```

#### 5.4 其他移动端手势相关库

1. [百度云的touch.js](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2FClouda-team%2Ftouchjs)
2. [hammer.js](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fhammerjs%2Fhammer.js)
    hammer提供了不仅仅tap、swipe等事件，还提供了：pan（平移)、pinch类（捏拿缩放）、 press类（按住）、 rotate类（旋转）类手势支持， [hammer.js详解教程](https://link.jianshu.com?t=http%3A%2F%2Fwww.cnblogs.com%2Fimwtr%2Fp%2F5884484.html)

### 6. 移动端点击穿透问题

#### 6.1、click与300ms延迟

移动端浏览器提供了一个特殊的功能：双击放大

300ms的延迟就是来自于这里，用户碰触页面之后，需要等待一段时间来判断是不是双击（double tap）动作，而不是立即响应单击（click）,等待的这段时间大约是300ms。

移动事件提供了touchstart、touchmove、touchend却没有提供tap支持，主流框架（库）都是手动实现了自定义tap事件，以消除300ms延迟，提高页面响应速度，对于简单的页面，可以把touchstart或者touchend当做tap来用，但是存在一些问题，比如手直接触目标元素，按住不放，慢慢移除响应区域，会触发touchstart事件执行对应的事件处理器（本不应该触发），touchend事件也存在类似的问题。

此外，使用原生touch事件也存在点击穿透的问题，因为click是在touch系列事件发生大约300ms才触发的，混用touch和click肯定会导致点透问题，下面详细介绍

#### 6.2、点击穿透问题

点击穿透现象有三种

​    *点击穿透问题：点击蒙层（mask）上的关闭按钮，蒙层消失后发现触发了按钮下面元素的click事件
蒙层关闭按钮绑定的是touch事件，而按钮下边元素绑定的是click事件，touch事件触发之后，蒙层消失了，300ms后这个点的click事件fire，event的target自然就是按钮下面的元素，因为按钮跟蒙层一起消息了。

​    *跨页面点击穿透事件：如果按钮下面恰好是一个href属性的a标签，那么页面就会发生跳转，因为a标签跳转默认是click事件触发，所以原理和上面的完全相同

​    *另一种跨页面点击穿透问题：这次没有mask了，直接点击页内按钮跳转至新页，然后发现新页面中对应位置元素的click事件被触发

和蒙层的道理一样，js控制页面跳转的逻辑如果是绑定在touch事件上的，而且新页面中对应位置的元素绑定的是click事件，而且页面在300ms内完成了跳转，三个条件同时满足，就出现这种情况了

非要细分的话还有第四种，不过概率很低，就是新页面中对应位置元素恰好是a标签，然后就发生连续跳转了。。。诸如此类的，都是点击穿透问题

#### 6.3、为什么会出现点透

click延迟、延迟、还是延迟

在移动端不使用click而用touch事件代替触摸是因为click事件有着明显的延迟，具体touchstart与click的区别如下：

​    *touchstart：在这个DOM（或者冒泡到这个DOM）上手指触摸开始即能立即出发

​    *click：在这个DOM（或者冒泡这个DOM）上手指触摸开始，且手指未在屏幕上移动（某些浏览器允许移动一个非常小的位移值），且在这个DOM元素上手指离开屏幕，且触摸和离开屏幕之间的间隔时间较短（某些浏览器不检测间隔时间，也会触发click）才能触发

也就是说，事件的触发事件按照由早到晚排列为：touchstart早于touchend早于click。亦即click的触发是有延迟的，这个时间大概在300ms左右（即使给元素绑定的是touch事件，touchstart=>touchend=>click，click事件依然会被触发）

由于我们在touchstart阶段就已经隐藏了罩层A，当click被触发的时候，能够被点击的元素则是罩层下面的B元素绑定的事件，根据click事件的触发规则：

只有在被触发的时候，当前有click事件的元素显示，且在面朝用户的最前端时，才出发click事件。

由于B绑定了click事件（或者B本身默认存在click事件），所以B的click事件被触发，产生了点透的情况。

解决方案

对于B元素本身没有默认click事件的情况（无a标签等），应统一使用touch事件，统一代码风格，并且由于click事件在移动端的延迟要大很多，不利于用户体验，所以关于触摸事件应尽量使用touch相关事件。

对于B元素本身存在默认click事件的情况,应及时取消A元素的默认点击事件，从而阻止click事件的产生。即应在上例的handle函数中添加代码如下：

对于遮盖浮层，由于遮盖浮层的点击即使有小延迟也是没有关系的，反而会有疑似更好的用户体验，所以这种情况，可以针对遮盖浮层自己采用click事件，这样就不会出现点透问题。

#### 6.4、解决方案

问题已经很明了了，有很多解决方案，但是思路不外乎2种：
1、不要混用touch和click

​        既然touch之后300ms会触发click，只用touch或者只用click自然不会存在问题

2、吃掉或者消费掉touch之后的click

​        依旧用tap，只是在可能发生点击穿透的情形做额外的处理，拿个东西来挡住或者tap后延迟350ms在隐藏mask、pointer-events、在下面元素的事件处理器里做检测（配合全局flag）等等，能吃掉就行

#### 6.5详细解决方案

1、只用touch

​    最简单的解决方案，完美解决点击穿透事件

把页面内所有click全部换成touch事件（touchstart、touchend、tap）,需要特别注意a标签，a标签的href也是click，需要去掉换成js控制的跳转，或者直接改成span+tap控制跳转。如果要求不高，不在乎滑走或者滑进来触发事件的话，span+touchend就可以了。毕竟tap需要引入第三方库

不用a标签其实没什么，移动app开发不用考虑SEO，即便用了a标签，一般也会去掉所有默认样式，不如直接用span

2、只是用click

下下策，因为带来300ms延迟，页面内任何一个滴定仪监护都将增加300ms延迟，想想都慢

不用touch就不会存在touch之后300ms触发click的问题，如果交互性要求不高可以这么做， *强烈不推荐* ，快一点总是好的

3、拿个东西来挡住

比较笨的方法，不推荐用

4、tap后延迟350ms在隐藏mask

改动最小，缺点是隐藏mask变慢了，350ms还是能感觉到慢的

只需要针对mask做处理就行，改动非常小，如果要求不高的话，用这个比较省力

5、pointer-events

比较麻烦且有缺陷，不建议使用

mask隐藏后，给按钮下面元素添加上pointer-events：none;样式，让click穿过去，350ms后去掉这个样式，恢复响应

缺陷是mask消失后的的350ms内，用户可以看到按钮下面的元素点着没反应，如果用户手速很快的话一定会发现

在下面元素的事件处理器里做检测（配合全局flag）

6、比较麻烦， 不建议使用

全局flag记录按钮点击的位置（坐标点），在下面元素的事件处理器里判断event的坐标点，如果相同则是那个可恶的click，拒绝响应

上面说的只是想法，没测试过，实在不行就用记录时间戳判断，等待350ms，这样就和 pointer-events 差不多

7、fastclick

好用的解决方案，不介意多加载几kb的话，不建议使用，因为有人遇到了bug，更多信息请查看：[Fastclick 导致click事件触发两次的问题](http://blog.csdn.net/forevercjl/article/details/46730157)

首先引入fastclick库，再把页面内所有touch事件都换成click，其实稍微有点麻烦，建议引入这几KB就为了解决点透问题不值得，不如用第一种方法呢。

## Babel 介绍

### 什么是Babel

Babel 是一个工具链，主要用于在旧的浏览器或环境中将 ECMAScript 2015+ 代码转换为向后兼容版本的 JavaScript 代码。

主要做的事情：

- 语法转换
- 实现目标环境缺少的功能（es2015+）
- 源代码转换 (codemods)
- 还有更多！（点开这些[视频](https://babel.docschina.org/videos.html)看看）

### 用法

在这里会介绍如何将用es2015+写的JavaScript代码转换为能在当前浏览器正常执行的代码。包括两方面：语法转换、功能补充（这里暂时叫这个名字，之后会相信介绍）。

1. 安装这些必要的包

```sh
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

1. 在根目录创建一个babel.config.js的配置文件：

```js
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];
module.exports = { presets };
```

- targets：表示编译出的代码想要支持的浏览器版本
- useBuiltIns：之后详细解释

1. 执行命令

```sh
./node_modules/.bin/babel src --out-dir lib
```

然后你用es2015+编写的代码就被转化为能在目标浏览器正常运行的代码了。

### 如何运行的

所有你用到的babel包都是被单独发布在@babel作用域下（v7开始），比如@babel/preset-env、@babel/core、 @babel/cli，因为babel是插拔式的，所以用到什么安装什么，每个包各司其职。

#### @babel/core

其中最核心的包就是@babel/core，它主要的作用就是编译：

```sh
npm install --save-dev @babel/core
```

然后你可以在代码里直接使用：

```js
const babel = require("@babel/core");
babel.transform("code", optionsObject);
```

这里的optionsObject就和之前的babel.config.js是一样的，如何编译代码，编译成什么样子什么标准用什么东西都在这里配置。

#### @babel/cli

为什么我们能在命令行里直接使用：

```sh
./node_modules/.bin/babel src --out-dir lib
```

光有core是无法在命令行使用这些功能的，@babel/cli支持你直接在命令行中编译代码。
 这句话会编译你src目录下的所有js代码，并编译成你想要的那样（babel.config.js配置的），并输出到lib目录下。
 如果我们没有配置babel.config.js，那么执行这句话之后src会被原封不动的搬到lib下（格式除外）。

--out-dir 代表输出到哪个目录下，你可试试--help看其他的用法，如果在这里我们没有配置babel.config.js，我们可以通过--plugins 或者 --presets告诉 代码应该编译成什么样子。

### Plugins & Presets

plugins顾名思义就是组件，一个小型的js代码程序告诉Babel
 如何转换你的源码，你可以自己写plugins也可以在github上使用别人写好的。来看如何使用一个插件：`@babel/plugin-transform-arrow-functions` ：

```sh
npm install --save-dev @babel/plugin-transform-arrow-functions

./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```

`@babel/plugin-transform-arrow-functions`组件的作用就是将es2015的箭头函数转换成普通函数：

```js
// src/foo.js：
const fn = () => 1;

// converted to

// lib/foo.js：
var fn = function fn() {
  return 1;
};
```

当然，es2015有这么多新的语法，我们不可能一一的去引用每个plugins来编译我们的代码吧，于是就又了presets，顾名思义——预设，它包含了一组我们需要的plugins。就像plugin一样，你也可以编写一组你最需要的plugins成为一个preset。

目前这里有一个非常优秀的preset叫env —— @babel/preset-env。

```sh
npm install --save-dev @babel/preset-env

./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
```

不需要任何配置，这个preset包含了所有现代js（es2015 es2016等）的所有新特性，你也可以传递一些配置给env，精准实现你想要的编译效果。

### 配置

更具你的需求，配置肯定是不一样的，这里贴一个官方推荐配置：

```js
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
];

module.exports = { presets };
```

这个配置只配置了prsets，其实还可以配置plugins。

### Polyfill

中文翻译是垫片，之前没有详细了解babel之前，我也很迷茫这个polyfill是啥，因为语法不都给你转换好了，还需要这个东西干啥，后来仔细想了一下，要适应新特性应该从两方面入手：

1. 语法转换：

```js
() => {};

for (let i of items) {};
```

比如箭头函数、for...of，在不支持这些语法的环境下，直接会报语法错误，因为编译器根本不知道 `=>`这些是什么鬼符号，要做到让编译器识别，那就要将这样的语法转换成浏览器能识别的代码，那么就需要语法转换。

然后这里回到我们最开始安装包那里：

```sh
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

仔细看我们安装core cli env都是 --save-dev，这是因为我们发布的代码都是编译好的代码，这些都只是开发依赖，发布的代码不需要依赖这些包。

1. 功能补充

```js
'foo'.includes('f');
```

es2015里不仅只有新的语法，还有实例的扩展，比如String，其实这里只是调用了String实例的一个方法，我们无论怎么语法转换也没有什么用吧，如果我们在不支持String.prototype.includes的编译器里跑这些代码，会得到 'foo'.includes is not a function. 这样的一个报错，而不是语法报错。

Polyfill提供的就是一个这样功能的补充，实现了Array、Object等上的新方法，实现了Promise、Symbol这样的新Class等。到这里应该能明白了，为什么安装`@babel/polyfill`没有-dev，因为就算代码发布后，编译后的代码依然会依赖这些新特性来实现功能。

虽然@babel/polyfill提供了我们想要的所有新方法新类，但是这里依然存在一些问题：

1. 体积太大：比如我只用了String的新特性，但是我把整个包都引进来了，，这不是徒增了很多无用的代码。
2. 污染全局环境：如果你引用了 `@babel/polyfill`，那么像Promise这样的新类就是挂载在全局上的，这样就会污染了全局命名空间。可能在一个团建建立的项目问题不太大，但是如果你是一个工具的开发者，你把全局环境污染了，别人用你的工具，就有可能把别人给坑了。

一个解决方案就是引入[transform runtime](https://babel.docschina.org/docs/en/babel-plugin-transform-runtime) 来替代 `@babel/polyfill`。

幸运的是，我们有env这个preset，它又一个useBuiltIns选项，如果设置成`"usage"`，那么将会自动检测语法帮你require你代码中使用到的功能。

```js
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```

比如我在代码中：

```js
Promise.resolve().finally();
```

如果在edge17不支持这个特性的环境里运行，将会帮你编译成：

```js
require("core-js/modules/es.promise.finally");

Promise.resolve().finally();
```

### @babel/plugin-transform-runtime

```sh
npm install --save-dev @babel/plugin-transform-runtime

npm install --save @babel/runtime
```

主要功能：

1. 避免多次编译出helper函数：
    Babel转移后的代码想要实现和原来代码一样的功能需要借助一些帮助函数，比如：

```js
class Person {}
```

会被转换为：

```js
"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = function Person() {
  _classCallCheck(this, Person);
};
```

这里`_classCallCheck`就是一个helper函数，试想下如果我们很多文件里都声明了类，那么就会产生很多个这样的helper函数，积少成多增大了代码体积。
 这里的`@babel/runtime`包就声明了所有需要用到的帮助函数，而`@babel/plugin-transform-runtime`的作用就是将所有需要helper函数的文件，依赖`@babel/runtime`包：

```js
"use strict";

var _classCallCheck2 = require("@babel/runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Person = function Person() {
  (0, _classCallCheck3.default)(this, Person);
};
```

这里就没有再编译出helper函数classCallCheck了，而是直接引用了`@babel/runtime`中的helpers/classCallCheck。

1. 解决`@babel/polyfill`提供的类或者实例方法污染全局作用域的情况。
    `@babel/plugin-transform-runtime`会为代码创建一个沙盒环境，为`core-js`这里内建的实例提供假名，你可以无缝的使用这些新特性，而不需要使用require polyfill。

> `"foobar".includes("foo")`，这样的实例方法仍然是不能正常执行的，因为他在挂载在String.prototype上的，如果需要使用这样的实例方法，还是不得不`require('@babel/polyfill')`

比如：

```js
var sym = Symbol();

var promise = new Promise();

console.log(arr[Symbol.iterator]());
```

会被编译成：

```js
"use strict";

var _getIterator2 = require("@babel/runtime-corejs2/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = require("@babel/runtime-corejs2/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _symbol = require("@babel/runtime-corejs2/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var sym = (0, _symbol2.default)();

var promise = new _promise2.default();

console.log((0, _getIterator3.default)(arr));
```

这样像Symbol、Promise这样的新类也不会污染全局环境了。

`**用法**`

配置在配置文件里，以`.babelrc`举例：
 无选项配置：

```js
{
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

有选项配置（默认值）:

```js
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]
  ]
}
```

这个插件的默认配置默认用户已经提供了所有polyfillable APIs，因此想要无缝使用不污染全局环境的内建功能需要特别标明corejs。

`**可选项**`

- `corejs`：默认false，或者数字：`{ corejs: 2 }`，代表需要使用corejs的版本。
- `helpers`：默认是true，是否替换helpers。
- `polyfill` ：v7无该属性
- `regenerator`：默认true，generator是否被转译成用regenerator runtime包装不污染全局作用域的代码。
- `useESModules`：默认false，如果是true将不会用`@babel/plugin-transform-modules-commonjs`进行转译，这样会减小打包体积，因为不需要保持语义。
- false:

```js
exports.__esModule = true;

exports.default = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
```

- true:

```js
export default function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
```

### babel-polyfill vs babel-runtime

> 以下出自：[github -了解Babel 6生态](https://github.com/creeperyang/blog/issues/25)

`babel-polyfill` 和 `babel-runtime`是达成同一种功能（模拟ES2015环境，包括global keywords，prototype methods，都基于core-js提供的一组polyfill和一个generator runtime）的两种方式：

1. babel-polyfill通过向全局对象和内置对象的prototype上添加方法来达成目的。这意味着你一旦引入babel-polyfill，像Map，Array.prototype.find这些就已经存在了——全局空间被污染。
2. babel-runtime不会污染全局空间和内置对象原型。事实上babel-runtime是一个模块，你可以把它作为依赖来达成ES2015的支持。

比如当前环境不支持Promise，你可以通过require(‘babel-runtime/core-js/promise’)来获取Promise。这很有用但不方便。幸运的是，babel-runtime并不是设计来直接使用的——它是和babel-plugin-transform-runtime一起使用的。babel-plugin-transform-runtime会自动重写你使用Promise的代码，转换为使用babel-runtime导出（export）的Promise-like对象。

注意： 所以plugin-transform-runtime一般用于开发（devDependencies），而runtime自身用于部署的代码（dependencies），两者配合来一起工作。

`**那么我们什么时候用babel-polyfill，什么时候用babel-runtime**`

babel-polyfill会污染全局空间，并可能导致不同版本间的冲突，而babel-runtime不会。从这点看应该用babel-runtime。

但记住，babel-runtime有个缺点，它不模拟实例方法，即内置对象原型上的方法，所以类似Array.prototype.find，你通过babel-runtime是无法使用的。
 最后，请不要一次引入全部的polyfills（如require('babel-polyfill')），这会导致代码量很大。请按需引用最好。

### @babel/preset-env

> 以下出自：[github -Babel 7 及新用法](https://github.com/creeperyang/blog/issues/25)

`preset-env` 是 JS 中的 `autoprefixer` 根据环境来应用不同的plugins。支持的plugins超过babel-preset-latest(2015-2017)。

**`用法`**

```js
{
  "presets": [
    [
      "env",
      {
        "targets": { // 目标环境
          "browsers": [ // 浏览器
            "last 2 versions",
            "ie >= 10"
          ],
          "node": "current" // node
        },
        "modules": true,  // 是否转译module syntax，默认是 commonjs
        "debug": true, // 是否输出启用的plugins列表
        "spec": false, // 是否允许more spec compliant，但可能转译出的代码更慢
        "loose": false, // 是否允许生成更简单es5的代码，但可能不那么完全符合ES6语义
        "useBuiltIns": false, // 怎么运用 polyfill
        "include": [], // 总是启用的 plugins
        "exclude": [],  // 强制不启用的 plugins
        "forceAllTransforms": false, // 强制使用所有的plugins，用于只能支持ES5的uglify可以正确压缩代码
      }
    ]
  ],
}
```

这里主要需要注意的是useBuiltIns用于指定怎么处理polyfill，可以选值`"usage" | "entry" | false`，默认是`false`。

- `useBuiltIns: 'usage'`：当每个文件里用到（需要polyfill的特性）时，在文件中添加特定的import语句。这可以保证每个polyfill的特性仅load一次。

```js
/// input
var a = new Promise(); // a.js
var b = new Map(); // b.js
/// output
// a.js
import "core-js/modules/es6.promise";
var a = new Promise();
// b.js
import "core-js/modules/es6.map";
var b = new Map();
```

- `useBuiltIns: 'entry'`：替换`import "@babel/polyfill" / require("@babel/polyfill")`语句为独立的（根据环境）需要引入的polyfill特性的import语句。

```js
// input
import "@babel/polyfill";
// output
import "core-js/modules/es7.string.pad-start";
import "core-js/modules/es7.string.pad-end";
```

> 需要注意，在整个项目中，"@babel/polyfill"只能require一次，否则报错。建议用独立的entry文件引入。

- `useBuiltIns: false`：对`@babel/polyfill`不做任何处理。

**ReferenceError: regeneratorRuntime is not defined**
 需要注意，当你使用`async/await`并被preset-env转译后，运行时可能会出现以上错误，这是因为：
 `plugin-transform-regenerator`使用`regenerator`来转译 `async/generator` 函数，但是它本身不包括`regeneratorRuntime`，你需要使用`babel-polyfill/regenerator runtime`来使regeneratorRuntime 存在。

通常情况下，加上transform-runtime plugin即可。

## M-website 优化

### 多页面配置

```js
function compileJs() {
  return webpackStream({
    mode: "development",
    //多入口配置
    entry: { app: './src/app.js', search: './src/search.js' },
    devtool: 'source-map',
    output: {
      filename: "[name].min.js"
    },
    module: {
      rules: [
        {
          test: /\js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.html$/,
          loader: "string-loader"
        }
      ]
    }
  })
    .pipe(dest('./dev/js/'))
}
```

```js
//css输出多份
function compileCss() {
  return src('./src/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(concat("app.min.css"))
    .pipe(dest('./dev/style/'))
}
```

### 404页面

```js
import positionController from '../controller/positionController';
import searchController from '../controller/searchController';
import profrileController from '../controller/profileController';
import detailController from '../controller/detailController';
import errorPage from '../controller/404';

export default class Routr {
  constructor(mode) {
    this.mode = mode ? mode : 'hash';
    this.initEvent();
    this.routers = {
      "position": positionController,
      "position/detail": detailController,
      "search": searchController,
      "profile": profrileController,
      "404": errorPage
    }
    //默认加载页面
    this.loadView('position');
  }

  //加载指定视图
  loadView(path) {
    if (!path || path === "") {
      path = "position";
    }
    let controller = this.routers[path];
    new controller().render()
  }

  //事件绑定
  initEvent() {
    if (this.mode === 'hash') {
      window.addEventListener('hashchange', () => {
        console.log(location.hash);
        var hash = location.hash.replace('#', '');
        let id;
        if (/details\//.test(hash)) {
          id = hash.split('/')[1];
          hash = hash.split('/')[0];
        }
        if (this.routers[hash]) {
          this.loadView(hash);
        } else {
          this.loadView("404");
        }
      })
    } else {
      window.addEventListener('popstate', () => {
        let url = history.state ? history.state.url : 'position';
        this.loadView(url);
      })

    }

  }

}
```

二级页面路由问题

```js
this.routers = {
      "position": positionController,
      "position/detail": detailController,
      "search": searchController,
      "profile": profrileController,
      "404": errorPage
}
```

体验问题，网络慢页面加载的问题 ？

view/Positionlist.html

```html
<div id="main-position">
  <div>
    <div class="loading">
      <img src="./images/ajax-loader.gif" />
    </div>
    <div class="reload">
      <img src="./images/arrow.png" alt="">
    </div>
    <div class="custom">
      <span>10秒钟定制职位!</span>
      <button>去登录</button>
    </div>
    <div class="positionlist">
    </div>

    <div class="reload">
      加载更多
    </div>

  </div>
</div>
```

```css
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}
```

```js
showloading(flag) {
    if (flag) {
      $(".loading").attr('style', "display:flex");
    } else {
      $(".loading").hide();
    }

  }
  async render() {
    var self = this;
    $("#main").html(positionlistTpl);
    this.showloading(true);
    let list = await this.getlist();
    let items = template.render(positionlistItem, { data: list });
    $(".positionlist").html(items);
    this.showloading(false);
    let scroll = new BScroll('#main-position', {
      probeType: 2,
      click: true,
      scrollY: true
    })
  。。。。
```

### 缓存问题，生产环境文件配置hash、html压缩

Gulpfile-pro.js配置

```js
const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const webpackStream = require('webpack-stream');
const rev = require('gulp-rev');
const revCollector = require('gulp-rev-collector');
const minifyHTML = require('gulp-minify-html');
const del = require('del');


function copyHtml() {
  return src('./src/*.html')
    .pipe(dest("./dist/"))
}


function compileJs() {
  return webpackStream({
    mode: "production",
    entry: './src/app.js',
    output: {
      filename: "app.min.js"
    },
    module: {
      rules: [
        {
          test: /\js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.html$/,
          loader: "string-loader"
        }
      ]
    }
  })
    .pipe(rev())
    .pipe(dest('./dist/js/'))
    .pipe(rev.manifest('js-manifest.json'))
    .pipe(dest('./rev/'))
}


function compileCss() {
  return src('./src/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat("app.min.css"))
    .pipe(rev())
    .pipe(dest('./dist/style/'))
    .pipe(rev.manifest('css-manifest.json'))
    .pipe(dest('./rev/'))
}


function copyFonts() {
  return src("./src/style/fonts/*.*")
    .pipe(dest("./dist/style/fonts/"));
}

function copyLibs() {
  return src("./src/libs/*.*")
    .pipe(dest("./dist/js/libs/"));
}

function copyImages() {
  return src("./src/images/*.*")
    .pipe(rev())
    .pipe(dest('./dist/images/'))
    .pipe(rev.manifest('images-manifest.json'))
    .pipe(dest("./rev/"));
}


function revColl() {
  return src(['./rev/*.json', './dist/*.html'])
    .pipe(revCollector({
      replaceReved: true,
      dirReplacements: {
        '/style/': '/style/',
        '/js/': '/js/',
        './images/': function (manifest_value) {
          return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
        }
      }
    }))
    .pipe(minifyHTML({
      empty: true,
      spare: true
    }))
    .pipe(dest('./dist/'));
}

function clean(target) {
  return function () {
    return del(target)
  }
}

exports.default = series(clean('./dev/'), clean('./rev/'), parallel(copyFonts, copyImages, copyLibs, compileJs, copyHtml, compileCss), revColl);
```

CDN配置

### 增加Swipper

`https://www.swiper.com.cn/`

```html
<main class="main-global" id="main1">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div>
  </main>
```

```css
.swiper-container {
  width: 100%;
  height: 100%;
}  
```

```js
import Router from './router/index'

const MODE = 'history';

class App {
  constructor() {
    this.initEvent();
    this.router = new Router(MODE);
    this.initSwipper();
  }

  initEvent() {
    var self = this;
    $("nav").on('touchstart', 'li', function (e) {
      e.preventDefault();
      $(this).addClass("active").siblings().removeClass('active');
      let path = $(this).attr("data-hash");
      if (self.mode === 'hash') {
        location.hash = path;
      } else {
        history.pushState({ url: path }, '', path);
        self.router.loadView(path);
        let index = $(this).index();
        self.mySwiper.slideTo(index, 300, false);
      }

    })
  }

  initSwipper() {
    this.mySwiper = new Swiper('.swiper-container', {
      on: {
        slideChangeTransitionStart: function () {
          $("nav li").eq(this.activeIndex).addClass("active").siblings().removeClass('active')
        }
      }
    })
  }

}

new App();
```

修改controller

```js
export default class profileController {
  constructor() {
    this.container = $(".swiper-slide").eq(2);
  }

  render() {
    this.container.html("profile");
  }
}
```

## Nginx

### **1.什么是Nginx？**

Nginx是一个高性能的HTTP和反向代理服务器，也是一个IMAP/POP3/SMTP服务器 Nginx是一款轻量级的Web服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器

目前使用的最多的web服务器或者代理服务器，像淘宝、新浪、网易、迅雷等都在使用  

### 2.为什么要用Nginx

优点：

1. 跨平台、配置简单

2. 非阻塞、高并发连接：处理2-3万并发连接数，官方监测能支持5万并发

3. 内存消耗小：开启10个nginx才占150M内存 成本低廉：开源

4. 内置的健康检查功能：如果有一个服务器宕机，会做一个健康检查，再发送的请求就不会发送到宕机的服务器了。重新将请求提交到其他的节点上。

5. 节省宽带：支持GZIP压缩，可以添加浏览器本地缓存

6. 稳定性高：宕机的概率非常小

7. master/worker结构：一个master进程，生成一个或者多个worker进程

8. 接收用户请求是异步的：浏览器将请求发送到nginx服务器，它先将用户请求全部接收下来，再一次性发送给后端web服务器，极大减轻了web服务器的压力

9. 一边接收web服务器的返回数据，一边发送给浏览器客户端 10. 网络依赖性比较低，只要ping通就可以负载均衡

10. 可以有多台nginx服务器

11. 事件驱动：通信机制采用epoll模型

### 3.为什么Nginx性能这么高

得益于它的事件处理机制： 异步非阻塞事件处理机制：运用了epoll模型，提供了一个队列，排队解决  

### **4.Nginx是如何实现高并发的**

service nginx start之后，然后输入# ps -ef|grep nginx，会发现Nginx有一个master进程和若干个worker进程，这些worker进程是平等的，都是被master fork过来的。在master里面，先建立需要listen的socket（listenfd），然后再fork出多个worker进程。当用户进入nginx服务的时候，每个worker的listenfd变的可读，并且这些worker会抢一个叫accept_mutex的东西，accept_mutex是互斥的，一个worker得到了，其他的worker就歇菜了。而抢到这个accept_mutex的worker就开始“读取请求–解析请求–处理请求”，数据彻底返回客户端之后（目标网页出现在电脑屏幕上），这个事件就算彻底结束。 nginx用这个方法是底下的worker进程抢注用户的要求，同时搭配“异步非阻塞”的方式，实现高并发量。  

### 5.为什么不使用多线程

因为线程创建和上下文的切换非常消耗资源，线程占用内存大，上下文切换占用cpu也很高，采用epoll模型避免了这个缺点

### 6.Nginx是如何处理一个请求的呢

 首先，nginx在启动时，会解析配置文件，得到需要监听的端口与ip地址，然后在nginx的master进程里面 先初始化好这个监控的socket(创建socket，设置addrreuse等选项，绑定到指定的ip地址端口，再listen) 然后再fork(一个现有进程可以调用fork函数创建一个新进程。由fork创建的新进程被称为子进程 )出多个子进程出来 然后子进程会竞争accept新的连接。此时，客户端就可以向nginx发起连接了。当客户端与nginx进行三次握手，与nginx建立好一个连接后 此时，某一个子进程会accept成功，得到这个建立好的连接的socket，然后创建nginx对连接的封装，即ngx_connection_t结构体 接着，设置读写事件处理函数并添加读写事件来与客户端进行数据的交换。最后，nginx或客户端来主动关掉连接，到此，一个连接就寿终正寝了

### 7.正向代理

一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器) 然后代理向原始服务器转交请求并将获得的内容返回给客户端。客户端才能使用正向代理 正向代理总结就一句话：代理端代理的是客户端  

### 8.反向代理

反向代理（Reverse Proxy）方式是指以代理服务器来接受internet上的连接请求，然后将请求，发给内部网络上的服务器 并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器 反向代理总结就一句话：代理端代理的是服务端

### 9.动态资源、静态资源分离

动态资源、静态资源分离是让动态网站里的动态网页根据一定规则把不变的资源和经常变的资源区分开来，动静资源做好了拆分以后 我们就可以根据静态资源的特点将其做缓存操作，这就是网站静态化处理的核心思路 动态资源、静态资源分离简单的概括是：动态文件与静态文件的分离

软件开发中，有些请求是需要后台处理的（如：.jsp,.do等等），有些请求是不需要经过后台处理的（如：css、html、jpg、js等等文件） 这些不需要经过后台处理的文件称为静态文件，否则动态文件。因此我们后台处理忽略静态文件。这会有人又说那我后台忽略静态文件不就完了吗 当然这是可以的，但是这样后台的请求次数就明显增多了。在我们对资源的响应速度有要求的时候，我们应该使用这种动静分离的策略去解决 动、静分离将网站静态资源（HTML，JavaScript，CSS，img等文件）与后台应用分开部署，提高用户访问静态代码的速度，降低对后台应用访问 这里我们将静态资源放到nginx中，动态资源转发到tomcat服务器中

## nginx 部署配置

### mac 下的安装方式

安装nginx

可以用brew很方便地安装nginx.

sudo brew install nginx

启动nginx服务

sudo brew services start nginx

查看nginx版本

nginx -v

关闭nginx服务

sudo brew services stop nginx

另外几个比较方便的指令

重新加载nginx

nginx -s reload

停止nginx

nginx -s stop

### windows下的安装

到nginx官网上下载相应的安装包，`http://nginx.org/en/download.html`

**`start nginx.exe`**

**`nginx.exe -s stop`                   //停止nginx**

**`nginx.exe -s reload`                //重新加载nginx**

**`nginx.exe -s quit`                     //退出nginx**

注：以上的命令中，.exe可以去掉

```sh
server {
        listen       8099;
        server_name  localhost;
        root   /Users/liutinghai/work/gp13-m-website/dist;
        index  index.html;

      location ~* /api {
            rewrite /api/(.*) /$1 break;
            proxy_pass  https://m.lagou.com;

        }
}
```
