const fs = require('fs');
const path = require('path');

function assertPromotionFiltersData(context, events, done) {
  // Use __dirname to get the path relative to THIS file's location
  const dataPath = path.join(__dirname, 'assertPromotionFiltersPayload.json');
  
  try {
    const assertPromotionFilterData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    context.vars.assertPromotionFilterData = assertPromotionFilterData;
    return done();
  } catch (error) {
    console.error('Error reading contact data:', error.message);
    return done(error);
  }
}

module.exports = {
  assertPromotionFiltersData
};