import { LogOut, Menu } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { logoutUser } from '@/store/auth-slice'
import { useDispatch } from 'react-redux'
import { resetOrders } from '@/store/shop/order-slice'

export default function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    // Optionally, handle redirection or UI updates after dispatch
    dispatch(resetOrders());
  };

  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background border-bottom '>
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <Menu />
        <span className='sr-only'>Toggle Menu</span>
      </Button>
      <div className='flex flex-1 justify-end'>
        <Button
          onClick={handleLogout} // Call the logout thunk here
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  )
}