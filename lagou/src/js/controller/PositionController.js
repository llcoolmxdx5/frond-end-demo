import positionhtml from '../../views/position/positionlist.html';

class PositionController{
    constructor () {

    }
    render(){
        $('#main-container').html(positionhtml)
    }
}
export default new PositionController()