require('dotenv').config();

const paypal = require('paypal-rest-sdk');

paypal.configure({
    mode:"sandbox",
<<<<<<< HEAD
    client_id: 'ASj_bzOZwcoiDLMi0wkv8xpBZqVmCIBPAR5jdG29HK3tE2G97w6ZtCtSAQfonaWkvJdyKRNcFW15NiG3',
    client_secret: 'EBi-eomG5mxRMfMDk2k027BYYl8QHMcIijOGvHkr4a0YZa17N0gaJnr0TdlnppR1G5XGlNWy-JPbhdtY'
=======
    client_id: process.env.CLIENT_ID,
    client_secret:process.env.CLIENT_SECRET
>>>>>>> e367c762c469855414863c4a57fd7cf888d820d4
});
console.log("PayPal configured with client ID:", paypal.configuration.client_id);

module.exports=paypal;