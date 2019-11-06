import profilehtml from '../../views/profile/profile.html';
import Fetch from '../model/Fetch.js';

class ProfileController{
    constructor () {

    }
    render(){
        // let data = await Fetch.getprofileList();
        // let html = template.render(profilehtml, { list: data.result })
        $('#main-container').html('profile')
    }
}
export default new ProfileController()