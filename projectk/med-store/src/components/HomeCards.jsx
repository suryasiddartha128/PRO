import React, { useState } from 'react';
import { ChevronDown, ClipboardPlus, Pill, TestTubes, HeartPulse } from 'lucide-react';

const HomeCards = () => {
    // State to track which FAQ is expanded
    const [expandedFAQ, setExpandedFAQ] = useState(null);

    // Function to handle expanding/collapsing of FAQ
    const toggleFAQ = (index) => {
        if (expandedFAQ === index) {
            setExpandedFAQ(null); // Collapse if already open
        } else {
            setExpandedFAQ(index); // Expand the clicked FAQ
        }
    };

    return (
        <div>
            {/* Home Cards */}
            <div className="w-full h-full grid grid-cols-2 gap-6 justify-items-center mt-10">
                {/* Card 1 */}
                <div className="relative h-[6rem] w-[90%] rounded-md overflow-hidden group shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <img
                        src="https://images5.alphacoders.com/135/1351189.png"
                        alt="Buy Medicines"
                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-300">
                        <Pill className="h-8 w-8 mr-3 text-white" />
                        <h1 className="font-Poppins text-white text-2xl font-bold">Buy Medicines</h1>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative h-[6rem] w-[90%] rounded-md overflow-hidden group shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <img
                        src="https://www.shutterstock.com/image-photo/couple-attend-fertility-consultation-gynecologist-260nw-2376184509.jpg"
                        alt="Doctor Appointments"
                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-300">
                        <ClipboardPlus className="h-8 w-8 mr-3 text-white" />
                        <h1 className="font-Poppins text-white text-2xl font-bold">Doctor Appointments</h1>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative h-[6rem] w-[90%] rounded-md overflow-hidden group shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <img
                        src="https://maconcommunityhospital.com/wp-content/uploads/2022/09/lab.jpg"
                        alt="Lab Tests"
                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-300">
                        <TestTubes className="h-8 w-8 mr-3 text-white" />
                        <h1 className="font-Poppins text-white text-2xl font-bold">Lab Tests</h1>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="relative h-[6rem] w-[90%] rounded-md overflow-hidden group shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <img
                        src="https://t4.ftcdn.net/jpg/09/53/68/63/360_F_953686371_4bu1nQ7Kwu6ZLw4bryUUlahQJwd8j4TA.jpg"
                        alt="Health Insurance"
                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-300">
                        <HeartPulse className="h-8 w-8 mr-3 text-white" />
                        <h1 className="font-Poppins text-white text-2xl font-bold">Health Insurance</h1>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="w-full max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {/* FAQ 1 */}
                    <div 
                        className="bg-white shadow-md p-4 rounded-lg cursor-pointer"
                        onClick={() => toggleFAQ(1)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">How to order medicines online?</h3>
                            <ChevronDown 
                                className={`h-6 w-6 transform transition-transform duration-300 ${expandedFAQ === 1 ? 'rotate-180' : ''}`} 
                            />
                        </div>
                        {expandedFAQ === 1 && (
                            <p className="text-gray-600 mt-2">Ordering medicines from online medical store is quick and hassle-free. If you wish to purchase over-the-counter medicines or FMCG products, all you need to do is click on the ‘Buy Medicines’ section on the app/website and type the name of the product you wish to buy in the search box. Once you select the product,proceed to make the payment. Once your order has been confirmed, we will start prepping your order for home delivery. </p>
                        )}
                    </div>

                    {/* FAQ 2 */}
                    <div 
                        className="bg-white shadow-md p-4 rounded-lg cursor-pointer"
                        onClick={() => toggleFAQ(2)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">Is online medicine delivery safe?</h3>
                            <ChevronDown 
                                className={`h-6 w-6 transform transition-transform duration-300 ${expandedFAQ === 2 ? 'rotate-180' : ''}`} 
                            />
                        </div>
                        {expandedFAQ === 2 && (
                            <p className="text-gray-600 mt-2">Absolutely! All the medicines/products sold through our platform are inspected thoroughly for their authenticity and quality. Also, while delivering the medicines, our team follows strict safety protocols to ensure only the top-notch products get delivered to you.</p>
                        )}
                    </div>

                    {/* FAQ 3 */}
                    <div 
                        className="bg-white shadow-md p-4 rounded-lg cursor-pointer"
                        onClick={() => toggleFAQ(3)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">How do I know if there is a delay in delivery?</h3>
                            <ChevronDown 
                                className={`h-6 w-6 transform transition-transform duration-300 ${expandedFAQ === 3 ? 'rotate-180' : ''}`} 
                            />
                        </div>
                        {expandedFAQ === 3 && (
                            <p className="text-gray-600 mt-2">If, for any reason, your order is delayed, our team will contact you either through SMS, call or email and inform you of the same. You can also check the status of your order on the app/website by clicking on the ‘Order Status’ button.</p>
                        )}
                    </div>

                    {/* FAQ 4 */}
                    <div 
                        className="bg-white shadow-md p-4 rounded-lg cursor-pointer"
                        onClick={() => toggleFAQ(4)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">Can Medical Store provide express delivery?</h3>
                            <ChevronDown 
                                className={`h-6 w-6 transform transition-transform duration-300 ${expandedFAQ === 4 ? 'rotate-180' : ''}`} 
                            />
                        </div>
                        {expandedFAQ === 4 && (
                            <p className="text-gray-600 mt-2">Yes, depending on the city you reside in. In select cities, orders are delivered in as less as 1 hour. Please note that the express deliveries may be based on various other factors such as medicine availability, availability of the staff, etc.</p>
                        )}
                    </div>

                    {/* FAQ 5 */}
                    <div 
                        className="bg-white shadow-md p-4 rounded-lg cursor-pointer"
                        onClick={() => toggleFAQ(5)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">Is there a subscription plan?</h3>
                            <ChevronDown 
                                className={`h-6 w-6 transform transition-transform duration-300 ${expandedFAQ === 5 ? 'rotate-180' : ''}`} 
                            />
                        </div>
                        {expandedFAQ === 5 && (
                            <p className="text-gray-600 mt-2">Currently, we do not offer subscription plans. All services are pay-as-you-go.</p>
                        )}
                    </div>

                    {/* FAQ 6 */}
                    <div 
                        className="bg-white shadow-md p-4 rounded-lg cursor-pointer"
                        onClick={() => toggleFAQ(6)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">How do I track my order?</h3>
                            <ChevronDown 
                                className={`h-6 w-6 transform transition-transform duration-300 ${expandedFAQ === 6 ? 'rotate-180' : ''}`} 
                            />
                        </div>
                        {expandedFAQ === 6 && (
                            <p className="text-gray-600 mt-2">You can track your order through the "My Orders" section of your account.</p>
                        )}
                    </div>

                    {/* FAQ 7 */}
                    <div 
                        className="bg-white shadow-md p-4 rounded-lg cursor-pointer"
                        onClick={() => toggleFAQ(7)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">Do you ship internationally?</h3>
                            <ChevronDown 
                                className={`h-6 w-6 transform transition-transform duration-300 ${expandedFAQ === 7 ? 'rotate-180' : ''}`} 
                            />
                        </div>
                        {expandedFAQ === 7 && (
                            <p className="text-gray-600 mt-2">Yes, we offer international shipping. Please check our shipping policy for more details.</p>
                        )}
                    </div>

                    {/* FAQ 8 */}
                    <div 
                        className="bg-white shadow-md p-4 rounded-lg cursor-pointer"
                        onClick={() => toggleFAQ(8)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">What if I received a damaged product?</h3>
                            <ChevronDown 
                                className={`h-6 w-6 transform transition-transform duration-300 ${expandedFAQ === 8 ? 'rotate-180' : ''}`} 
                            />
                        </div>
                        {expandedFAQ === 8 && (
                            <p className="text-gray-600 mt-2">If you receive a damaged product, please contact us within 7 days, and we'll initiate a return or replacement.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCards;
