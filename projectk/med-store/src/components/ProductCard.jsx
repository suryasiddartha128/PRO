import { IndianRupee, X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { addOrder } from '../api/api';
import { toast } from 'sonner';

const ProductCard = ({ img, price, name, auth, uid, pid }) => {
    const [showPurchase, setShowPurchase] = useState(false);
    const [productInfo, setProductInfo] = useState({ img, price, name });

    const phoneRef = useRef('');
    const addressRef = useRef('');

    const handleBuy = async (e) => {
        e.preventDefault();
        const order = {
            uid,
            pid,
            total: price,
            phone: phoneRef.current.value,
            address: addressRef.current.value,
        };

        try {
            const response = await addOrder(order);
            if (response.status === 200) {
                toast.success('Order Placed');
                setShowPurchase(false);
            }
        } catch (error) {
            toast.error('Error while placing order');
            console.log(error);
        }
    };

    const openPurchaseModal = () => {
        setProductInfo({ img, price, name });
        setShowPurchase(true);
    };

    return (
        <>
            {/* Product Card */}
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-full h-[400px] bg-opacity-70 backdrop-blur-md transition-all duration-300 ease-in-out">
                {/* Image Section with Zoom Effect */}
                <div className="relative mx-auto -mt-6 h-[300px] w-[300px] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg flex justify-center items-center">
                    <img
                        src={img}
                        alt={name}
                        className="h-full w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                    />
                </div>

                {/* Text and Price Section */}
                <div className="p-6">
                    <div className="flex justify-between items-center">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {name}
                        </h5>
                        <p className="font-sans text-xl font-bold flex items-center">
                            <IndianRupee className="h-5 w-6" /> {price}
                        </p>
                    </div>
                </div>

                {/* Purchase Button */}
                {auth && (
                    <div className="p-6 pt-0 w-full">
                        <button
                            type="button"
                            className="w-full rounded-lg bg-blue-500 py-3 px-6 text-center text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85]"
                            onClick={openPurchaseModal}
                        >
                            Buy Now
                        </button>
                    </div>
                )}
            </div>

            {/* Purchase Modal */}
            {showPurchase && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="w-[90%] max-w-[400px] bg-white rounded-md shadow-2xl p-6 flex flex-col items-center min-h-[300px] max-h-[80vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="w-full flex justify-between items-center mb-4">
                            <h1 className="text-xl font-bold text-blue-500">
                                Complete Purchase for {productInfo.name}
                            </h1>
                            <div
                                className="text-red-500 cursor-pointer"
                                onClick={() => setShowPurchase(false)}
                            >
                                <X className="h-8 w-8 border-2 p-1 border-red-500 rounded-full hover:bg-red-500 hover:text-white" />
                            </div>
                        </div>

                        {/* Purchase Form */}
                        <form className="w-full flex flex-col gap-4" onSubmit={handleBuy}>
                            <input
                                ref={phoneRef}
                                type="number"
                                name="phone"
                                id="phone"
                                placeholder="Phone"
                                className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-blue-400 rounded-sm"
                                required
                            />
                            <textarea
                                ref={addressRef}
                                name="address"
                                id="address"
                                className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-blue-400 rounded-sm"
                                rows="4"
                                placeholder="Shipping Address"
                                required
                            />
                            <p className="text-lg font-semibold">
                                Total: <IndianRupee className="inline-block" /> {productInfo.price}
                            </p>
                            <button
                                type="submit"
                                className="w-full h-[3rem] bg-blue-500 text-white rounded-sm shadow-lg hover:shadow-blue-400 transition-all"
                            >
                                Complete Purchase
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductCard;
