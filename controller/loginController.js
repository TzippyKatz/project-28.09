const bcrypt = require("bcrypt");
const generateToken = require("../utils/JWTToken");
const { addToken } = require("../utils/util");

async function login(req, res) {
    try {
        const { users } = require("../data/userStore");
        const { username, password } = req.body;

        const user = users.find(u => u.username === username);
        if (!user)
            return res.status(401).json({ message: "Invalid username or password" });

        const isMatch = await bcrypt.compare(password, user.passwordHash);

        if (!isMatch)
            return res.status(401).json({ message: "Invalid username or password" });

        const token = generateToken({ username: user.username });

        addToken(token);
        console.log(`token: ${token}`);
        return res.json({ token });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    login,
};