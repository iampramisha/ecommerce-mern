// UserOrderDetailsDialog.jsx
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const UserOrderDetailsDialog = ({ open, onClose, order }) => {
  if (!order) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader className="flex justify-center items-center">
        <DialogTitle>Order Details</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        {/* Each row with label on the left and value on the right */}
        <div className="flex justify-between">
          <p className="font-semibold">Order ID:</p>
          <p>{order.id}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Order Date:</p>
          <p>{order.date}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Status:</p>
          <p>{order.status}</p>
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
</div>
    </DialogContent>
  </Dialog>
  );
};

export default UserOrderDetailsDialog;
