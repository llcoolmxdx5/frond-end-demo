import PositionController from '../controller/PositionController.js';
import ProfileController from '../controller/ProfileController.js';
import SearchController from '../controller/SearchController.js';
import ErrorController from '../controller/ErrorController'

const MODE = 'hash';

class Router {
    constructor() {
        this.routes = {
            'position': PositionController,
            'search': SearchController,
            'profile': ProfileController
        }
        this.initEvent();
        SearchController.render();
    }

    loadView(path) {
        if (this.routes[path]) {
            this.routes[path].render()
        } else {
            ErrorController.render()
        }
    }

    go(path) {
        if (MODE === 'hash') {
            location.hash = path;
        } else {
            history.pushState({ path }, '', path)
            this.loadView(path)
        }
    }

    initEvent() {
        if (MODE === 'hash') {
            window.addEventListener('hashchange', () => {
                console.log(location.hash)
                let hash = location.hash.replace('#', '');
                this.loadView(hash)
            })
        } else {
            window.addEventListener('popstate', () => {
                this.loadView(history.state.path)
            })
        }
    }
}
export default new Router()