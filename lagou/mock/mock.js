const json = require('./positionlist.json');
const db = require('./db.json');

module.exports = () => {
    const data = {
        list: json,
        profile: db.profile
    };
    return data
}