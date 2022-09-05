import coursera from "../images/organizations/coursera.webp";
import dict from "../images/organizations/dict.webp";
import pirple from "../images/organizations/pirple.webp";
import udemy from "../images/organizations/udemy.webp";

// 404
import notFound from "../images/404.png";

// data object to hold the image object of an organization based on a key
const organizationObject = {
  COURSERA: coursera,
  DICT: dict,
  PIRPLE: pirple,
  UDEMY: udemy,
};

/*
 * a utility function that only wraps the access to image object in order to
 * return a '404' image whenever the image key is not found
 */
function GetOrganization(key) {
  return key in organizationObject ? organizationObject[key] : notFound;
}

export { GetOrganization };
