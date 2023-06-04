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
import xamarin from "../images/technologies/xamarin.webp";
import restfulapi from "../images/technologies/restfulapi.webp";
import seaborn from "../images/technologies/seaborn.webp";
import pandas from "../images/technologies/pandas.webp";
import matplotlib from "../images/technologies/matplotlib.webp";
import jupyter from "../images/technologies/jupyter.webp";
import localStorage from "../images/technologies/local-storage.webp";
import excel from "../images/technologies/excel.webp";

import dataGateway from "../images/technologies/data gateway.webp";
import automate from "../images/technologies/automate.webp";
import pbi from "../images/technologies/pbi.webp";

import sequelize from "../images/technologies/sequelize.webp";
import mySql from "../images/technologies/mysql.webp";
import tailwind from "../images/technologies/tailwind.webp";

// 404
import notFound from "../images/404.png";

// data object to hold the image object of a technology based on a key
const techObject = {
  ANDROID: android,
  ASP_DOT_NET: dotNet,
  AZURE: azure,
  BOOTSTRAP: bootstrap,
  C_SHARP: cSharp,
  CSS_3: css3,
  EXPRESS: express,
  ENTITY: entity,
  EXCEL: excel,
  FLASK: flask,
  FIGMA: figma,
  GITHUB: github,
  IDENTITY: identity,
  HTML_5: html5,
  HEROKU: heroku,
  JAVA: java,
  JAVASCRIPT: javascript,
  JUPYTER: jupyter,
  LOCAL_STORAGE: localStorage,
  MATPLOTLIB: matplotlib,
  MONGO_DB: mongoDb,
  MONGOOSE: mongoose,
  MVC_ARCH: mvc,
  MVP_ARCH: mvp,
  MVVM_ARCH: mvvm,
  NODE_JS: nodeJs,
  NAMECHEAP: namecheap,
  NETLIFY: netlify,
  PYTHON: python,
  PANDAS: pandas,
  REACT: react,
  ROOM_DB: room,
  RESTFUL_API: restfulapi,
  SQL_SERVER: sqlServer,
  SQL: sql,
  SQL_LITE: sqlLite,
  SEABORN: seaborn,
  VISUAL_STUDIO: vsStudio,
  VS_CODE: vsCode,
  WINDOWS_FORMS: winforms,
  XAMARIN: xamarin,

  POWER_BI: pbi,
  DATA_GATEWAY: dataGateway,
  POWER_AUTOMATE: automate,

  SEQUELIZE: sequelize,
  MY_SQL: mySql,
  TAILWIND: tailwind,
};

/*
 * a utility function that only wraps the access to image object in order to
 * return a '404' image whenever the image key is not found
 */
function GetImage(key) {
  return key in techObject ? techObject[key] : notFound;
}

export { GetImage };
