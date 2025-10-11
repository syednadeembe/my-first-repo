// Authentication Module
const users = {};

function register(username, password) {
    if (users[username]) {
        return { success: false, message: "User already exists" };
    }
    users[username] = password;
    return { success: true, message: "User registered" };
}

function login(username, password) {
    if (users[username] === password) {
        return { success: true, token: "fake-jwt-token" };
    }
    return { success: false, message: "Invalid credentials" };
}

module.exports = { register, login };

// Input validation
function validateInput(username, password) {
    if (!username || username.length < 3) {
        return "Username must be at least 3 characters";
    }
    if (!password || password.length < 6) {
        return "Password must be at least 6 characters";
    }
    return null;
}

module.exports.validateInput = validateInput;
