import lokalLogo from "../../../../../shared/images/project_logos/lokal.png";
import mclLogo from "../../../../../shared/images/project_logos/mcl.png";
import floresDeMayoIs from "../../../../../shared/images/project_logos/floresdemayo-mis.png";
import tutoQuizzer from "../../../../../shared/images/project_logos/tutoquizzer.png";
import sinisianBMIS from "../../../../../shared/images/project_logos/sinisian-bmis.png";
import imbentaryo from "../../../../../shared/images/project_logos/imbentaryo.png";
import adventureWorks from "../../../../../shared/images/project_logos/adventure works.png";
import ccis from "../../../../../shared/images/project_logos/ccis.png";

export default {
  ADVENTURE: {
    name: "AdventureWorks Cycle",
    logo: adventureWorks,

    description: "A business analytics case study using Power BI.",
    longDescription:
      "The company has a challenging experience in maintaining various versions of different flat spreadsheet files. Thus, AdventureWorks also has a hard time generating reports from multiple flat files. The proposed solution is the use of Power BI to both perform the Extraction-Transformation-Loading (ETL) and the development of reports. A centralized dashboard was also made to provide an overview across datasets.",
    date: "June 2023",
    technologies: ["EXCEL", "POWER_BI", "DATA_GATEWAY", "POWER_AUTOMATE"],
    github: "",
    live: "",
  },

  SCGP: {
    name: "Student Curriculum Guide and Portfolio",
    logo: ccis,

    description:
      "A web application designed for student's e-portfolio and administrator's dashboard and reports.",
    longDescription:
      "The web application allows students to collect and build their portfolio composed of academic outputs as defined by their curriculum. Students are also enabled to dynamically track their progress in completing their curriculum through an academic roadmap. On the other hand, program administrators are empowered by being able to monitor and track the real-time progression and credentials of students. As a result, the college will be able to assess the academic performance and progression of every student from the first year until graduation.",
    date: "August 2022 - June 2023",
    technologies: [
      "JAVASCRIPT",
      "REACT",
      "NODE_JS",
      "SEQUELIZE",
      "MY_SQL",
      "SQL",
      "EXPRESS",
      "TAILWIND",
    ],
    github: "",
    live: "https://www.currport.vercel.app",
  },

  IMBENTARYO: {
    name: "imbentaryo",
    logo: imbentaryo,

    description:
      "An android-based lightweight inventory monitoring application.",
    longDescription:
      "Technology-driven operations have been growing with the continued exponential growth of technology in today's 21st century. One of the applications of technology in business operations is the management of its physical inventory. The traditional and legacy processes of inventory management require the use of physical papers. However, with technology comes the digitalization of inventory data. imbentaryo is an android-based and lightweight solution for the digitalization of inventory. The focus of this application is directed toward startup businesses, households, and even selected students. In technicals, the application is built on the client-server communication setup.",

    date: "May 2022 - June 2022",
    technologies: [
      "C_SHARP",
      "XAMARIN",
      "RESTFUL_API",
      "JAVASCRIPT",
      "NODE_JS",
      "EXPRESS",
      "SQL",
      "SQL_LITE",
      "HEROKU",
      "VISUAL_STUDIO",
    ],
    github: "https://github.com/Gene-Garcia/imbentaryo_client",
    live: "https://drive.google.com/file/d/1JSnIyIq-FKRY2wQELj_Zoj6ewDUqKTE8/view?usp=sharing",
  },

  LOKAL: {
    name: "Lokal Music",
    logo: lokalLogo,

    description:
      "An eCommerce website and a platform for digital music created by Filipino artists.",
    longDescription:
      "Lokal is a Laguna-based start-up partnership company. The company provides a web-based localized digital marketplace for Filipino music artists; the digital marketplace website is a Transaction Processing System. It is the vision of Lokal to be the front-running marketplace for Filipino music artists, and the mission of the company to provide the best experience for the users, both artists and fans. Artists are able to upload and market their music through the company's web marketplace platform. Fans, on the other hand, can purchase the artists' music.",

    date: "November 2020 - February 2021",
    technologies: [
      "ASP_DOT_NET",
      "WINDOWS_FORMS",
      "SQL_SERVER",
      "SQL",
      "JAVASCRIPT",
      "JQUERY",
      "C_SHARP",
      "HTML_5",
      "CSS_3",
      "BOOTSTRAP",
    ],
    github: false,
    live: false,
  },

  MCL_SCHOLAR_WEBSITE: {
    name: "MCL Scholar Website",
    logo: mclLogo,

    description:
      "A web application for MCL students and scholarship admins to improve certain scholarship areas.",
    longDescription:
      "The project aims to disseminate information about scholarships and to speed up the process of scholarship validation in MCL. This would benefit the SAO and students who have scholarships. We aim to achieve this by creating a central hub for scholarships where students could view information and access information for scholarships. Additionally students could also process their scholarship validations. The SAO could also post more information and announcements about scholarships and could also manage scholarship validation requests.",

    date: "February - March 2019",
    technologies: [
      "ASP_DOT_NET",
      "MVC_ARCH",
      "SQL_SERVER",
      "IDENTITY",
      "ENTITY",
      "C_SHARP",
      "HTML_5",
      "CSS_3",
      "BOOTSTRAP",
    ],
    github: false,
    live: false,
  },

  FLORES_DE_MAYO_IS: {
    name: "Flores De Mayo Information System",
    logo: floresDeMayoIs,

    description:
      "An information system website designed to support the management of the Alayan Organization records.",
    longDescription:
      "The website aims to provide information to the viewers about flores de mayo in Barangay Sinisian, Calaca, Batangas. Moreover, the website also makes the users able to reserve a slot for alayan. On the other hand, since during the time of Flores de Mayo sagala or santa Cruzan is always done, the website can accept application to participate in the Sagala.",

    date: "February 2018",

    technologies: [
      "ASP_DOT_NET",
      "MVC_ARCH",
      "SQL_SERVER",
      "IDENTITY",
      "ENTITY",
      "C_SHARP",
      "HTML_5",
      "CSS_3",
      "BOOTSTRAP",
    ],
    github: "https://github.com/Gene-Garcia/Flores-De-Mayo-IS",
    live: false,
  },

  TUTOQUIZZER: {
    name: "TutoQuizzer",
    logo: tutoQuizzer,

    description:
      "An android application that aims to assist students in reviewing and retaining learning concepts.",
    longDescription:
      "TutoQuizzer is an android-based application. The app assists students review and prepare for assessments or examinations. Moreover, TutoQuizzer generates a multiple-choice question to test the knowledge of its user. The information used are customized by the user; The app accepts topics and its meaning that are categorized by school year and course.",

    date: "March 2018",
    technologies: ["ANDROID", "ROOM_DB", "SQL_LITE", "JAVA", "LOCAL_STORAGE"],
    github: "https://github.com/Gene-Garcia/TutoQuizzer",
    live: "https://drive.google.com/file/d/1oil5Nzh-21VwjRIGQYWg8prJOGy5MeyA/view?usp=sharing",
  },

  SINISIAN_BARANGAY_MIS: {
    name: "Sinisian Barangay Management Information System",
    logo: sinisianBMIS,

    description:
      "A web-based information system for Barangay Sinisian that digitilizes the record management of residents.",
    longDescription:
      "The barangay management information system is a web-based system. It intends to manage the information of the residents residing in Barangay Sinisian, Calaca, Batangas. On the other hand, the system can visualize the data of the residents into graphs and charts. The system allows the admins to create an incident report, such as blotter and summon; moreover, it enables the users to generate digital forms, such as barangay clearance.",

    date: "May 2017",
    technologies: [
      "ASP_DOT_NET",
      "MVC_ARCH",
      "SQL_SERVER",
      "IDENTITY",
      "ENTITY",
      "C_SHARP",
      "HTML_5",
      "CSS_3",
      "BOOTSTRAP",
    ],
    github:
      "https://github.com/Gene-Garcia/Barangay-Management-Information-System",
    live: false,
  },
};

/*

KEY: {
    name: "",
    logo: "../../../../../shared/images/project_logos/",

    date: "",
    description: "",
    technologies: ["KEY1", "KEY2"],
    github: "",

    live: false,
    link: "",

    gallery: ["LOC1", "LOC2"],
  },

 */
