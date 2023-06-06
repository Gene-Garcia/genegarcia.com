// Routes of every Main Routes
import EducationRoute from "./screens/Education/route";
import HomeRoute from "./screens/Home/route";
import PapersRoute from "./screens/Papers/route";
import PortfolioRoute from "./screens/Portfolio/route";
import TechStackRoute from "./screens/TechStack/route";
import ExperienceRoute from "./screens/Experience/route";
import AcademicPortfolioRoute from "./screens/AcademicPortfolio/route";
import CertificationsRoute from "./screens/Certifications/route";
import InternshipRoute from "./screens/Internship/route";

const routes = {
  HOME: HomeRoute,
  EDUCATION: EducationRoute,
  PAPERS: PapersRoute,
  PORTFOLIO: PortfolioRoute,
  TECH_STACK: TechStackRoute,
  EXPERIENCE: ExperienceRoute,
  ACADEMIC_PORTFOLIO: AcademicPortfolioRoute,
  CERTIFICATIONS: CertificationsRoute,
  INTERNSHIP: InternshipRoute,
};
export default routes;
