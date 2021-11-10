// This context is responsible for handling the active states of app bar links
import { useState, createContext } from "react";

const NavbarContext = createContext();
export default NavbarContext;

const init = {
  HOME: false,
  EDUCATION: false,
  PAPERS: false,
  PORTFOLIO: false,
  TECH_STACK: false,
};

function NavbarProvider({ children }) {
  const [linksState, setLinkState] = useState(init);

  // wrapper
  const activateThisLink = (name) => {
    setLinkState({ ...init, [name]: true });
  };

  return (
    <NavbarContext.Provider
      value={{ linksState, setLinkState, activateThisLink }}
    >
      {children}
    </NavbarContext.Provider>
  );
}
export { NavbarProvider };
