const { activeTokens } = require("../data/userStore");

async function logout(req, res) {
    console.log(`activeTokens before: ${activeTokens}`);
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(400).json({ message: "No token provided" });
        const index = activeTokens.indexOf(token);
        if (index > -1) activeTokens.splice(index, 1);
        console.log(`activeTokens after: ${activeTokens}`);
        return res.json({ message: "Logged out successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    logout
};