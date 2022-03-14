// a context used for the academic porfolio pagination

import { createContext, useState, useContext } from "react";

const AcademicPortfolioContext = createContext();
export default AcademicPortfolioContext;

const AcademicPortfolioProvider = ({ children }) => {
  const YEARS = ["Freshman", "Sophomore", "Junior", "Senior"];
  const TERMS = ["T1", "T2", "T3"];

  const [year, setYear] = useState(0);
  const [term, setTerm] = useState(0);

  // wrapper
  const paginateYear = (forward) => {
    if (forward) {
      setYear((prev) => (prev + 1 > YEARS.length - 1 ? 0 : prev + 1));
    } else {
      setYear((prev) => (prev - 1 < 0 ? YEARS.length - 1 : prev - 1));
    }
  };

  const paginateTerm = (termIndex) => {
    setTerm(termIndex);
  };

  return (
    <AcademicPortfolioContext.Provider
      value={{
        YEARS,
        TERMS,
        year,
        setYear,
        term,
        setTerm,
        paginateYear,
        paginateTerm,
      }}
    >
      {children}
    </AcademicPortfolioContext.Provider>
  );
};

const useAcademicPortfolioContext = () => {
  const {
    YEARS,
    TERMS,
    year,
    setYear,
    term,
    setTerm,
    paginateYear,
    paginateTerm,
  } = useContext(AcademicPortfolioContext);
  return {
    YEARS,
    TERMS,
    year,
    setYear,
    term,
    setTerm,
    paginateYear,
    paginateTerm,
  };
};

export { AcademicPortfolioProvider, useAcademicPortfolioContext };
