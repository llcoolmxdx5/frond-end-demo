import Utils from "../utils/Utils.js";

export default class Carousel {
    conWidth = 0;
    position = 0;
    bool = false;
    imgConLeft = 0;
    speed = 0.5;
    autoBool = false;
    time = 300;
    constructor(imgList, parent) {
        document.documentElement.style.fontSize = "100px";
        document.body.style.fontSize = "16px";
        document.body.style.margin = "0px";
        // 父容器比例发生变化。因此要求出父容器和屏幕的比例
        this.conWidth = parent.offsetWidth/ 100*screen.width/parent.offsetWidth;
        this.parent=parent;
        Utils.loadImgs(imgList, "./img/",(list)=>{
            this.imgLoadFinish(list)
        });
    }
    imgLoadFinish(list) {
        this.bnList = list.splice(0, 2);
        this.imgList = list.map( (item) =>{
            Object.assign(item.style, {
                width: this.conWidth + "rem",
                height: this.conWidth / 3 + "rem"
            })
            return item;
        });
        let carousel=Utils.ce("div",{
            width:this.conWidth+"rem",
            height:this.conWidth/3+"rem",
            position:"relative",
            margin:"auto",
            overflow:"hidden"
        });
        this.createImgCon(carousel);
        this.createDot(carousel);
        this.createBn(carousel);
        this.parent.appendChild(carousel);
        carousel.addEventListener("mouseenter",e=>{this.mouseHandler(e);});
        carousel.addEventListener("mouseleave",e=>{this.mouseHandler(e);});
        this.changeDot();
        let animation=()=>{
            requestAnimationFrame(animation);
            this.imgConMove();
            this.autoPlay();
        };
        animation();
        window.addEventListener("resize", e=>{this.resizeHandler(e)});
        this.resizeHandler();
    }
    resizeHandler(e) {
        // 这里处理父容器的宽高比
        document.documentElement.style.fontSize = this.parent.offsetWidth/screen.width*100+ "px";
    }
    createImgCon(parent){
        this.imgCon=Utils.ce("div",{
            width:this.conWidth*2+"rem",
            height:this.conWidth/3+"rem",
            position:"absolute"
        });
        this.imgCon.appendChild(this.imgList[0]);
        parent.appendChild(this.imgCon);
    }
    createDot(parent){
        this.dot=Utils.ce("ul");
            let w=0;
            for(let i=0;i<this.imgList.length;i++){
                let li=Utils.ce("li",{
                    width:"0.2rem",
                    height:"0.2rem",
                    border:"1px solid #FF0000",
                    borderRadius: "0.1rem",
                    float:"left",
                    marginLeft:i===0 ? 0 : "0.1rem"
                });
                w+=(i===0)? 0.2 : 0.3;
               this.dot.appendChild(li);
            }
            Object.assign(this.dot.style,{
                listStyle:"none",
                margin:"0px",
                padding:"0px",
                position:"absolute",
                bottom:"0.5rem",
                left:(this.conWidth-w)/2+"rem"
            })
            this.dot.addEventListener("click",e=>{this.dotClickHandler(e)});
            parent.appendChild(this.dot);
    }
    createBn(parent){
        for(let i=0;i<this.bnList.length;i++){
            Object.assign(this.bnList[i].style,{
                position:"absolute",
                top:(this.conWidth/3-(this.bnList[i].height/100))/2+"rem",
                left:i===0 ? "0.5rem" : "none",
                right:i===1 ? "0.5rem" : "none"
            })
            parent.appendChild(this.bnList[i]);
            this.bnList[i].addEventListener("click",e=>{this.bnClickHandler(e)});
        }
    }
    mouseHandler(e){
        if(e.type==="mouseenter"){
            this.autoBool=false;
            this.time=300;
        }else if(e.type==="mouseleave"){
            this.autoBool=true;
        }
    }

    bnClickHandler(e){
        if(this.bool)return;
        if(this.bnList.indexOf(e.currentTarget)===0){
            // leftBn
            this.position--;
            this.direction="left";
            if(this.position<0) this.position=this.imgList.length-1;
        }else{
            //rightBn
            this.position++;
            this.direction="right"
            if(this.position>this.imgList.length-1) this.position=0;
        }
        this.createNextImg();
    }
    dotClickHandler(e){
        if(this.bool)return;
        if(e.target.nodeName!=="LI") return;
        var index=Array.from(e.currentTarget.children).indexOf(e.target);
        if(index===this.position) return;
        if(index>this.position) this.direction="right";
        else this.direction="left";
        this.position=index;
        this.createNextImg();
    }
    createNextImg(){
        if(this.direction==="right"){
            this.imgCon.appendChild(this.imgList[this.position]);
            this.imgCon.style.left="0rem";
            this.imgConLeft=0;
        }else if(this.direction==="left"){
            this.imgCon.insertBefore(this.imgList[this.position],this.imgCon.firstElementChild);
            this.imgCon.style.left=-this.conWidth+"rem";
            this.imgConLeft=-this.conWidth;
        }
        this.bool=true;
        this.changeDot();
    }
    changeDot(){
        if(this.pre){
            this.pre.style.backgroundColor="rgba(255,0,0,0)";
        }
        this.pre=this.dot.children[this.position];
        this.pre.style.backgroundColor="rgba(255,0,0,0.5)";
    }
    imgConMove(){
        if(!this.bool)return;
        if(this.direction==="right"){
            this.imgConLeft-=this.speed;
            if(this.imgConLeft<=-this.conWidth){
                this.imgConLeft=0;
                this.bool=false;
                this.imgCon.firstElementChild.remove();
            }
            this.imgCon.style.left=this.imgConLeft+"rem";
        }else if(this.direction==="left"){
            this.imgConLeft+=this.speed;
            if(this.imgConLeft>=0){
                this.imgConLeft=0;
                this.bool=false;
                this.imgCon.lastElementChild.remove();
            }
            this.imgCon.style.left=this.imgConLeft+"rem";
        }
    }
    autoPlay(){
        if(!this.autoBool)return;
        this.time--;
        if(this.time>0) return;
        this.time=300;
        this.bnList[1].dispatchEvent(new MouseEvent("click"));
    }
    
}