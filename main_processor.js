const loginProcessor = require('./login_processor.js');
const contactProcessor = require('./contact_processor.js');
const assertPromotionFiltersProcessor = require('./assertPromotionFilters_processers.js')

module.exports = {
  ...loginProcessor,
  ...contactProcessor,
  ...assertPromotionFiltersProcessor
};