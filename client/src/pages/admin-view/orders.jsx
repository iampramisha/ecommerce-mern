import React, { useState } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';


import { Card , CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import OrdersDialogAdmin from '@/components/admin-view/OrdersDialogAdmin';

function AdminOrders() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Sample order data
  const orders = [
    { id: 'INV001', date: '2023-09-21', status: 'Paid', paymentMethod: 'Credit Card', price: '$250.00' },
    { id: 'INV002', date: '2023-09-22', status: 'Pending', paymentMethod: 'PayPal', price: '$180.00' },
    // Add more orders as needed...
  ];

  // Function to handle row click and open dialog with selected order
  const handleRowClick = (order) => {
    setSelectedOrder(order);
    setOpenDialog(true);
  };

  // Function to close the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedOrder(null);  // Clear selected order when dialog is closed
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your recent orders.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Order Id</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Order Status</TableHead>
                <TableHead>Order Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell>
                    <Button onClick={(e) => { e.stopPropagation(); handleRowClick(order); }}>
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pass selectedOrder and state control to the dialog component */}
      <OrdersDialogAdmin
        open={openDialog}
        onClose={handleCloseDialog}
        order={selectedOrder}
      />
    </div>
  );
}

export default AdminOrders;
