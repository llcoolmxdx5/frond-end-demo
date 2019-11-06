import Searchhtml from '../../views/Search/Search.html';
import Fetch from '../model/Fetch.js';

class SearchController{
    constructor () {

    }
    render(){
        // let data = await Fetch.getSearchList();
        // let html = template.render(Searchhtml, { list: data.result })
        $('#main-container').html('search')
    }
}
export default new SearchController()