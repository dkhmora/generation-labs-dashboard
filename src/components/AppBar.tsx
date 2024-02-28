import logo from "../assets/logo.png";
import MobileNavigationDrawer from "./MobileNavigationDrawer";

export default function AppBar() {
  return (
    <header>
      <div className="flex items-center w-full py-2 px-6 bg-white shadow-md justify-between">
        <div className="flex justify-start">
          <MobileNavigationDrawer />
        </div>

        <div className="flex justify-center flex-grow">
          <img src={logo} alt="logo" className="h-auto w-auto max-h-12" />
        </div>

        <div className="flex justify-end w-8"></div>
      </div>
    </header>
  );
}
