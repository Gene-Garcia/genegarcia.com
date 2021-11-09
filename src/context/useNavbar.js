import { useContext } from "react";
import NavbarContext from "./NavbarContext";

function useNavbar() {
  const { linksState, setLinkState, activateThisLink } =
    useContext(NavbarContext);
  return { linksState, setLinkState, activateThisLink };
}
export default useNavbar;
