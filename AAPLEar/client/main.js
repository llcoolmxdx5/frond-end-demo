import Carousel from './src/component/Carousel.js';
import './src/assets/css/style.scss';

let imgSrc=["left.png","right.png","lb-01.png","lb-02.png","lb-03.png"];
let app = document.querySelector('#app');
let car=new Carousel(imgSrc, app);