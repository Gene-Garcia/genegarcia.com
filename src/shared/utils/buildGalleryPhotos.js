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
function buildGallery(technologies) {
  let gallery = [];

  for (let i = 0; i < technologies.length; i++) {
    if (technologies[i] in techObject)
      gallery.push(techObject[technologies[i]]);
  }

  return gallery;
}
export default buildGallery;
