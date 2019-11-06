import positionhtml from '../../views/position/positionlist.html';
import Fetch from '../model/Fetch.js';

class PositionController{
    constructor () {

    }
    async render(){
        let data = await Fetch.getPositionList();
        let html = template.render(positionhtml, { list: data.result })
        $('#main-container').html(html)
    }
}
export default new PositionController()