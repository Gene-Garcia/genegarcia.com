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
import entity from "../images/technologies/entity.webp";
import room from "../images/technologies/room.webp";
import mvvm from "../images/technologies/mvvm.webp";
import winforms from "../images/technologies/windows-forms.webp";
import heroku from "../images/technologies/heroku.webp";
import vsStudio from "../images/technologies/visual_studio.webp";
import azure from "../images/technologies/azure.webp";
import vsCode from "../images/technologies/vs_code.webp";
import mvp from "../images/technologies/mvp.webp";
import netlify from "../images/technologies/netlify.webp";
import github from "../images/technologies/github.webp";
import namecheap from "../images/technologies/namecheap.webp";
import identity from "../images/technologies/identity.webp";
import mvc from "../images/technologies/mvc.webp";
import figma from "../images/technologies/figma.webp";

// 404
import notFound from "../images/404.png";

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
  ENTITY: entity,
  MVC_ARCH: mvc,
  IDENTITY: identity,
  ROOM_DB: room,
  MVP_ARCH: mvp,
  MVVM_ARCH: mvvm,
  WINDOWS_FORMS: winforms,
  NAMECHEAP: namecheap,
  NETLIFY: netlify,
  HEROKU: heroku,
  GITHUB: github,
  FIGMA: figma,
  VISUAL_STUDIO: vsStudio,
  VS_CODE: vsCode,
  AZURE: azure,
};

/*
 * a utility function that only wraps the access to image object in order to
 * return a '404' image whenever the image key is not found
 */
function GetImage(key) {
  return key in techObject ? techObject[key] : notFound;
}

export { GetImage };
