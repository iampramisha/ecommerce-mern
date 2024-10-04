// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Address from '@/components/shopping-view/address';
// import AddressTile from '@/components/shopping-view/address-tile';
// import { Button } from '@/components/ui/button';
// import CartWrapper from '@/components/shopping-view/cart-wrapper';

// export default function ShoppingCheckout() {
//   // State to show/hide AddressTile
//   const [showAddressTile, setShowAddressTile] = useState(false);

//   // Function to toggle the AddressTile visibility
//   const handleAddAddress = () => {
//     setShowAddressTile(!showAddressTile); // Toggle the state
//   };

//   const handleCloseAddress = () => {
//     setShowAddressTile(false); // Hide the address form when close icon is clicked
//   };

//   const { items } = useSelector((state) => state.cart); // Access cart items
// console.log("itemss,",items);
//   return (
//     <div className='w-full min-h-screen'>
//       <div className='h-[360px] w-full'>
//         <img
//           className='w-full h-full object-cover'
//           src='https://americantwoshot.com/wp-content/uploads/2021/12/starting-a-clothing-line.jpg'
//           alt='wardrobe'
//         />
//       </div>
//       <div className='flex p-20'>
//         {/* Left div for AddressTile and Address, taking 50% width */}
//         <div className='w-1/2 pr-4'>
//           {/* Add Address button */}
//           <div className='flex justify-center'>
//             {!showAddressTile && (
//               <Button className="mt-3 mb-3" onClick={handleAddAddress}>
//                 Add Address
//               </Button>
//             )}
//           </div>

//           {/* Render AddressTile only when showAddressTile is true */}
//           {showAddressTile && (
//             <div className="relative border border-gray rounded-lg p-8">
//               <button
//                 className="absolute top-2 right-2 text-gray-500 hover:text-black"
//                 onClick={handleCloseAddress}
//               >
//                 &times; {/* This represents the close (X) icon */}
//               </button>
//               <AddressTile col={true} />
//             </div>
//           )}

//           {/* Address component */}
//           <div className='w-full border border-gray rounded-lg p-8 mt-4'>
//             <Address col={true} />
//           </div>
//         </div>

//         {/* Right div for CartWrapper */}
//         <div className='w-1/2'>
//           <CartWrapper cartItems={items}  showCheckOutButton={false} />
//           <Button className="mt-3 w-full">CheckOut with Paypal</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Address from '@/components/shopping-view/address';
// import AddressTile from '@/components/shopping-view/address-tile';
// import { Button } from '@/components/ui/button';
// import CartWrapper from '@/components/shopping-view/cart-wrapper';
// import { createOrder } from '@/store/shop/order-slice'; // Import the createOrder thunk
// import { useNavigate } from 'react-router-dom';

// export default function ShoppingCheckout() {
//   const [showAddressTile, setShowAddressTile] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { items } = useSelector((state) => state.cart);
//   const userId = useSelector((state) => state.auth.user.id); // Get user ID from the auth slice

//   const handleAddAddress = () => {
//     setShowAddressTile(!showAddressTile);
//   };

//   const handleCloseAddress = () => {
//     setShowAddressTile(false);
//   };

//   const handleSelectAddress = (address) => {
//     setSelectedAddress(address);
//     setShowAddressTile(false);
//   };

//   const handleCheckout = async () => {
//     if (items.length === 0) {
//       alert('Your cart is empty! Please add items to your cart before checking out.');
//       return;
//     }
    
//     if (!selectedAddress) {
//       alert('Please select an address for the checkout.');
//       return;
//     }

//     // Create order details
//     const total = calculateTotalPrice(items); // Function to calculate total price
//     const orderDetails = {
//       items: items.map(item => ({
//         ProductId: item.productId, // Assuming the product ID is stored in item.productId
//         title: item.title,
//         image: item.image,
//         price: item.price,
//         salePrice: item.salePrice,
//         quantity: item.quantity,
//       })),
//       userId,
//       addressInfo: {
//         addressid: selectedAddress._id, // Use the selected address ID
//         address: selectedAddress.address,
//         city: selectedAddress.city,
//         pinCode: selectedAddress.pinCode,
//         notes: selectedAddress.notes,
//       },
//       total,
//     };

//     // Dispatch the createOrder thunk
//     const resultAction = await dispatch(createOrder(orderDetails));

//     if (createOrder.fulfilled.match(resultAction)) {
//       // If the order was created successfully, you can redirect the user or show success message
//       console.log("Order created successfully:", resultAction.payload);
//       navigate('/confirmation', { state: { orderId: resultAction.payload._id } }); // Example to navigate to a confirmation page
//     } else {
//       // Handle the error scenario
//       console.error('Failed to create order:', resultAction.error.message);
//     }
//   };

//   const calculateTotalPrice = (items) => {
//     return items.reduce((total, item) => {
//       const priceToUse = item.salePrice > 0 ? item.salePrice : item.price;
//       return total + (priceToUse * item.quantity);
//     }, 0).toFixed(2);
//   };

//   return (
//     <div className='w-full min-h-screen'>
//       <div className='h-[360px] w-full'>
//         <img
//           className='w-full h-full object-cover'
//           src='https://americantwoshot.com/wp-content/uploads/2021/12/starting-a-clothing-line.jpg'
//           alt='wardrobe'
//         />
//       </div>
//       <div className='flex p-20'>
//         <div className='w-1/2 pr-4'>
//           <div className='flex justify-center'>
//             {!showAddressTile && (
//               <Button className="mt-3 mb-3" onClick={handleAddAddress}>
//                 Add Address
//               </Button>
//             )}
//           </div>

//           {showAddressTile && (
//             <div className="relative border border-gray rounded-lg p-8">
//               <button
//                 className="absolute top-2 right-2 text-gray-500 hover:text-black"
//                 onClick={handleCloseAddress}
//               >
//                 &times;
//               </button>
//               <AddressTile col={true} />
//             </div>
//           )}

//           <div className='w-full border border-gray rounded-lg p-8 mt-4'>
//             <Address col={true} onSelect={handleSelectAddress} />
//           </div>
//         </div>

//         <div className='w-1/2'>
//           <CartWrapper cartItems={items} showCheckOutButton={false} />
//           <Button className="mt-3 w-full" onClick={handleCheckout}>
//             CheckOut with Paypal
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Address from '@/components/shopping-view/address';
// import AddressTile from '@/components/shopping-view/address-tile';
// import { Button } from '@/components/ui/button';
// import CartWrapper from '@/components/shopping-view/cart-wrapper';

// export default function ShoppingCheckout() {
//   // State to show/hide AddressTile and store selected address
//   const [showAddressTile, setShowAddressTile] = useState(false);
//   const [selectedAddressId, setSelectedAddressId] = useState(null); // Store selected address ID

//   // Function to toggle the AddressTile visibility
//   const handleAddAddress = () => {
//     setShowAddressTile(!showAddressTile);
//   };

//   const handleCloseAddress = () => {
//     setShowAddressTile(false); // Hide the address form when close icon is clicked
//   };
//   const calculateTotalPrice = () => {
//     return items.reduce((total, item) => {
//       const priceToUse = item.salePrice > 0 ? item.salePrice : item.price;
//       return total + (priceToUse * item.quantity);
//     }, 0).toFixed(2);
//   };
//   const handleSelectAddress = (addressId) => {
//     setSelectedAddressId(addressId); // Update selected address ID
//     console.log('Selected Address ID:', addressId); // For debugging or further actions
//   };

//   const { items } = useSelector((state) => state.cart); // Access cart items
//   console.log("itemss,", items);

//   return (
//     <div className='w-full min-h-screen'>
//       <div className='h-[360px] w-full'>
//         <img
//           className='w-full h-full object-cover'
//           src='https://americantwoshot.com/wp-content/uploads/2021/12/starting-a-clothing-line.jpg'
//           alt='wardrobe'
//         />
//       </div>
//       <div className='flex p-20'>
//         {/* Left div for AddressTile and Address, taking 50% width */}
//         <div className='w-1/2 pr-4'>
//           {/* Add Address button */}
//           <div className='flex justify-center'>
//             {!showAddressTile && (
//               <Button className="mt-3 mb-3" onClick={handleAddAddress}>
//                 Add Address
//               </Button>
//             )}
//           </div>

//           {/* Render AddressTile only when showAddressTile is true */}
//           {showAddressTile && (
//             <div className="relative border border-gray rounded-lg p-8">
//               <button
//                 className="absolute top-2 right-2 text-gray-500 hover:text-black"
//                 onClick={handleCloseAddress}
//               >
//                 &times; {/* This represents the close (X) icon */}
//               </button>
//               <AddressTile col={true} />
//             </div>
//           )}

//           {/* Address component with onSelect prop */}
//           <div className='w-full border border-gray rounded-lg p-8 mt-4'>
//             <Address col={true} onSelect={handleSelectAddress} />
//           </div>
//         </div>

//         {/* Right div for CartWrapper */}
//         <div className='w-1/2'>
//           <CartWrapper cartItems={items} showCheckOutButton={false} />
//           <Button className="mt-3 w-full">CheckOut with Paypal</Button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import Address from '@/components/shopping-view/address';
import CartWrapper from '@/components/shopping-view/cart-wrapper';
import { createOrder } from '@/store/shop/order-slice'; // Import the createOrder action
import AddressTile from '@/components/shopping-view/address-tile';

export default function ShoppingCheckout() {
  const dispatch = useDispatch();

  // State for showing/hiding AddressTile and storing selected address
  const [showAddressTile, setShowAddressTile] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null); // ID of selected address
  const [selectedAddress, setSelectedAddress] = useState(null); // Full selected address object

  const { items } = useSelector((state) => state.cart); // Access cart items from Redux
  const { user } = useSelector((state) => state.auth); // Access user info from Redux
  const userId = user?.id; // Get the logged-in user ID

console.log("itemsszzwwww", items)

  const handleAddAddress = () => {
    setShowAddressTile(!showAddressTile);
  };

  // Function to handle the selection of an address
  const handleSelectAddress = (addressId, addressObject) => {
    setSelectedAddressId(addressId); // Set the selected address ID
    setSelectedAddress(addressObject); // Store the selected address object
  };
  // Function to close the AddressTile form
  const handleCloseAddress = () => {
    setShowAddressTile(false);
  };

  // Function to calculate the total price of cart items
  const calculateTotalPrice = () => {
    return items
      .reduce((total, item) => {
        const priceToUse = item.salePrice > 0 ? item.salePrice : item.price;
        return total + priceToUse * item.quantity;
      }, 0)
      .toFixed(2);
  };

  // Function to handle the checkout process
  const handleCheckout = async () => {
    if (!selectedAddressId || !items.length) {
      console.log("No address or items selected for checkout.");
      return;
    }

    const total = calculateTotalPrice();

    const addressInfo = {
      addressId: selectedAddressId,
      address: selectedAddress.address,
      city: selectedAddress.city,
      pinCode: selectedAddress.pinCode,
      notes: selectedAddress.notes,
    };

    try {
      const response = await dispatch(
        createOrder({
          items: items.map(item => ({
            productId: item.productId,
            title: item.title,
            image: item.image,
            price: item.price,
            salePrice: item.salePrice,
            quantity: item.quantity,
          })),
          userId,
       
          addressInfo,
          total,
        })
      ).unwrap();

      console.log('Order created successfully:', response);
      // Handle success (e.g., redirect to PayPal payment page)
    } catch (error) {
      console.error('Failed to create order:', error);
      // Handle error
    }
  };

  return (
    <div className='w-full min-h-screen'>
      <div className='h-[360px] w-full'>
        <img
          className='w-full h-full object-cover'
          src='https://americantwoshot.com/wp-content/uploads/2021/12/starting-a-clothing-line.jpg'
          alt='wardrobe'
        />
      </div>
      <div className='flex p-1 md:p-20 flex-col md:flex-row '>
        {/* Left div for AddressTile and Address, taking 50% width */}
        <div className=' w-full md:w-1/2 pr-4'>
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

          {/* Address component with onSelect prop */}
          <div className='w-full border border-gray rounded-lg p-8 mt-4'>
            <Address col={true} onSelect={handleSelectAddress} />
          </div>
        </div>

        {/* Right div for CartWrapper */}
        <div className='w-full md:w-1/2'>
          <CartWrapper cartItems={items} showCheckOutButton={false} />
          <Button className="mt-3 w-full" onClick={handleCheckout}>
            CheckOut with Paypal
          </Button>
        </div>
      </div>
    </div>
  );
}
