import PositionController from '../controller/PositionController.js';
class Router {
    constructor() {
        this.initEvent()
    }
    initEvent() {
        window.addEventListener('hashchange', e => {
            console.log(location.hash)
            let hash = location.hash.replace('#', '')
            switch(hash) {
                case 'position':
                    PositionController.render()
                    break
                
            }
        })
    }
}
export default new Router()