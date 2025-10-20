const axios = require('axios');
require('dotenv').config();

module.exports = {
  getToken: async function(context, events) {  // Remove 'next' parameter
    try {
      // console.log("Attempting login with:", process.env.TEST_USER);
      
      const response = await axios.post('https://staging-app.cliquidator.info/login', {
        username: process.env.TEST_USER,
        password: process.env.TEST_PASS,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      context.vars.token = response.data.access_token;
      // console.log("Token successfully captured");
  
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      throw err;  
    }
  }
};