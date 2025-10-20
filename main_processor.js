const loginProcessor = require('./login_processor.js');
const contactProcessor = require('./contact_processor.js');

module.exports = {
  ...loginProcessor,
  ...contactProcessor
};