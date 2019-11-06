import PositionController from '../controller/PositionController.js';
import ProfileController from '../controller/ProfileController.js';
import SearchController from '../controller/SearchController.js';

class Router {
    constructor() {
        this.initEvent()
        PositionController.render()
    }
    initEvent() {
        window.addEventListener('hashchange', e => {
            let hash = location.hash.replace('#', '')
            switch(hash) {
                case 'position':
                    PositionController.render()
                    break
                case 'search':
                    SearchController.render()
                    break
                case 'profile':
                    ProfileController.render()
                    break
            }
        })
    }
}
export default new Router()