import React, { useEffect, useState } from 'react';
import AdminDashboardHomeCards from '../../components/Admin/AdminDashboardHomeCards';
import { getOrdersCount, getProductsCount, getUsersCount } from '../../api/api';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react'; // Keep this for fallback spinner, though custom loader will be used

const AdminDashboard = () => {
  const [users, setUsers] = useState(0);
  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const userresponse = await getUsersCount();
      if (userresponse.status === 200) {
        setUsers(userresponse.data.count);
      }
      const productresponse = await getProductsCount();
      if (productresponse.status === 200) {
        setProducts(productresponse.data.count);
      }
      const orderresponse = await getOrdersCount();
      if (orderresponse.status === 200) {
        setOrders(orderresponse.data.count);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
        {/* Custom loader as per your provided CSS */}
        <div className="tablet-loader">
          <div className="tablet">
            <div className="tablet__indicator"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center">
      <AdminDashboardHomeCards products={products} orders={orders} users={users} />
    </div>
  );
};

export default AdminDashboard;
