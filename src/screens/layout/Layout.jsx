import { Outlet } from "react-router-dom";
import { NavbarProvider } from "../../context/NavbarContext";
import NavigationBar from "./NavigationBar";

const Layout = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <NavbarProvider>
        <NavigationBar />

        <main className="grow w-full flex items-center justify-center">
          <Outlet />
        </main>
      </NavbarProvider>
    </div>
  );
};
export default Layout;
