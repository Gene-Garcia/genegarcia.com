import { Outlet } from "react-router-dom";
import { NavbarProvider } from "../../context/NavbarContext";
import NavigationBar from "./NavigationBar";
import FloatingActionButton from "../../shared/components/FloatingActionButton";

const Layout = () => {
  return (
    <NavbarProvider>
      <div
        className="flex flex-col h-full w-full items-center mb-20
                    overflow-auto"
      >
        <NavigationBar />

        <main
          className="grow w-full 
                    flex items-center justify-center"
        >
          <Outlet />
        </main>
      </div>
      <FloatingActionButton />
    </NavbarProvider>
  );
};
export default Layout;
