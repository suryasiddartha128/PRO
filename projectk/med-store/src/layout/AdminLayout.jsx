import { Outlet, useNavigate } from "react-router-dom";
import AdminTopBar from "../components/Admin/AdminTopBar";
import { useEffect, useState } from "react";
import { getRole, isLoginValid } from "../service/auth";
import AdminLeftBar from "../components/Admin/AdminLeftBar"; // We'll keep the component for bottom buttons

const AdminLayout = () => {
  const Navigate = useNavigate();
  const [renderAdmin, setRenderAdmin] = useState(false);
  const role = getRole();

  const checkNavigation = () => {
    if (!isLoginValid || role !== "ADMIN") {
      Navigate('/');
    } else {
      setRenderAdmin(true);
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [Navigate]);

  return (
    <>
      {
        renderAdmin ? (
          <div
            className="w-screen h-screen flex flex-col justify-between overflow-hidden"
            style={{
              backdropFilter: "blur(7px)", // Apply blur effect without changing color
            }}
          >
            {/* Top Bar */}
            <div className="h-[3rem] w-full flex justify-center items-center">
              <AdminTopBar />
            </div>

            {/* Main Content */}
            <div className="w-full h-full flex justify-start items-start p-3 overflow-y-auto overflow-x-hidden">
              <Outlet />
            </div>

            {/* Floating Bottom Bar for buttons */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[70%] bg-gradient-to-t from-blue-500 to-green-300 text-white p-3 flex justify-around items-center rounded-lg shadow-lg h-[70px]">
              <AdminLeftBar bottomButtons={true} />
            </div>
          </div>
        ) : (
          <div className="w-screen h-screen flex flex-row justify-center items-center overflow-hidden">
            {/* Loader based on the CSS you provided */}
            <div className="tablet-loader">
              <div className="tablet">
                <div className="tablet__indicator"></div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default AdminLayout;
