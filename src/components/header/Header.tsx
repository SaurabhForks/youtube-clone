import { FaHamburger, FaYoutube, FaUserCircle } from "react-icons/fa";
import "./Header.scss";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHook";
import { toggleSidebar } from "../../redux/slices/appConfigSlice";
import Search from "./Search";
import { Link } from "react-router";

const Header = () => {
  const dispatch = useAppDispatch();
  const { sideBarToggle } = useAppSelector((state) => state.appConfig);
  const handleSideToggel = () => {
    dispatch(toggleSidebar(!sideBarToggle));
  };
  return (
    <div className="header-warp py-2 fixed top-0 w-[100%] bg-black">
      <div className=" flex justify-between items-center container">
        <div className="logo-wrap flex items-center  w-[20%]">
          <FaHamburger
            className="cursor-pointer"
            color="#fff"
            onClick={handleSideToggel}
          />
          <Link
            to="/"
            className="logo flex align-center text-white items-center pl-1"
          >
            <FaYoutube color="red" size={"50px"} />
            <span className="font-bold text-2xl pl-1">YouTube</span>
          </Link>
        </div>
        <Search />

        <div className="user w-[10%] flex justify-end">
          <FaUserCircle color="#fff" size={"40px"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
