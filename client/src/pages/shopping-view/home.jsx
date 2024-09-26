// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { MoveRight } from 'lucide-react'; // Assuming you're using Lucide for icons
// import { categories, brands } from './categories'; // Adjust the path as necessary
// import { fetchAllProducts } from '@/store/shop/products-slice';
// import { useDispatch, useSelector } from 'react-redux';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';

// export default function ShoppingHome() {
//   // Array containing images and alt texts
//   const dispatch=useDispatch();
//   const { productList, isLoading, error } = useSelector((state) => state.shopProducts);

//   useEffect(() => {
//       dispatch(fetchAllProducts()); // Dispatch the action to fetch all products
//   }, [dispatch]);

//   const images = [
//     {
//       src: 'https://i.pinimg.com/originals/9e/35/4d/9e354d260ab429ed46d0c6d7a9012bda.jpg',
//       alt: 'Beautiful Nature Scene'
//     },
//     {
//       src: 'https://th.bing.com/th/id/OIP.NTpdc8RF2o6V-EAAnMatRAHaJQ?w=768&h=960&rs=1&pid=ImgDetMain',
//       alt: 'Elegant Interior Design'
//     },
//     {
//       src: 'https://i.pinimg.com/originals/07/26/f9/0726f959c8cf05df7afc4ced03d32e85.jpg',
//       alt: 'Serene Mountain View'
//     }
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval); // Clean up on component unmount
//   }, [images.length]);

//   return (
//     <div className="w-full h-full min-h-screen ">
//       <div className="w-full h-[470px] flex flex-row mt-8">
//         <div className="flex flex-col flex-1 px-5 md:px-8 lg:px-20">
//           <p className="text-5xl w-full max-w-[460px] leading-snug font-normal">
//             We Picked Every Item With Care{' '},
//             <br/>
      
//             <span className="text-7xl font-medium">You Must Try</span>
//             <br></br>
//              At least Once.
//           </p>
//           <Button className="flex flex-row gap-2 mt-14 w-[320px] h-12">
//             Go to Collection
//             <MoveRight />
//           </Button>
//         </div>
//         <div className="hidden sm:block flex-1 w-full h-full">
//           <img
//             src={images[currentImageIndex].src}
//             alt={images[currentImageIndex].alt}
        
//    className="w-full h-full object-cover rounded-[50%]"
//           />
//         </div>
//       </div>
//       <div>
//         <div className=' px-0 sm:px-8 mt-7'>
//           <div className='flex justify-center items-center font-bold text-3xl mb-6'>    
//                <p>Shop by category</p></div>
   
//       <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-0 sm:p-4">
//       {categories.map((category) => (
//         <div
//           key={category.name}
//           className="flex flex-col items-center justify-center p-4 border rounded-lg shadow hover:bg-gray-100"
//         >
//           <div className=" text-sm sm:text-xl mb-2">{category.icon}</div>
//           <p className="text-sm sm:text-xl font-[5px]">{category.name}</p>
//         </div>
//       ))}
//       </div>
//     </div>
//       </div>
//       <div>
//         <div className=' px-0 sm:px-8 mt-7'>
//           <div className='flex justify-center items-center font-bold text-3xl mb-6'>    
//                <p>Shop by brands</p></div>
   
//       <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 p-0 sm:p-4">
//       {brands.map((brand) => (
//         <div
//           key={brand.name}
//           className="flex flex-col items-center justify-center p-4 border rounded-lg shadow hover:bg-gray-100"
//         >
//           <div className=" text-sm sm:text-xl mb-2">{brand.icon}</div>
//           <p className="text-sm sm:text-xl font-[5px]">{brand.label}</p>
//         </div>
//       ))}
//       </div>
//     </div>
//       </div>
//       <div className="px-0 sm:px-8 mt-7">
//       <div className="flex justify-center items-center font-bold text-3xl mb-6">
//         <p>Our Products</p>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-0 sm:p-4">
//         {productList.map((product) => (
//           <Card
//             key={product._id}
//             className="w-full max-w-sm mx-auto shadow-sm mt-6"
//             onClick={() => handleGetProductDetails(product._id)}
//           >
//             <div className='relative'>
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className='w-full h-[300px] object-cover rounded-t-lg'
//               />
//               {product.salePrice > 0 && (
//                 <Badge className="absolute top-3 left-2 bg-red-500">
//                   Sale
//                 </Badge>
//               )}
//             </div>
//             <CardContent className="p-4">
//               <h2 className='text-xl font-bold mb-2'>{product.title}</h2>
//               <div className='flex justify-between items-center mb-2'>
//                 <span className='text-[16px] text-muted-foreground'>
//                 {product.category}
//                 </span>
//                 <span className='text-[16px] text-muted-foreground'>
//                   {product.brand}
//                 </span>
//               </div>
//               <div className='flex justify-between items-center mb-2'>
//                 <span className={`${product.salePrice > 0 ? 'line-through' : ''} text-sm font-semibold text-muted-foreground`}>
//                   {product.salePrice > 0 && (
//                     <span className='text-sm font-semibold text-primary'>
//                       ${product.salePrice}
//                     </span>
//                   )}
//                 </span>
//                 <span className='text-sm font-semibold text-primary'>
//                   ${product.price}
//                 </span>
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button className="w-full" >
//                 Add to cart
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//   </div>
//   </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { MoveRight, ChevronLeft, ChevronRight } from 'lucide-react'; // Import additional icons
// import { categories, brands } from './categories'; // Adjust the path as necessary
// import { fetchAllProducts } from '@/store/shop/products-slice';
// import { useDispatch, useSelector } from 'react-redux';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';

// export default function ShoppingHome() {
//   const dispatch = useDispatch();
//   const { productList, isLoading, error } = useSelector((state) => state.shopProducts);

//   useEffect(() => {
//     dispatch(fetchAllProducts()); // Dispatch the action to fetch all products
//   }, [dispatch]);

//   const images = [
//     {
//       src: 'https://i.pinimg.com/originals/9e/35/4d/9e354d260ab429ed46d0c6d7a9012bda.jpg',
//       alt: 'Beautiful Nature Scene'
//     },
//     {
//       src: 'https://th.bing.com/th/id/OIP.NTpdc8RF2o6V-EAAnMatRAHaJQ?w=768&h=960&rs=1&pid=ImgDetMain',
//       alt: 'Elegant Interior Design'
//     },
//     {
//       src: 'https://i.pinimg.com/originals/07/26/f9/0726f959c8cf05df7afc4ced03d32e85.jpg',
//       alt: 'Serene Mountain View'
//     }
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to go to the previous image
//   const handlePrevClick = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   // Function to go to the next image
//   const handleNextClick = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextClick(); // Automatically change image every 5 seconds
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval); // Clean up on component unmount
//   }, []);

//   return (
//     <div className="w-full h-full min-h-screen">
//       <div className="relative w-full h-[470px] flex flex-row mt-8">
//         <div className="flex flex-col flex-1 px-5 md:px-8 lg:px-20">
//         <button
//             onClick={handlePrevClick}
//             className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 text-black rounded-full p-2"
//           >
//             <ChevronLeft />
//           </button>
//           <p className="text-5xl w-full max-w-[460px] leading-snug font-normal">
//             We Picked Every Item With Care{' '}
//             <br />
//             <span className="text-7xl font-medium">You Must Try</span>
//             <br />
//             At least Once.
//           </p>
//           <Button className="flex flex-row gap-2 mt-14 w-[320px] h-12">
//             Go to Collection
//             <MoveRight />
//           </Button>
//         </div>
//         <div className="hidden sm:block flex-1 w-full h-full relative">
//           <img
//             src={images[currentImageIndex].src}
//             alt={images[currentImageIndex].alt}
//             className="w-full h-full object-cover rounded-[50%]"
//           />
         
//          <button
//             onClick={handleNextClick}
//             className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 text-black rounded-full p-2"
//           >
//             <ChevronRight />
//           </button>
//         </div>
     
//       </div>
  
//       <div className="px-0 sm:px-8 mt-7">
//         <div className="flex justify-center items-center font-bold text-3xl mb-6">
//           <p>Shop by category</p>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-0 sm:p-4">
//           {categories.map((category) => (
//             <div
//               key={category.name}
//               className="flex flex-col items-center justify-center p-4 border rounded-lg shadow hover:bg-gray-100"
//             >
//               <div className="text-sm sm:text-xl mb-2">{category.icon}</div>
//               <p className="text-sm sm:text-xl font-[5px]">{category.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="px-0 sm:px-8 mt-7">
//         <div className="flex justify-center items-center font-bold text-3xl mb-6">
//           <p>Shop by brands</p>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 p-0 sm:p-4">
//           {brands.map((brand) => (
//             <div
//               key={brand.name}
//               className="flex flex-col items-center justify-center p-4 border rounded-lg shadow hover:bg-gray-100"
//             >
//               <div className="text-sm sm:text-xl mb-2">{brand.icon}</div>
//               <p className="text-sm sm:text-xl font-[5px]">{brand.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="px-0 sm:px-8 mt-7">
//         <div className="flex justify-center items-center font-bold text-3xl mb-6">
//           <p>Our Products</p>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-0 sm:p-4">
//           {productList.map((product) => (
//             <Card
//               key={product._id}
//               className="w-full max-w-sm mx-auto shadow-sm mt-6"
//               onClick={() => handleGetProductDetails(product._id)}
//             >
//               <div className="relative">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-[300px] object-cover rounded-t-lg"
//                 />
//                 {product.salePrice > 0 && (
//                   <Badge className="absolute top-3 left-2 bg-red-500">Sale</Badge>
//                 )}
//               </div>
//               <CardContent className="p-4">
//                 <h2 className="text-xl font-bold mb-2">{product.title}</h2>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-[16px] text-muted-foreground">
//                     {product.category}
//                   </span>
//                   <span className="text-[16px] text-muted-foreground">
//                     {product.brand}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className={`${product.salePrice > 0 ? 'line-through' : ''} text-sm font-semibold text-muted-foreground`}>
//                     {product.salePrice > 0 && (
//                       <span className="text-sm font-semibold text-primary">
//                         ${product.salePrice}
//                       </span>
//                     )}
//                   </span>
//                   <span className="text-sm font-semibold text-primary">
//                     ${product.price}
//                   </span>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button className="w-full">Add to cart</Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// // }
// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { MoveRight, ChevronLeft, ChevronRight } from 'lucide-react'; // Import additional icons
// import { categories, brands } from './categories'; // Adjust the path as necessary
// import { fetchAllProducts } from '@/store/shop/products-slice';
// import { useDispatch, useSelector } from 'react-redux';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';

// export default function ShoppingHome() {
//   const dispatch = useDispatch();
//   const { productList, isLoading, error } = useSelector((state) => state.shopProducts);

//   useEffect(() => {
//     dispatch(fetchAllProducts()); // Dispatch the action to fetch all products
//   }, [dispatch]);

//   const images = [
//     {
//       src: 'https://i.pinimg.com/originals/9e/35/4d/9e354d260ab429ed46d0c6d7a9012bda.jpg',
//       alt: 'Beautiful Nature Scene'
//     },
//     {
//       src: 'https://th.bing.com/th/id/OIP.NTpdc8RF2o6V-EAAnMatRAHaJQ?w=768&h=960&rs=1&pid=ImgDetMain',
//       alt: 'Elegant Interior Design'
//     },
//     {
//       src: 'https://i.pinimg.com/originals/07/26/f9/0726f959c8cf05df7afc4ced03d32e85.jpg',
//       alt: 'Serene Mountain View'
//     }
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to go to the previous image
//   const handlePrevClick = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   // Function to go to the next image
//   const handleNextClick = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextClick(); // Automatically change image every 5 seconds
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval); // Clean up on component unmount
//   }, []);

//   return (
//     <div className="w-full h-full min-h-screen">
//       <div className="relative w-full h-[470px] flex flex-row mt-8">
//         <button
//           onClick={handlePrevClick}
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 text-black rounded-full p-2 ml-4 z-10"
//         >
//           <ChevronLeft />
//         </button>
//         <button
//           onClick={handleNextClick}
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 text-black rounded-full p-2 mr-4 z-10"
//         >
//           <ChevronRight />
//         </button>
//         <div className="flex flex-col flex-1 px-5 md:px-8 lg:px-20">
//           <p className="text-5xl w-full max-w-[460px] leading-snug font-normal">
//             We Picked Every Item With Care{' '}
//             <br />
//             <span className="text-7xl font-medium">You Must Try</span>
//             <br />
//             At least Once.
//           </p>
//           <Button className="flex flex-row gap-2 mt-14 w-[320px] h-12">
//             Go to Collection
//             <MoveRight />
//           </Button>
//         </div>
//         <div className="hidden sm:block flex-1 w-full h-full">
//           <img
//             src={images[currentImageIndex].src}
//             alt={images[currentImageIndex].alt}
//             className="w-full h-full object-cover rounded-[50%]"
//           />
//         </div>
//       </div>

//       <div className="px-0 sm:px-8 mt-7">
//         <div className="flex justify-center items-center font-bold text-3xl mb-6">
//           <p>Shop by category</p>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-0 sm:p-4">
//           {categories.map((category) => (
//             <div
//               key={category.name}
//               className="flex flex-col items-center justify-center p-4 border rounded-lg shadow hover:bg-gray-100"
//             >
//               <div className="text-sm sm:text-xl mb-2">{category.icon}</div>
//               <p className="text-sm sm:text-xl font-[5px]">{category.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="px-0 sm:px-8 mt-7">
//         <div className="flex justify-center items-center font-bold text-3xl mb-6">
//           <p>Shop by brands</p>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 p-0 sm:p-4">
//           {brands.map((brand) => (
//             <div
//               key={brand.name}
//               className="flex flex-col items-center justify-center p-4 border rounded-lg shadow hover:bg-gray-100"
//             >
//               <div className="text-sm sm:text-xl mb-2">{brand.icon}</div>
//               <p className="text-sm sm:text-xl font-[5px]">{brand.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="px-0 sm:px-8 mt-7">
//         <div className="flex justify-center items-center font-bold text-3xl mb-6">
//           <p>Our Products</p>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-0 sm:p-4">
//           {productList.map((product) => (
//             <Card
//               key={product._id}
//               className="w-full max-w-sm mx-auto shadow-sm mt-6"
//               onClick={() => handleGetProductDetails(product._id)}
//             >
//               <div className="relative">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-[300px] object-cover rounded-t-lg"
//                 />
//                 {product.salePrice > 0 && (
//                   <Badge className="absolute top-3 left-2 bg-red-500">Sale</Badge>
//                 )}
//               </div>
//               <CardContent className="p-4">
//                 <h2 className="text-xl font-bold mb-2">{product.title}</h2>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-[16px] text-muted-foreground">
//                     {product.category}
//                   </span>
//                   <span className="text-[16px] text-muted-foreground">
//                     {product.brand}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className={`${product.salePrice > 0 ? 'line-through' : ''} text-sm font-semibold text-muted-foreground`}>
//                     {product.salePrice > 0 && (
//                       <span className="text-sm font-semibold text-primary">
//                         ${product.salePrice}
//                       </span>
//                     )}
//                   </span>
//                   <span className="text-sm font-semibold text-primary">
//                     ${product.price}
//                   </span>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button className="w-full">Add to cart</Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MoveRight, ChevronLeft, ChevronRight } from 'lucide-react'; // Import additional icons
import { categories, brands } from './categories'; // Adjust the path as necessary
import { fetchAllProducts } from '@/store/shop/products-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ShoppingHome() {
  const dispatch = useDispatch();
  const { productList, isLoading, error } = useSelector((state) => state.shopProducts);

  useEffect(() => {
    dispatch(fetchAllProducts()); // Dispatch the action to fetch all products
  }, [dispatch]);

  const images = [
    {
      src: 'https://i.pinimg.com/originals/9e/35/4d/9e354d260ab429ed46d0c6d7a9012bda.jpg',
      alt: 'Beautiful Nature Scene'
    },
    {
      src: 'https://th.bing.com/th/id/OIP.NTpdc8RF2o6V-EAAnMatRAHaJQ?w=768&h=960&rs=1&pid=ImgDetMain',
      alt: 'Elegant Interior Design'
    },
    {
      src: 'https://i.pinimg.com/originals/07/26/f9/0726f959c8cf05df7afc4ced03d32e85.jpg',
      alt: 'Serene Mountain View'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the previous image
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Function to go to the next image
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick(); // Automatically change image every 5 seconds
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="w-full h-full min-h-screen">
      <div className="relative w-full h-[470px] flex flex-row mt-8">
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 text-black rounded-full p-2 ml-4 z-10 hidden sm:block"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 text-black rounded-full p-2 mr-4 z-10 hidden sm:block"
        >
          <ChevronRight />
        </button>
        
        <div className="flex flex-col flex-1 px-5 ml-8 md:px-8 lg:px-20">
          <div className='mt-8'>
          <p className="text-5xl w-full max-w-[460px] leading-snug font-normal">
            We Picked Every Item With Care{' '}
            <br />
            <span className="text-7xl font-normal">You Must Try</span>
            <br />
            At least Once.
          </p>
          </div>
          <Button className="flex flex-row gap-2 mt-11 w-[320px] h-12">
            Go to Collection
            <MoveRight />
          </Button>
        </div>
      
        
        <div className="relative flex flex-1 w-full h-full overflow-hidden">
          <div
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentImageIndex === 0 ? 1 : 0 }}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover rounded-[50%]"
            />
          </div>
          <div
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentImageIndex === 1 ? 1 : 0 }}
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover rounded-[50%]"
            />
          </div>
          <div
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentImageIndex === 2 ? 1 : 0 }}
          >
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover rounded-[50%]"
            />
          </div>
        </div>
      </div>

      <div className="px-0 sm:px-8 mt-16 sm:mt-7 ">
        <div className="flex justify-center items-center font-bold text-3xl mb-6">
          <p>Shop by category</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-0 sm:p-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center justify-center p-4 border rounded-lg shadow hover:bg-gray-100"
            >
              <div className="text-sm sm:text-xl mb-2">{category.icon}</div>
              <p className="text-sm sm:text-xl font-[5px]">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-0 sm:px-8 mt-7">
        <div className="flex justify-center items-center font-bold text-3xl mb-6">
          <p>Shop by brands</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 p-0 sm:p-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center p-4 border rounded-lg shadow hover:bg-gray-100"
            >
              <div className="text-sm sm:text-xl mb-2">{brand.icon}</div>
              <p className="text-sm sm:text-xl font-[5px]">{brand.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-0 sm:px-8 mt-7">
        <div className="flex justify-center items-center font-bold text-3xl mb-6">
          <p>Our Products</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-0 sm:p-4">
          {productList.map((product) => (
            <Card
              key={product._id}
              className="w-full max-w-sm mx-auto shadow-sm mt-6"
              onClick={() => handleGetProductDetails(product._id)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[300px] object-cover rounded-t-lg"
                />
                {product.salePrice > 0 && (
                  <Badge className="absolute top-3 left-2 bg-red-500">Sale</Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[16px] text-muted-foreground">
                    {product.category}
                  </span>
                  <span className="text-[16px] text-muted-foreground">
                    {product.brand}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className={`${product.salePrice > 0 ? 'line-through' : ''} text-sm font-semibold text-muted-foreground`}>
                    {product.salePrice > 0 && (
                      <span className="text-sm font-semibold text-primary">
                        ${product.salePrice}
                      </span>
                    )}
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    ${product.price}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
