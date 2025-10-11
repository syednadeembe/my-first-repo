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
