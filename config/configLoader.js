const path = require('path');
const fs = require('fs');

const configDir = path.resolve(__dirname, '../config');
const loadConfig = filename =>
    JSON.parse(fs.readFileSync(path.join(configDir, filename)));

module.exports = {
    getConfig() {
        return {
            local: loadConfig('local.json')
        };
    }
};
