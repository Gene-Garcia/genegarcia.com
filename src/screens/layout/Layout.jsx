import { Outlet } from "react-router-dom";
import { NavbarProvider } from "../../context/NavbarContext";

const Layout = () => {
  return (
    <>
      <nav></nav>

      <NavbarProvider>
        <main>
          <Outlet />
        </main>
      </NavbarProvider>
    </>
  );
};
export default Layout;
