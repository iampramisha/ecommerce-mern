import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Address from '@/components/shopping-view/address';
import AddressTile from '@/components/shopping-view/address-tile';
import { Button } from '@/components/ui/button';
import CartWrapper from '@/components/shopping-view/cart-wrapper';

export default function ShoppingCheckout() {
  // State to show/hide AddressTile
  const [showAddressTile, setShowAddressTile] = useState(false);

  // Function to toggle the AddressTile visibility
  const handleAddAddress = () => {
    setShowAddressTile(!showAddressTile); // Toggle the state
  };

  const handleCloseAddress = () => {
    setShowAddressTile(false); // Hide the address form when close icon is clicked
  };

  const { items } = useSelector((state) => state.cart); // Access cart items

  return (
    <div className='w-full min-h-screen'>
      <div className='h-[360px] w-full'>
        <img
          className='w-full h-full object-cover'
          src='https://americantwoshot.com/wp-content/uploads/2021/12/starting-a-clothing-line.jpg'
          alt='wardrobe'
        />
      </div>
      <div className='flex p-20'>
        {/* Left div for AddressTile and Address, taking 50% width */}
        <div className='w-1/2 pr-4'>
          {/* Add Address button */}
          <div className='flex justify-center'>
            {!showAddressTile && (
              <Button className="mt-3 mb-3" onClick={handleAddAddress}>
                Add Address
              </Button>
            )}
          </div>

          {/* Render AddressTile only when showAddressTile is true */}
          {showAddressTile && (
            <div className="relative border border-gray rounded-lg p-8">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
                onClick={handleCloseAddress}
              >
                &times; {/* This represents the close (X) icon */}
              </button>
              <AddressTile col={true} />
            </div>
          )}

          {/* Address component */}
          <div className='w-full border border-gray rounded-lg p-8 mt-4'>
            <Address col={true} />
          </div>
        </div>

        {/* Right div for CartWrapper */}
        <div className='w-1/2'>
          <CartWrapper cartItems={items}  showCheckOutButton={false} />
          <Button className="mt-3 w-full">CheckOut with Paypal</Button>
        </div>
      </div>
    </div>
  );
}
