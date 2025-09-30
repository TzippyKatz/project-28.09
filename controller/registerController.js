const bcrypt = require("bcrypt");
const { users } = require("../data/userStore");
const { addUser } = require("../utils/util");

function register(req, res) {
    try {
        const newUser = {
            id: users.length + 1,
            username: "newuser",
            passwordHash: bcrypt.hashSync("newpass", 10)
        };

        const existUser = users.find(u => u.username === newUser.username);
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        addUser(newUser);
        console.log(users.map(u => { return u.username }));

        return res.status(201).json({ id: newUser.id, username: newUser.username });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    register
};