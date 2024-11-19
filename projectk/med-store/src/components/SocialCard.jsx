import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';
import React from 'react';

const SocialCard = () => {
    return (
        <>
            {/* Thinner Horizontal Line with More Gap on Both Sides */}
            <div className="w-full px-24">
                <hr className="my-20 mb-0 mt-0 border-t-2 border-blue-400 w-full" /> {/* Adjusted margins on hr */}
            </div>

            {/* Text "Find us on" - Positioned above the social media buttons */}
            <div className="w-full flex flex-row justify-center items-center mb-2 pr-24 mt-4"> {/* Added margin-top to create gap */}
                <p className="text-xl text-gray-800 font-semibold">Find us on</p>
            </div>

            {/* Social Media Buttons */}
            <div className="w-full flex justify-center items-center mt-4 mb-6 space-x-4 pr-24"> {/* Adjusted margin-top and margin-bottom */}
                {/* Circle Containers for each logo */}
                <button title="Instagram" className="relative flex justify-center items-center text-gray-400 p-2.5 rounded-full bg-black">
                    <Instagram className="w-6 h-6 text-white" />
                </button>
                <button title="Facebook" className="relative flex justify-center items-center text-gray-400 p-2.5 rounded-full bg-black">
                    <Facebook className="w-6 h-6 text-white" />
                </button>

                <button title="Twitter" className="relative flex justify-center items-center text-gray-400 p-2.5 rounded-full bg-black">
                    <Twitter className="w-6 h-6 text-white" />
                </button>

                <button title="Email" className="relative flex justify-center items-center text-gray-400 p-2.5 rounded-full bg-black">
                    <Mail className="w-6 h-6 text-white" />
                </button>
            </div>
        </>
    );
}

export default SocialCard;
