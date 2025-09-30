const { users, activeTokens } = require("../data/userStore");

//Users Array
const addUser = (user) => { users.push(user); };

//Token Array [actives]
const addToken = (token) => { activeTokens.push(token); };

const isExistToken = (token) => { return activeTokens.includes(token) };

function removeToken(token) {
    const index = activeTokens.indexOf(token);
    if (index > -1) activeTokens.splice(index, 1);
}

module.exports = {
    addUser,
    addToken,
    removeToken,
    isExistToken
};