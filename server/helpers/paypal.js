const paypal=require('paypal-rest-sdk');
paypal.configure({
    mode:"sandbox",
    client_id:AbhB0jXBzdo4dynt0XbjStl_sfZsvdpkfqrAvTT8XT2E6_bMB4d60krJNWRvXOrnrfcf17b0waN7TKNt,
    client_secret:AbhB0jXBzdo4dynt0XbjStl_sfZsvdpkfqrAvTT8XT2E6_bMB4d60krJNWRvXOrnrfcf17b0waN7TKNt
});
module.exports=paypal;