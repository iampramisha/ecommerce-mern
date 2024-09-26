import React, { useEffect } from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { categoryOptionsMap } from '@/config'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/store/shop/cart-slice'

 function ShoppingproductTile({product,handleGetProductDetails})
  {
    const dispatch = useDispatch();


    const { user } = useSelector((state) => state.auth);
    console.log("userrr",user);
    const userId=user.id;
    const handleAddToCart = (e) => {
      e.stopPropagation(); // Prevent triggering `handleGetProductDetails` when clicking "Add to Cart"
      dispatch(addToCart({ userId, productId: product._id, quantity: 1 })); // Assuming quantity is 1
    };
  
    
    return (
  
    <Card className="w-full max-w-sm mx-auto shadow-sm mt-6 "  onClick={handleGetProductDetails}>
        <div className=''>
<div className='relative'>

    <img src={product?.image} alt={product?.title} className='w-full h-[300px] object-cover rounded-t-lg'/>
{product?.salePrice > 0 ?
<Badge
    
    className="absolute top-3 left-2 bg-red-500 "
    >Sale</Badge> : null
}
</div>
<CardContent className="p-4">
<h2 className='text-xl font-bold mb-2'>{product?.title}</h2>
<div className='flex justify-between items-center mb-2'>
<span className='text-[16px] text-muted-foreground'>
{categoryOptionsMap[product?.category]}
</span>
<span className='text-[16px] text-muted-foreground'>
{product?.brand}
</span>
</div>
<div className='flex justify-between items-center mb-2'>
<span className={`${product?.salePrice > 0 ? 'line-through': ''} text-sm font-semibold tetx-primary text-muted-foreground`}>
{product?.salePrice > 0 ? 
<span className=' text-sm font-semibold text-primary text-muted-foreground'>
{product?.salePrice}
</span>
:null}

</span>
<span className=' text-sm font-semibold text-primary text-muted-foreground'>
{product?.price}
</span>
</div>
</CardContent>
<CardFooter>
    <Button className="w-full"  onClick={handleAddToCart}>Add to cart</Button>
</CardFooter>
        </div>
    </Card>
    )
}
export default ShoppingproductTile;