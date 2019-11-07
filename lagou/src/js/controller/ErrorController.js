import Errorhtml from '../../views/error/error.html';

class SearchController{
    constructor () {

    }
    render(){
        $('#main-container').html(Errorhtml)
    }
}
export default new SearchController()