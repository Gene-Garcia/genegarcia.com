// This context is responsible for handling the active states of app bar links
import { useState, createContext } from "react";

const AppBarContext = createContext();
export default AppBarContext;

function AppBarProvider({ children }) {
  const [linksState, setLinkState] = useState({
    HOME: false,
    EDUCATION: false,
    PAPERS: false,
    PORTFOLIO: false,
    TECH_STACK: false,
  });

  return (
    <AppBarContext.Provider value={{ linksState, setLinkState }}>
      {children}
    </AppBarContext.Provider>
  );
}
export { AppBarProvider };
