const paypal = require('paypal-rest-sdk');

paypal.configure({
    mode:"sandbox",
    client_id: process.env.CLIENT_ID,
    client_secret:process.env.CLIENT_SECRET
});
console.log("PayPal configured with client ID:", paypal.configuration.client_id);

module.exports=paypal;