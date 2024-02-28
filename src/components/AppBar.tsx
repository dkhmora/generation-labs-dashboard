import logo from "../assets/logo.svg";
import MobileNavigationDrawer from "./MobileNavigationDrawer";
import ProfileCircleImage from "../assets/profile_circle.svg";

export default function AppBar() {
  return (
    <header>
      <div className="flex items-center w-full px-6 bg-white shadow-md justify-between md:py-4 md:px-16 md:shadow-none lg:px-32">
        <div className="flex justify-start md:hidden">
          <MobileNavigationDrawer />
        </div>

        <div className="flex justify-center flex-grow md:justify-start">
          <img src={logo} alt="logo" className="h-auto w-auto max-h-10" />
        </div>

        <div className="flex justify-end w-8"></div>

        <img
          src={ProfileCircleImage}
          alt="logo"
          className="h-auto w-auto max-h-10"
        />
      </div>
    </header>
  );
}
