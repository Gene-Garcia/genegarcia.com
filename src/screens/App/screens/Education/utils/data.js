// image import
import cms from "../../../../../shared/images/schools/cms.webp";
import mcl from "../../../../../shared/images/schools/mcl.webp";

export default {
  COLLEGE: {
    school: "Mapúa Malayan Colleges Laguna",
    specialization: "BS Information Systems",
    logo: mcl,

    state: "Present",

    awards: {
      FRESH_SOPH: {
        name: "Freshman & Sophomore",
        list: ["Dean's Lister", "President's Lister", "Full Academic Scholar"],
      },
    },

    linkName: "mcl.edu.ph",
    link: "https://mcl.edu.ph",
  },

  SHS: {
    school: "Mapúa Malayan Colleges Laguna",
    specialization: "Information & Communications Technology - Programming",
    logo: mcl,

    state: "Graduated",

    awards: {
      YEAR: {
        name: "2017 - 2019",
        list: [
          "Graduated with Honors",
          "Best in Work Immersion",
          "codeX Challenge Champion",
        ],
      },
    },

    linkName: "mcl.edu.ph",
    link: "https://mcl.edu.ph",
  },

  JHS: {
    school: "Creative Middle School",
    specialization: "Junior High School",
    logo: cms,

    state: "Graduated",

    awards: {
      YEAR: {
        name: "2013 - 2017",
        list: ["Graduated with Honors"],
      },
    },

    linkName: "cms.edu.ph",
    link: "https://cms.edu.ph",
  },
};
