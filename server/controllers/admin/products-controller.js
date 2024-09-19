
const { imageUploadutil } = require("../../helpers/cloudinary");
const { Product } = require("../../models/Product");




const  handleImageUpload=async(req,res)=>{
    try{
const b64=Buffer.from(req.file.buffer).toString('base64');
const url="data:"+ req.file.mimetype + ";base64," +b64;
const result=await imageUploadutil(url);
res.json({
    success:true,
    result
})
}catch(error){
        console.log(error);
        res.json({
            success: false,
            message:"error occured"
        })
    }
}
// @desc    Create a new product
// @route   POST /api/products
 const createProduct = async (req, res) => {
  try {
    const { image, title, description, category, brand, price, salePrice, totalStock } = req.body;

    // Create new product
    const product = new Product({
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
    });

    // Save the product
    await product.save();

    res.status(201).json({success:true, message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

// @desc    Get all products
// @route   GET /api/products
 const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
const getProductById = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId); // Use your method to find the product
      if (product) {
        res.json({ success: true, product });
      } else {
        res.status(404).json({ success: false, message: 'Product not found' });
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  const updateProductById = async (req, res) => {
    try {
      const productId = req.params.id;
      const updateData = req.body;
  
      // Find and update the product
      const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, {
        new: true, // Return the updated product
        runValidators: true // Run validation on the update
      });
  
      if (updatedProduct) {
        res.json({ success: true, product: updatedProduct });
      } else {
        res.status(404).json({ success: false, message: 'Product not found' });
      }
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  const deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      
      const deletedProduct = await Product.findByIdAndDelete(productId);
      if (deletedProduct) {
        res.json({ success: true, message: 'Product deleted successfully' });
      } else {
        res.status(404).json({ success: false, message: 'Product not found' });
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  

module.exports={handleImageUpload,createProduct,getProducts,getProductById,updateProductById,deleteProduct}