
// import CommonForm from '@/components/common/form';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
// import { addProductFormElements } from '@/config';
// import React, { Fragment, useState } from 'react';
// import ProductsImageUpload from './image-upload';
// import axios from 'axios'; // Import axios or use fetch

// const initialFormData = {
//   image: null,
//   title: '',
//   description: '',
//   category: '',
//   brand: '',
//   price: '',
//   salePrice: '',
//   totalStock: '',
// };

// function AdminProducts() {
//   const [openCreateProductsFDialog, setOpenCreateDialog] = useState(false);
//   const [formData, setFormData] = useState(initialFormData);
//   const [imageFile, setImageFile] = useState(null);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState('');

//   // Function to handle form submission
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const productData = { ...formData, image: uploadedImageUrl };
//       console.log('Product data being sent:', productData); // Debug log
  
//       const response = await axios.post('http://localhost:5000/api/admin/products/create', productData);
//       console.log('Server response:', response.data); // Debug log
//       e.preventDefault();
//       setFormData(initialFormData); // Reset form data
//       setUploadedImageUrl('');      // Reset image
//       setOpenCreateDialog(false);  
//       if (response.data.success) {
//         alert('Product added successfully!');
//       } else {
//         alert('Failed to add product.');
//       }
//     } catch (error) {
//       console.error('Error creating product:', error);
//       alert('An error occurred while adding the product.');
//     }
//   };
  
//   return (
//     <Fragment>
//       <div className='mb-5 w-full flex justify-end'>
//         <Button onClick={() => setOpenCreateDialog(true)}>Add new product</Button>
//       </div>
//       <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
//         <Sheet open={openCreateProductsFDialog} onOpenChange={() => setOpenCreateDialog(false)}>
//           <SheetContent side="right" className="overflow-auto">
//             <SheetHeader>
//               <SheetTitle>Add New Product</SheetTitle>
//               {/* Image Upload Component */}
//               <ProductsImageUpload
//                 imageFile={imageFile}
//                 setImageFile={setImageFile}
//                 uploadedImageUrl={uploadedImageUrl}
//                 setUploadedImageUrl={setUploadedImageUrl}
//               />
//             </SheetHeader>
//             <div className='py-6'>
//               {/* Product Form */}
//               <CommonForm
//                 onSubmit={onSubmit}
//                 formData={formData}
//                 setFormData={setFormData}
//                 formControls={addProductFormElements}
//                 buttonText='Add'
//               />
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </Fragment>
//   );
// }

// export default AdminProducts;

// import CommonForm from '@/components/common/form';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
// import { addProductFormElements } from '@/config';
// import React, { Fragment, useState } from 'react';
// import ProductsImageUpload from './image-upload';

// import { useDispatch } from 'react-redux';
// import { addProduct } from '@/store/admin/product-slice';

// const initialFormData = {
//   image: null,
//   title: '',
//   description: '',
//   category: '',
//   brand: '',
//   price: '',
//   salePrice: '',
//   totalStock: '',
// };

// function AdminProducts() {
//   const [openCreateProductsFDialog, setOpenCreateDialog] = useState(false);
//   const [formData, setFormData] = useState(initialFormData);
//   const [imageFile, setImageFile] = useState(null);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState('');

//   const dispatch = useDispatch();

//   // Function to handle form submission
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const productData = { ...formData, image: uploadedImageUrl };
//     console.log('Product data being sent:', productData); // Debug log

//     try {
//       const actionResult = await dispatch(addProduct(productData));

//       if (addProduct.fulfilled.match(actionResult)) {
//         // Success
//         alert('Product added successfully!');
//            // Reset image
//         setOpenCreateDialog(false);
//         setImageFile(null);     
//         setFormData(initialFormData); // Reset form data
//         setUploadedImageUrl(""); 
//       } else {
//         // Failed
//         alert('Failed to add product.');
//       }
//     } catch (error) {
//       console.error('Error creating product:', error);
//       alert('An error occurred while adding the product.');
//     }
//   };

//   return (
//     <Fragment>
//       <div className='mb-5 w-full flex justify-end'>
//         <Button onClick={() => setOpenCreateDialog(true)}>Add new product</Button>
//       </div>
//       <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
//         <Sheet open={openCreateProductsFDialog} onOpenChange={() => setOpenCreateDialog(false)}>
//           <SheetContent side="right" className="overflow-auto">
//             <SheetHeader>
//               <SheetTitle>Add New Product</SheetTitle>
//               {/* Image Upload Component */}
//               <ProductsImageUpload
//                 imageFile={imageFile}
//                 setImageFile={setImageFile}
//                 uploadedImageUrl={uploadedImageUrl}
//                 setUploadedImageUrl={setUploadedImageUrl}
//               />
//             </SheetHeader>
//             <div className='py-6'>
//               {/* Product Form */}
//               <CommonForm
//                 onSubmit={onSubmit}
//                 formData={formData}
//                 setFormData={setFormData}
//                 formControls={addProductFormElements}
//                 buttonText='Add'
//               />
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </Fragment>
//   );
// }

// export default AdminProducts;


// import React, { Fragment, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
// import ProductsImageUpload from './image-upload';
// import CommonForm from '@/components/common/form';
// import { addProductFormElements } from '@/config';
// import { useDispatch } from 'react-redux';
// import { addProduct } from '@/store/admin/product-slice';
// import { Toast } from '@radix-ui/react-toast';
// import { useToast } from '@/hooks/use-toast';

// const initialFormData = {
//   image: null,
//   title: '',
//   description: '',
//   category: '',
//   brand: '',
//   price: '',
//   salePrice: '',
//   totalStock: '',
// };

// function AdminProducts() {
//   const [openCreateProductsFDialog, setOpenCreateDialog] = useState(false);
//   const [formData, setFormData] = useState(initialFormData);
//   const [imageFile, setImageFile] = useState(null);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState('');

//   const dispatch = useDispatch();
//   const { toast } = useToast();  // Destructure toast from useToast

//   // Function to handle form submission
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const productData = { ...formData, image: uploadedImageUrl };

//     try {
//       const actionResult = await dispatch(addProduct(productData));

//       if (addProduct.fulfilled.match(actionResult)) {
//         // Success
//         toast({
//           title: 'Product added successfully!',
//           description: 'The new product has been added to your inventory.',
//           status: 'success',  // Depending on your library, this could be variant, type, or status
//         });
//         setFormData(initialFormData);  // Reset form data
//         setUploadedImageUrl('');       // Reset uploaded image URL
//         setImageFile(null);            // Reset the selected image file
//         setOpenCreateDialog(false);    // Close the sheet
//       } else {
//         // Failed
//         toast({
//           title: 'Failed to add product.',
//           description: 'There was an error while adding the product. Please try again.',
//           status: 'error',  // Error variant or status
//         });
//       }
//     } catch (error) {
//       console.error('Error creating product:', error);
//       toast({
//         title: 'Error',
//         description: 'An error occurred while adding the product.',
//         status: 'error',
//       });
//     }
//   };

//   return (
//     <Fragment>
//       <div className='mb-5 w-full flex justify-end'>
//         <Button onClick={() => setOpenCreateDialog(true)}>Add new product</Button>
//       </div>

//       <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
//         {
          
//         }
//         <Sheet open={openCreateProductsFDialog} onOpenChange={() => setOpenCreateDialog(false)}>
//           <SheetContent side="right" className="overflow-auto">
//             <SheetHeader>
//               <SheetTitle>Add New Product</SheetTitle>
//               {/* Image Upload Component */}
//               <ProductsImageUpload
//                 imageFile={imageFile}
//                 setImageFile={setImageFile}
//                 uploadedImageUrl={uploadedImageUrl}
//                 setUploadedImageUrl={setUploadedImageUrl}
//               />
//             </SheetHeader>
//             <div className='py-6'>
//               {/* Product Form */}
//               <CommonForm
//                 onSubmit={onSubmit}
//                 formData={formData}
//                 setFormData={setFormData}
//                 formControls={addProductFormElements}
//                 buttonText='Add'
//               />
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </Fragment>
//   );
// }

// export default AdminProducts;


import React, { Fragment, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import ProductsImageUpload from './image-upload';
import CommonForm from '@/components/common/form';
import { addProductFormElements } from '@/config';
import { useDispatch, useSelector } from 'react-redux';
import productSlice, { addProduct, fetchProducts } from '@/store/admin/product-slice';
import { useToast } from '@/hooks/use-toast';
import AdminproductTile from './product-tile';

const initialFormData = {
  image: null,
  title: '',
  description: '',
  category: '',
  brand: '',
  price: '',
  salePrice: '',
  totalStock: '',
};

function AdminProducts() {
  const [openCreateProductsFDialog, setOpenCreateDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const dispatch = useDispatch();
  const { toast } = useToast();  // Destructure toast from useToast
  const products = useSelector(state => state.products.products);
  console.log(products); // Check if products are being fetched correctly

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products when the component mounts
  }, [dispatch]);

  // Function to handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    const productData = { ...formData, image: uploadedImageUrl };

    try {
      const actionResult = await dispatch(addProduct(productData));

      if (addProduct.fulfilled.match(actionResult)) {
        // Success
        toast({
          title: 'Product added successfully!',
          description: 'The new product has been added to your inventory.',
          status: 'success',
        });
        setFormData(initialFormData);  // Reset form data
        setUploadedImageUrl('');       // Reset uploaded image URL
        setImageFile(null);            // Reset the selected image file
        setOpenCreateDialog(false);    // Close the sheet
      } else {
        // Failed
        toast({
          title: 'Failed to add product.',
          description: 'There was an error while adding the product. Please try again.',
          status: 'error',
        });
      }
    } catch (error) {
      console.error('Error creating product:', error);
      toast({
        title: 'Error',
        description: 'An error occurred while adding the product.',
        status: 'error',
      });
    }
  };

  return (
    <Fragment>
      
      <div className="container flex flex-row justify-center mx-auto px-4 gap-10">
    
        <div className='flex-1'>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {products.map(product => (
            <AdminproductTile key={product._id} product={product} />
          ))}
        </div>
        </div>
      
        <div className=' flex justify-end'>
          <Button onClick={() => setOpenCreateDialog(true)}>
            Add New Product
          </Button>
        </div>
      </div>

      <Sheet open={openCreateProductsFDialog} onOpenChange={() => setOpenCreateDialog(false)}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
            {/* Image Upload Component */}
            <ProductsImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
            />
          </SheetHeader>
          <div className='py-6'>
            {/* Product Form */}
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              formControls={addProductFormElements}
              buttonText='Add'
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default AdminProducts;

