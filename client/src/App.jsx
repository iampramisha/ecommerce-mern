import React from 'react'
import AuthLayout from './components/auth/layout'
import AuthRegister from './pages/auth/register'
import AuthLogin from './pages/auth/login'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminFeatures from './pages/admin-view/features'
import AdminOrders from './pages/admin-view/orders'
import AdminProducts from './pages/admin-view/products'
import AdminLayout from './components/admin-view/layout'
import NotFound from './pages/not-found'
import ShoppingLayout from './components/shopping-view/layout'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingAccount from './pages/shopping-view/account'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingListing from './pages/shopping-view/listing'
import CheckAuth from './components/common/check-auth'
import UnauthPage from './pages/unauth'


export default function App() {
  const isAuthenticated=false;
  const user={
    name:"Pramisha",
    role:"user",
  }
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>header</h1>
      <Routes>
        {/* Authentication routes */}
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={
      
          <CheckAuth isAuthenticated={isAuthenticated} user={user} >      <AuthLogin /></CheckAuth>
          }
             />
          <Route path='register' element={<AuthRegister />} />
        </Route>
        
        {/* Admin routes */}
        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user} >      <AdminLayout/></CheckAuth>
    
          
          }>
          <Route path='dashboard' element={<AdminDashboard/>} />
          <Route path='feature' element={<AdminFeatures/>} />
          <Route path='orders' element={<AdminOrders/>} />
          <Route path='products' element={<AdminProducts/>} />
        </Route>
        <Route path='/shop' element={
          <CheckAuth  isAuthenticated={isAuthenticated} user={user}>

            
          <ShoppingLayout/>
          </CheckAuth>
        }>
          
       <Route path='home' element={<ShoppingHome/>}/>
       <Route path='listing' element={<ShoppingListing/>}/>
       <Route path='account' element={<ShoppingAccount/>}/>
       <Route path='checkout' element={<ShoppingCheckout/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/unauth-page' element={<UnauthPage/>}></Route>
      </Routes>
    </div>
  )
}
