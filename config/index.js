const { getConfig } = require('./configLoader');

const { NODE_ENV } = process.env;

const config = getConfig()[NODE_ENV || 'local'];

module.exports = {
    config
};
