import ProductFilter from '@/components/shopping-view/filter'
import { Button } from '@/components/ui/button'
import { sortOptions } from '@/config'
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ArrowUpDownIcon, Circle } from 'lucide-react'
import React, { useEffect } from 'react'
import { fetchAllFilteredProducts } from '@/store/shop/products-slice'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingproductTile from '@/components/shopping-view/product-tile'

export default function ShoppingListing() {

  const dispatch=useDispatch();

  const isLoading = useSelector(state => state.shopProducts);
  useEffect(()=>{
    dispatch(fetchAllFilteredProducts())
  },[dispatch])
  const productList=useSelector(state=> state.shopProducts.productList)
  console.log("productList",productList)
  
  return (
    <div  className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6'>
      <ProductFilter/>
      <div className='bg-background w-full rounded-lg shadow-sm'>
        <div className='p-4 border-b gap-3 flex items-center justify-between'>
<h2 className='text-lg font-semibold'>
All products
</h2>
<div className='flex items-center'>
  <span className='text-muted-foreground mr-2'> 10 products</span>

  <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="sm" className="flex items-center gap-3">
    <ArrowUpDownIcon className='h-4 w-4'/>
    <span>Sort by</span>
    </Button>

  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className='w-[200px] shadow-lg md:mt-5 px-4 py-4'>
<DropdownMenuRadioGroup>
  {sortOptions.map(sortItem=>
    <DropdownMenuRadioItem key={sortItem.id} className='flex flex-row items-center gap-2 px-2 mb-2'>
<Circle className='bg-black rounded-xl w-4 h-4'/>
      {sortItem.label}
    </DropdownMenuRadioItem>
  )}
</DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>
</div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
{
  productList && productList.length > 0 ?
productList.map(productItem=>
  <ShoppingproductTile   key={productItem._id}  product={productItem} className="gap-4"/>

) : null

} 
        </div>
      </div>
    </div>
  )
}
