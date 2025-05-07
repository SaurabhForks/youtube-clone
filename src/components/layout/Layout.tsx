import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../sidebar/SideBar";
import { useAppSelector } from "../../utils/hooks/reduxHook";
const Layout = () => {
  const { sideBarToggle } = useAppSelector((state) => state.appConfig);
  const state = useAppSelector((state) => state.appConfig.sideBarToggle);

  return (
    <div className="layout-container ">
      <Header />
      <div className="side-main-wrap flex justify-between">
        {sideBarToggle && <SideBar />}
        <div
          className={`w-[100%] container transition-all`}
          style={{ marginTop: "80px", marginLeft: `${state ? "20%" : " "}` }}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
