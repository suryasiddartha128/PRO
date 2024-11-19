import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const AdminLeftBar = ({ bottomButtons }) => {
  const Navigate = useNavigate();
  const location = useLocation();
  const [underlineStyle, setUnderlineStyle] = useState({});
  const underlineRef = useRef(null);

  const Linksdata = [
    { title: 'Dashboard', path: '/admin/dashboard' },
    { title: 'Medecines', path: '/admin/products' },
    { title: 'Orders', path: '/admin/orders' },
    { title: 'Users', path: '/admin/users' },
    { title: 'Settings', path: '/admin/settings' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    Navigate('/');
  };

  // Update the underline position whenever the route changes
  useEffect(() => {
    const activeLink = document.querySelector('.nav-link-active');
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [location]);

  return (
    <div className={`flex ${bottomButtons ? "flex-row justify-between" : "flex-col"} space-x-4 w-full relative`}>
      {/* Underline Indicator */}
      <div
        ref={underlineRef}
        className="absolute bottom-0 h-1 bg-white transition-all duration-300 ease-in-out"
        style={underlineStyle}
      ></div>

      {Linksdata.map((link, index) => (
        <div key={index} className="flex-1 mx-2">
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `block px-6 py-3 h-full rounded-lg text-lg font-medium transition-all duration-300 ease-in-out relative overflow-hidden group w-full flex items-center justify-center ${
                isActive ? 'text-blue-600 font-bold nav-link-active' : 'text-white hover:text-blue-600'
              }`
            }
          >
            {link.title}
          </NavLink>
        </div>
      ))}

      {/* Logout Button */}
      <div className="flex items-center justify-center mx-2 mt-1">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center p-2 rounded-lg bg-red-600 text-white hover:bg-red-500 transition-all duration-300 ease-in-out hover:scale-105 shadow-lg"
          style={{ width: '50px', height: '50px' }}
        >
          <LogOut size={24} />
        </button>
      </div>
    </div>
  );
};

export default AdminLeftBar;
