// project screenshots
import fdmis1 from "../images/project_images/flores-de-mayo-is/fdmis-1.webp";
import fdmis2 from "../images/project_images/flores-de-mayo-is/fdmis-2.webp";
import fdmis3 from "../images/project_images/flores-de-mayo-is/fdmis-3.webp";
import lm1 from "../images/project_images/lokal/lm-1.webp";
import lm2 from "../images/project_images/lokal/lm-2.webp";
import lm3 from "../images/project_images/lokal/lm-3.webp";
import lm4 from "../images/project_images/lokal/lm-4.webp";
import lm5 from "../images/project_images/lokal/lm-5.webp";
import lm6 from "../images/project_images/lokal/lm-6.webp";
import lm7 from "../images/project_images/lokal/lm-7.webp";
import lm8 from "../images/project_images/lokal/lm-8.webp";
import mcl1 from "../images/project_images/mcl-scholar-website/mclsw-1.webp";
import mcl2 from "../images/project_images/mcl-scholar-website/mclsw-2.webp";
import sbmis1 from "../images/project_images/sinisian-bmis/bmis-1.webp";
import sbmis2 from "../images/project_images/sinisian-bmis/bmis-2.webp";
import sbmis3 from "../images/project_images/sinisian-bmis/bmis-3.webp";
import sbmis4 from "../images/project_images/sinisian-bmis/bmis-4.webp";
import sbmis5 from "../images/project_images/sinisian-bmis/bmis-5.webp";
import sbmis6 from "../images/project_images/sinisian-bmis/bmis-6.webp";
import sbmis7 from "../images/project_images/sinisian-bmis/bmis-7.webp";
import sbmis8 from "../images/project_images/sinisian-bmis/bmis-8.webp";
import sbmis9 from "../images/project_images/sinisian-bmis/bmis-9.webp";
import tq1 from "../images/project_images/tutoquizzer/tq-1.webp";
import tq2 from "../images/project_images/tutoquizzer/tq-2.webp";
import tq3 from "../images/project_images/tutoquizzer/tq-3.webp";
import tq4 from "../images/project_images/tutoquizzer/tq-4.webp";
import tq5 from "../images/project_images/tutoquizzer/tq-5.webp";
import tq6 from "../images/project_images/tutoquizzer/tq-6.webp";
import tq7 from "../images/project_images/tutoquizzer/tq-7.webp";
import tq8 from "../images/project_images/tutoquizzer/tq-8.webp";
import tq9 from "../images/project_images/tutoquizzer/tq-9.webp";
import tq10 from "../images/project_images/tutoquizzer/tq-10.webp";
import imb1 from "../images/project_images/imbentaryo/imb-1.webp";
import imb2 from "../images/project_images/imbentaryo/imb-2.webp";
import imb3 from "../images/project_images/imbentaryo/imb-3.webp";
import imb4 from "../images/project_images/imbentaryo/imb-4.webp";
import imb5 from "../images/project_images/imbentaryo/imb-5.webp";

import aw1 from "../images/project_images/adventure-works/adventure-works-1.webp";
import aw2 from "../images/project_images/adventure-works/adventure-works-2.webp";
import aw3 from "../images/project_images/adventure-works/adventure-works-3.webp";
import aw4 from "../images/project_images/adventure-works/adventure-works-4.webp";
import aw5 from "../images/project_images/adventure-works/adventure-works-5.webp";

import scgp1 from "../images/project_images/scgp/scgp-1.webp";
import scgp2 from "../images/project_images/scgp/scgp-2.webp";
import scgp3 from "../images/project_images/scgp/scgp-3.webp";
import scgp4 from "../images/project_images/scgp/scgp-4.webp";
import scgp5 from "../images/project_images/scgp/scgp-5.webp";
import scgp6 from "../images/project_images/scgp/scgp-6.webp";

// data object to hold the array of the project screenshot image objects
const projectGallery = {
  SCGP: [scgp1, scgp2, scgp3, scgp4, scgp5, scgp6],
  ADVENTURE: [aw1, aw2, aw3, aw4, aw5],
  IMBENTARYO: [imb1, imb2, imb3, imb4, imb5],
  LOKAL: [lm1, lm2, lm3, lm4, lm5, lm6, lm7, lm8],
  MCL_SCHOLAR_WEBSITE: [mcl1, mcl2],
  FLORES_DE_MAYO_IS: [fdmis1, fdmis2, fdmis3],
  TUTOQUIZZER: [tq1, tq2, tq3, tq4, tq5, tq6, tq7, tq8, tq9, tq10],
  SINISIAN_BARANGAY_MIS: [
    sbmis1,
    sbmis2,
    sbmis3,
    sbmis4,
    sbmis5,
    sbmis6,
    sbmis7,
    sbmis8,
    sbmis9,
  ],
};

/*
 * a utility function that returns the array of the image object of the project
 * key.
 */
function buildProjectGallery(projectKey) {
  if (projectKey in projectGallery) return projectGallery[projectKey];
  return [];
}

export { buildProjectGallery };
