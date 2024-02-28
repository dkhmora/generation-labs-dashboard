import logo from "../assets/logo.svg";
import MobileNavigationDrawer from "./MobileNavigationDrawer";

export default function AppBar() {
  return (
    <header>
      <div className="flex items-center w-full px-6 bg-white shadow-md justify-between">
        <div className="flex justify-start">
          <MobileNavigationDrawer />
        </div>

        <div className="flex justify-center flex-grow">
          <img src={logo} alt="logo" className="h-auto w-auto max-h-10" />
        </div>

        <div className="flex justify-end w-8"></div>
      </div>
    </header>
  );
}
