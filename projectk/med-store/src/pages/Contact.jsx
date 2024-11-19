import React from 'react';
import { Mail, Phone, Pin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="relative w-screen min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://pn-software.me/wp-content/uploads/2024/06/support_1280.jpg')",
      }}
    >
      {/* Overlay for background image */}
      <div className="absolute inset-0 bg-black/50"></div> {/* Semi-transparent overlay */}

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl text-white font-extrabold text-center tracking-wide mb-8 mt-12 animate__animated animate__fadeInUp animate__delay-0.2s">
          Contact Us
        </h1>

        {/* Contact Form and Info Cards */}
        <div className="w-full max-w-6xl h-auto bg-white/90 rounded-3xl shadow-xl p-10 flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 backdrop-blur-lg animate__animated animate__fadeInUp animate__delay-0.5s">

          {/* Left Section: Contact Info Cards */}
          <div className="w-full md:w-1/2 flex flex-col gap-8 items-center">
            {/* Corporate Details Title */}
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">
              Corporate Details
            </h2>

            <div className="bg-blue-600 p-6 rounded-xl shadow-lg text-center w-full max-w-md">
              <Mail className="h-12 w-12 mx-auto text-white mb-4" />
              <h2 className="text-2xl font-semibold">medistore@gamil.com</h2>
            </div>
            <div className="bg-blue-600 p-6 rounded-xl shadow-lg text-center w-full max-w-md">
              <Phone className="h-12 w-12 mx-auto text-white mb-4" />
              <h2 className="text-2xl font-semibold">9491915788</h2>
            </div>
            <div className="bg-blue-600 p-6 rounded-xl shadow-lg text-center w-full max-w-md">
              <Pin className="h-12 w-12 mx-auto text-white mb-4" />
              <h2 className="text-2xl font-semibold">
                24/7 Help Line
                <br />1800-5632-2145
              </h2>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="w-full md:w-1/2 flex flex-col gap-8 items-center">
            <h2 className="text-3xl font-bold text-blue-800">Get in Touch</h2>
            <form className="w-full max-w-lg flex flex-col gap-6 mb-12"> {/* Added margin-bottom here */}
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 bg-transparent border-b-2 border-blue-600 text-black rounded-lg focus:outline-none transition-transform focus:scale-105"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-4 bg-transparent border-b-2 border-blue-600 text-black rounded-lg focus:outline-none transition-transform focus:scale-105"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="p-4 bg-transparent border-b-2 border-blue-600 text-black rounded-lg focus:outline-none transition-transform focus:scale-105"
              />
              <textarea
                placeholder="Your Message"
                className="p-4 bg-transparent border-b-2 border-blue-600 text-black rounded-lg focus:outline-none transition-transform focus:scale-105"
                rows="5"
              />
              <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-bold transition-all hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* New Section with Stats */}
        <div className="w-full text-white py-16 flex flex-col items-center mt-12">
          <h2 className="text-4xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-0.3s">
            INDIA'S LARGEST HEALTHCARE PLATFORM
          </h2>
          <div className="flex flex-wrap justify-center gap-16">
            <div className="flex flex-col items-center bg-blue-600 p-6 rounded-xl shadow-xl hover:bg-blue-500 transition-all transform hover:scale-105 w-64 h-48 justify-center">
              <div className="text-5xl mb-4">
                <i className="fas fa-users"></i> {/* Example Icon */}
              </div>
              <h3 className="text-3xl font-semibold">260m+</h3>
              <p className="text-lg">Visitors</p>
            </div>
            <div className="flex flex-col items-center bg-blue-600 p-6 rounded-xl shadow-xl hover:bg-blue-500 transition-all transform hover:scale-105 w-64 h-48 justify-center">
              <div className="text-5xl mb-4">
                <i className="fas fa-box"></i> {/* Example Icon */}
              </div>
              <h3 className="text-3xl font-semibold">31m+</h3>
              <p className="text-lg">Orders Delivered</p>
            </div>
            <div className="flex flex-col items-center bg-blue-600 p-6 rounded-xl shadow-xl hover:bg-blue-500 transition-all transform hover:scale-105 w-64 h-48 justify-center">
              <div className="text-5xl mb-4">
                <i className="fas fa-map-marker-alt"></i> {/* Example Icon */}
              </div>
              <h3 className="text-3xl font-semibold">1800+</h3>
              <p className="text-lg">Cities</p>
            </div>
          </div>
          <div className="text-lg mt-8 animate__animated animate__fadeIn animate__delay-0.6s">
            <p>With cutting-edge services and support, we continue to revolutionize healthcare across India.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
