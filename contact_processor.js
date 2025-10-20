const fs = require('fs');
const path = require('path');

function getContactData(context, events, done) {
  const dataPath = path.join(__dirname, 'contact-data.json');
  const contactData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  context.vars.contactData = contactData;
  return done();
}

module.exports = {
  getContactData
};