import mclLogoOnly from "../../../../../shared/images/schools/mcl-logo-only.png";
import acm from "../../../../../shared/images/schools/acm.png";
import rangsit from "../../../../../shared/images/schools/rangsit.png";

export default {
  // WORK: null,

  ACADEMIC: {
    name: "Academic Experience",

    sections: {
      RESEARCH_FMIS_COVID: {
        title: "International Research Conference",
        date: "April 30, 2021",

        organization: "Rangsit University",
        location: "Virtual Conference from Pathum Thani, Thailand",
        organizationLogo: rangsit,

        description:
          "Written and presented a paper on financial managemenet informations, its state during the COVID-19 pandemic, and crisis management of organizations to handle challenges.",

        outputs: ["Published Research Paper", "Conference Presentation"],
        achievements: [],
      },

      IMMERSION: {
        title: "Work Immersion",
        date: "October 22, 2020",

        organization: "Malayan Colleges Laguna",
        location: "Cabuyao, PH",
        organizationLogo: mclLogoOnly,

        description:
          "Planned and developed a website for MCL's Students Affairs Office (SAO) using C# ASP .NET. Student scholars can apply for scholarship validation. Moreover, the website allows SAO to posts announcements and upload the scholars information. Admin users are provided with a dashboard to track the data.",

        outputs: ["Working Web Application", "Project Presentation"],
        achievements: ["Best in Work Immersion"],
      },
    },
  },

  COMPETITION: {
    name: "Competition Experience",

    sections: {
      CODE_MASTERS: {
        title: "ACM Code Masters",
        date: "October 22, 2020",

        organization: "MCL-ACM Student Chapter",
        location: "MCL ACM Discord Server",
        organizationLogo: acm,

        description:
          "Championed the competition on C# programming language and data structure & algorithms",

        outputs: [],
        achievements: ["First Place"],
      },

      SYNTAX_ERROR: {
        title: "Syntax Error V2",
        date: "March 15, 2019",

        organization: "Junior MCL ACM",
        location: "Cabuyao, Laguna, PH",
        organizationLogo: acm,

        description:
          "Solved intermediate to complex programming questions with a team through the use of efficient Java solutions.",

        outputs: [],
        achievements: ["First Place"],
      },

      CODEX: {
        title: "codeX Programming Challenge",
        date: "October 19, 201",

        organization: "MCL ACM Student Chapter",
        location: "Jose Rizal Bldg., MCL, Cabuyao, Laguna, PH",
        organizationLogo: acm,

        description:
          "Won first place on solving various difficult programming logical question with the use if C# programming solutions.",

        outputs: [],
        achievements: ["First Place"],
      },
    },
  },
};
