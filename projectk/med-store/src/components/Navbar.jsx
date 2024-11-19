import { NavLink, useNavigate } from "react-router-dom";
import { Cross, User, X } from "lucide-react"; // Import the required icons
import { useRef, useState } from "react";
import { Login, Register } from "../api/api";
import { getRole, storeToken } from "../service/auth";
import { toast } from "sonner";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const phoneRef = useRef("");
  const navigate = useNavigate();

  const Linksdata = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: " Buy Medicines",
      path: "/products",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const response = await Login(credentials);
      if (response.status === 200) {
        const token = response.data.token;
        toast.success("Login Success");
        setShowLogin(false);
        storeToken(token);
        const role = getRole();
        if (role === "ADMIN") {
          navigate("/admin/dashboard");
        } else if (role === "USER") {
          navigate("/products");
        }
      } else {
        console.log("Login Error", response.data);
      }
    } catch (error) {
      if (error.response?.status === 401 || error.response?.status === 400) {
        toast.warning(error.response.data.message);
      } else {
        toast.error("Server Error");
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const credentials = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const response = await Register(credentials);
      if (response.status === 200) {
        toast.success("Signup Success");
        setShowRegister(false);
        setShowLogin(true);
      } else {
        toast.error("Error while signup");
      }
    } catch (error) {
      if (error.response?.status === 409 || error.response?.status === 400) {
        toast.warning(error.response.data.message);
      } else {
        toast.error("Server Error");
      }
    }
  };

  const switchAuth = () => {
    setShowLogin(!showLogin);
    setShowRegister(!showRegister);
  };

  return (
    <>
      <div className="w-screen h-14 shadow-blue-500 shadow-md flex items-center px-4">
  <div className="flex-0 w-auto font-bold text-2xl text-blue-700">
    Medical Store
  </div>
  <div className="flex-1 flex justify-center items-center"> {/* Center the links container */}
    <div className="flex gap-8 font-bold">
      {Linksdata.map((link, index) => (
        <NavLink
          to={link.path}
          key={index}
          className={({ isActive }) =>
            `relative h-[65%] w-max flex justify-center items-center rounded-sm transition-colors duration-300 ${
              isActive
                ? "text-blue-700 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-700"
                : "hover:text-blue-700 hover:font-semibold hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-blue-700"
            }`
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  </div>
  <button
  className="h-12 w-28 flex justify-center items-center border-2 border-blue-500 hover:border-black hover:text-blue-500 ml-4 shadow-md bg-white/40 backdrop-blur-sm rounded-lg"
  onClick={() => setShowLogin(!showLogin)}
>
  <span className="text-blue-700 font-semibold">Login</span>
  <User className="h-6 w-6 text-blue-700 ml-1" />
</button>

</div>


      {/* Login Modal with Background Image */}
      {showLogin && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 backdrop-blur-md">
          <div
            className="h-[45%] w-1/3 bg-white shadow-2xl rounded-3xl flex flex-col justify-center items-center"
            style={{
              backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/015/649/139/non_2x/abstract-fingerprint-scanning-encryption-to-login-cyber-security-icons-on-blue-background-modern-futuristic-vector.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative h-[20%] w-[90%] flex justify-between items-center">
              <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold text-blue-700">
                Login
              </h1>
              <X
                className="h-8 w-8 p-1 border-2 border-red-500 rounded-full text-red-500 cursor-pointer hover:bg-red-500 hover:text-white"
                onClick={() => setShowLogin(false)}
              />
            </div>
            <form
              className="h-[70%] w-[80%] flex flex-col gap-4"
              onSubmit={handleLogin}
            >
              <div className="relative w-full">
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 border-b-2 focus:border-blue-500 rounded-3xl outline-none shadow-sm backdrop-blur-sm bg-white/40"
                  required
                />
              </div>
              <div className="relative w-full">
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  className="w-full p-4 border-b-2 focus:border-blue-500 rounded-3xl outline-none shadow-sm backdrop-blur-sm bg-white/40"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full h-10 bg-blue-700 text-white rounded-3xl shadow-md hover:shadow-blue-400"
              >
                Login
              </button>
            </form>
            <p
              className="text-blue-700 cursor-pointer hover:text-blue-800 font-semibold"
              onClick={switchAuth}
            >
              Register?
            </p>
          </div>
        </div>
      )}

      {/* Register Modal with Background Image */}
      {showRegister && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 backdrop-blur-md">
          <div
            className="h-[65%] w-1/3 bg-white shadow-2xl rounded-3xl flex flex-col justify-center items-center"
            style={{
              backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/015/649/139/non_2x/abstract-fingerprint-scanning-encryption-to-login-cyber-security-icons-on-blue-background-modern-futuristic-vector.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative h-[20%] w-[90%] flex justify-between items-center">
              <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold text-blue-700">
                Register
              </h1>
              <X
                className="h-8 w-8 p-1 border-2 border-red-500 rounded-full text-red-500 cursor-pointer hover:bg-red-500 hover:text-white"
                onClick={() => setShowRegister(false)}
              />
            </div>
            <form
              className="h-[70%] w-[80%] flex flex-col gap-4"
              onSubmit={handleRegister}
            >
              <div className="relative w-full">
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 border-b-2 focus:border-blue-500 rounded-3xl outline-none shadow-sm backdrop-blur-sm bg-white/40"
                  required
                />
              </div>
              <div className="relative w-full">
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 border-b-2 focus:border-blue-500 rounded-3xl outline-none shadow-sm backdrop-blur-sm bg-white/40"
                  required
                />
              </div>
              <div className="relative w-full">
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  className="w-full p-4 border-b-2 focus:border-blue-500 rounded-3xl outline-none shadow-sm backdrop-blur-sm bg-white/40"
                  required
                />
              </div>
              <div className="relative w-full">
                <input
                  ref={phoneRef}
                  type="number"
                  placeholder="Phone"
                  className="w-full p-4 border-b-2 focus:border-blue-500 rounded-3xl outline-none shadow-sm backdrop-blur-sm bg-white/40"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full h-10 bg-blue-700 text-white rounded-3xl shadow-md hover:shadow-blue-400"
              >
                Register
              </button>
            </form>
            <p
              className="text-blue-700 cursor-pointer hover:text-blue-800 font-semibold"
              onClick={switchAuth}
            >
              Login?
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
