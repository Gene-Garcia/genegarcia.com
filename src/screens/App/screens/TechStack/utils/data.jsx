const data = {
  DATA_ANALYTICS: {
    title: "Data Analytics",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      </svg>
    ),

    technologies: [
      "PYTHON",
      "SQL",
      "PANDAS",
      "MATPLOTLIB",
      "SEABORN",
      "JUPYTER",
      "EXCEL",
    ],

    groups: [
      {
        title: "Programming Languages",
        technology: ["PYTHON", "SQL"],
      },
      {
        title: "Libraries",
        technology: ["PANDAS", "MATPLOTLIB", "SEABORN"],
      },
      {
        title: "Tools",
        technology: ["JUPYTER", "EXCEL"],
      },
    ],
  },

  WEB_APPLICATION: {
    title: "Web Application",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),

    technologies: [
      "MONGO_DB",
      "EXPRESS",
      "REACT",
      "NODE_JS",
      "HTML_5",
      "CSS_3",
      "BOOTSTRAP",
      "JAVASCRIPT",
      "C_SHARP",
      "PYTHON",
      "ASP_DOT_NET",
      "MONGOOSE",
      "FLASK",
      "ENTITY",
      "IDENTITY",
      "MVC_ARCH",
    ],

    groups: [
      {
        title: "MERN Full Stack",
        technology: ["MONGO_DB", "EXPRESS", "REACT", "NODE_JS"],
      },
      {
        title: "Mark Language and Design",
        technology: ["HTML_5", "CSS_3", "BOOTSTRAP"],
      },
      {
        title: "Scripting Languages",
        technology: ["JAVASCRIPT"],
      },
      {
        title: "Server-Side",
        technology: ["JAVASCRIPT", "C_SHARP", "PYTHON"],
      },
      {
        title: "Frameworks",
        technology: [
          "ASP_DOT_NET",
          "MONGOOSE",
          "FLASK",
          "ENTITY",
          "IDENTITY",
          "MVC_ARCH",
        ],
      },
    ],
  },

  SMARTPHONE: {
    title: "Smartphone",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),

    technologies: [
      "ANDROID",
      "JAVA",
      "C_SHARP",
      "SQL",
      "SQL_LITE",
      "ROOM_DB",
      "MVVM_ARCH",
      "XAMARIN",
      "RESTFUL_API",
    ],

    groups: [
      {
        title: "Programming Language",
        technology: ["ANDROID", "JAVA", "C_SHARP"],
      },
      {
        title: "Database",
        technology: ["SQL", "SQL_LITE"],
      },
      {
        title: "Frameworks",
        technology: ["ROOM_DB", "MVVM_ARCH", "XAMARIN", "RESTFUL_API"],
      },
    ],
  },

  DESKTOP: {
    title: "Desktop",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),

    technologies: ["C_SHARP", "SQL", "SQL_SERVER", "MVP_ARCH", "WINDOWS_FORMS"],

    groups: [
      {
        title: "Programming Language",
        technology: ["C_SHARP"],
      },
      {
        title: "Database",
        technology: ["SQL", "SQL_SERVER"],
      },
      {
        title: "Framework",
        technology: ["MVP_ARCH", "WINDOWS_FORMS"],
      },
    ],
  },

  SERVICES: {
    title: "Services",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),

    technologies: [
      "GITHUB",
      "MONGO_DB",
      "AZURE",
      "GITHUB",
      "AZURE",
      "HEROKU",
      "NETLIFY",
      "NAMECHEAP",
      "FIGMA",
      "VISUAL_STUDIO",
      "VS_CODE",
    ],

    groups: [
      {
        title: "Version Control",
        technology: ["GITHUB"],
      },
      {
        title: "Database",
        technology: ["MONGO_DB", "AZURE"],
      },
      {
        title: "Deployment",
        technology: ["GITHUB", "AZURE", "HEROKU", "NETLIFY", "NAMECHEAP"],
      },
      {
        title: "Design",
        technology: ["FIGMA"],
      },
      {
        title: "IDE",
        technology: ["VISUAL_STUDIO", "VS_CODE"],
      },
    ],
  },
};
export default data;
