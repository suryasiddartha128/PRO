import React, { useEffect, useState } from 'react';
import AdminPageHeader from '../../components/Admin/AdminPageHeader';
import { Loader2, Pencil, Trash, TriangleAlert } from 'lucide-react';
import { deleteOrder, getOrders } from '../../api/api';
import { toast } from 'sonner';

const AdminOrders = () => {
    const [orders, setOrders] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await getOrders();
            if (res.status === 200) {
                setOrders(res.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await deleteOrder(id);
            if (response.status === 200) {
                toast.success('Order Deleted');
                fetchData();
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                {/* Custom loader as per your CSS */}
                <div className="tablet-loader">
                    <div className="tablet">
                        <div className="tablet__indicator"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!orders || orders.length === 0) {
        return (
            <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                <TriangleAlert className='text-orange-400 h-12 w-12' />
                <p>No Orders Available!</p>
            </div>
        );
    }

    return (
        <div className='w-full flex flex-col justify-start items-start'>
            <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border'>
                <AdminPageHeader title='Orders' />
            </div>
            <div className="overflow-x-auto w-full max-h-[60vh]"> {/* Limit height and add horizontal scrolling */}
                <table className='w-full table-auto border-collapse border shadow-lg rounded-md'>
                    <thead className='shadow-md font-bold text-blue-500 text-left rounded-md'>
                        <tr>
                            <th className='p-3'>UID</th>
                            <th className='p-3'>PID</th>
                            <th className='p-3'>Phone</th>
                            <th className='p-3'>Total</th>
                            <th className='p-3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='overflow-y-auto'>
                        {orders.map((order, index) => (
                            <tr key={index} className="border-b">
                                <td className='p-3'>{order.uid}</td>
                                <td className='p-3'>{order.pid}</td>
                                <td className='p-3'>{order.phone}</td>
                                <td className='p-3'>{order.total}</td>
                                <td className='p-3 flex h-full w-full flex-row justify-start items-center gap-4'>
                                    <button
                                        className='h-10 w-10 border-red-500 border-2 p-2 rounded-md text-red-500 shadow-md hover:bg-red-500 hover:text-white hover:shadow-red-500'
                                        onClick={() => { handleDelete(order._id); }}
                                    >
                                        <Trash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminOrders;
