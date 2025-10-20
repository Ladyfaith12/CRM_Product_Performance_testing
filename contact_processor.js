const fs = require('fs');
const path = require('path');

function getContactData(context, events, done) {
  // Use __dirname to get the path relative to THIS file's location
  const dataPath = path.join(__dirname, 'contactPayload.json');
  
  try {
    const contactData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    context.vars.contactData = contactData;
    return done();
  } catch (error) {
    console.error('Error reading contact data:', error.message);
    return done(error);
  }
}

module.exports = {
  getContactData
};