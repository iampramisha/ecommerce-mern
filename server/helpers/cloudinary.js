const cloudinary=require('cloudinary').v2;
const multer=require('multer');
cloudinary.config({
    cloud_name: 'ddqw6cmni',
    api_key:'263217636922538',
    api_secret:'6es6aqWXgAbdKXzzU0AsWBFJY8I'
})
const storage=new multer.memoryStorage();
async function imageUploadutil(file){
    const result=await cloudinary.uploader.upload(file,{
        resource_type:'auto',
    });
    return result
}
const upload=multer({storage});
module.exports={upload,imageUploadutil}