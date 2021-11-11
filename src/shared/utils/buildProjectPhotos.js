// technology photos
import android from "../images/technologies/android.webp";
import bootstrap from "../images/technologies/bootstrap.webp";
import cSharp from "../images/technologies/c-sharp.webp";
import css3 from "../images/technologies/css-3.webp";
import dotNet from "../images/technologies/dot-net.webp";
import express from "../images/technologies/express.webp";
import flask from "../images/technologies/flask.webp";
import html5 from "../images/technologies/html-5.webp";
import java from "../images/technologies/java.webp";
import javascript from "../images/technologies/javascript.webp";
import mongoDb from "../images/technologies/mongo-db.webp";
import mongoose from "../images/technologies/mongoose.webp";
import nodeJs from "../images/technologies/node-js.webp";
import python from "../images/technologies/python.webp";
import react from "../images/technologies/react.webp";
import sqlServer from "../images/technologies/sql-server.webp";
import sql from "../images/technologies/sql.webp";
import sqlLite from "../images/technologies/sqlite.webp";

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

// data object to hold the image object of a technology based on a key
const techObject = {
  ANDROID: android,
  BOOTSTRAP: bootstrap,
  C_SHARP: cSharp,
  CSS_3: css3,
  ASP_DOT_NET: dotNet,
  EXPRESS: express,
  FLASK: flask,
  HTML_5: html5,
  JAVA: java,
  JAVASCRIPT: javascript,
  MONGO_DB: mongoDb,
  MONGOOSE: mongoose,
  NODE_JS: nodeJs,
  PYTHON: python,
  REACT: react,
  SQL_SERVER: sqlServer,
  SQL: sql,
  SQL_LITE: sqlLite,
};

/*
 * a utility function that returns an array of react image variables based on
 * technologies passed to this function.
 */
function buildTechnologyGallery(technologies) {
  let gallery = [];

  for (let i = 0; i < technologies.length; i++) {
    if (technologies[i] in techObject)
      gallery.push(techObject[technologies[i]]);
  }

  return gallery;
}

// data object to hold the array of the project screenshot image objects
const projectGallery = {
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

export { buildTechnologyGallery };
