// Logger Module
const LOG_LEVELS = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3
};

let currentLevel = LOG_LEVELS.INFO;

function log(level, message) {
    if (LOG_LEVELS[level] >= currentLevel) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${level}] ${message}`);
    }
}

module.exports = {
    debug: (msg) => log("DEBUG", msg),
    info: (msg) => log("INFO", msg),
    warn: (msg) => log("WARN", msg),
    error: (msg) => log("ERROR", msg),
    setLevel: (level) => { currentLevel = LOG_LEVELS[level]; }
};
