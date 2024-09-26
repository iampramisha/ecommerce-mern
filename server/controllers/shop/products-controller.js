const { Product } = require("../../models/Product")

const getFilteredProducts=async(req,res)=>{
    try{
        const {category = [] , brand = [], sortBy= "price-lowtohigh"} =req.query;
let filters={};

// filters.category = { $in: ["electronics", "clothing"] };
// This tells MongoDB:

// "Find me all products where the category field is either "electronics" or "clothing"."
if(category.length){
    filters.category={$in:category.split(',')}
}
if(brand.length){
    filters.brand={$in:brand.split(',')}
}
let sort={};
switch (sortBy) {
    case "price-lowtohigh":
      sort.price = 1;

      break;
    case "price-hightolow":
      sort.price = -1;

      break;
    case "title-atoz":
      sort.title = 1;

      break;

    case "title-ztoa":
      sort.title = -1;

      break;

    default:
      sort.price = 1;
      break;
  }
        const products=await Product.find(filters).sort(sort).collation({ locale: 'en', strength: 2 });
res.status(200).json({
    success: true,
    data:products
})
    }catch(error){
console.log(error);
res.status(500).json({
    success:false,
    message:"some error occured"
})
    }
}
const getProductDetails = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);
  
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found"
        });
      }
  
      res.status(200).json({
        success: true,
        data: product
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Some error occurred"
      });
    }
  };
module.exports={getFilteredProducts, getProductDetails}