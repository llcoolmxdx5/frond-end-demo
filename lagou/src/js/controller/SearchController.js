import Searchhtml from '../../views/Search/Search.html';
import Fetch from '../model/Fetch.js';

class SearchController{
    constructor () {

    }
    render(){
        $('#main-container').html('search')
    }
}
export default new SearchController()