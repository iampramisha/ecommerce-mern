import { filterOptions } from '@/config'

import { Label } from '@radix-ui/react-dropdown-menu'
import React, { Fragment } from 'react'
import { Separator } from "@/components/ui/separator"

import { Checkbox } from '../ui/checkbox'

 function ProductFilter() {
  return (
    <div className='bg-background rounded-lg shadow-sm'>
      <div className='text-lg font-semibold'>
<h2>Filters</h2>
      </div>
      <div className='p-4 space-y-4'>
{Object.keys(filterOptions).map(keyItem=> 
    <Fragment>
        <div>
            <h3 className="text-base font-bold" >{keyItem}</h3>
            <div className='grid gap-2 mt-2'>
{
    filterOptions[keyItem].map(option=> <Label className='flex font-medium items-center gap-2 font-normal'>
<Checkbox/>
{option.label}
    </Label>)
}
            </div>
        </div>
        <Separator/>
    </Fragment>
)}
      </div>
    </div>
  )
}
export default ProductFilter