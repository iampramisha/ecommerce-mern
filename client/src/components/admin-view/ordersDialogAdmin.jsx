import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'; // Import select components

const OrdersDialogAdmin = ({ open, onClose, order, onUpdateOrder }) => {
  const [status, setStatus] = useState(order?.status || ''); // State to track the status

  const handleStatusChange = (value) => {
    setStatus(value); // Update local state with the selected status
  };

  const handleSubmit = () => {
    onUpdateOrder({ ...order, status }); // Call the update function with the new status
    onClose(); // Close the dialog
  };

  if (!order) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="flex justify-center items-center">
          <DialogTitle>Order Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Displaying order details */}
          <div className="flex justify-between">
            <p className="font-semibold">Order ID:</p>
            <p>{order.id}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Order Date:</p>
            <p>{order.date}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-semibold">Payment Method:</p>
            <p>{order.paymentMethod}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Price:</p>
            <p>{order.price}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <p>Product One</p>
            <p>$1150</p>
          </div>
          <div className='pb-4'>
            <p className='font-medium text-md'>Shipping Info</p>
            <p>John Doe</p>  
                      <p>Address</p>
            <p>City</p>
            <p>PinCode</p>
            <p>Phone</p>
            <p>notes</p>

          </div>
          <div className="flex flex-col mt-2 ">
            <p className="font-semibold ">Status:</p>
            {/* Admin can change order status here */}
            <Select onValueChange={handleStatusChange} value={status}>
              <SelectTrigger className="w-full max-w-xs mt-3">
                <SelectValue placeholder="Order Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="inProcess">In Process</SelectItem>
                <SelectItem value="inShipping">In Shipping</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 flex ">
          <Button className="w-full" onClick={handleSubmit}>
            Update Status
          </Button>
      
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrdersDialogAdmin;
