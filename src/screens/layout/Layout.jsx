import { Outlet } from "react-router-dom";
import { NavbarProvider } from "../../context/NavbarContext";
import NavigationBar from "./NavigationBar";
import FloatingActionButton from "../../shared/components/FloatingActionButton";

const Layout = () => {
  return (
    <NavbarProvider>
      <div className="flex flex-col h-full w-full items-center">
        <NavigationBar />

        <main
          className="grow w-full 
                    flex items-center justify-center
                    max-w-[110rem]"
        >
          <Outlet />
        </main>
      </div>
      <FloatingActionButton />
    </NavbarProvider>
  );
};
export default Layout;
