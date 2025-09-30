const { users } = require("../data/userStore");

//Users Array
const addUser = (user) => { users.push(user); };

//Token Array [actives]



module.exports = {
    addUser
};