// a context used for the academic porfolio pagination

import { createContext, useState, useContext } from "react";

const AcademicPortfolioContext = createContext();
export default AcademicPortfolioContext;

const AcademicPortfolioProvider = ({ children }) => {
  const YEARS = ["Freshman", "Sophomore", "Junior", "Senior"];
  const TERMS = ["T1", "T2", "T3"];

  const [year, setYear] = useState(0);
  const [term, setTerm] = useState(0);
  const [all, setAll] = useState(false); // shows all outputs
  const [thisYear, setThisYear] = useState(false); // shows all outputs for current year

  // wrapper
  const paginateYear = (forward) => {
    if (forward) {
      setTerm((prev) => (prev + 1 > TERMS.length - 1 ? 0 : prev + 1));

      // if the current term has reached the max, paginate the YEAR
      if (TERMS[term] === "T3") {
        // if the next year will be out of bounds, logically, it should restart from the start; the lowest year.
        setYear((prev) => (prev + 1 > YEARS.length - 1 ? 0 : prev + 1));
      }
    } else {
      setTerm((prev) => (prev - 1 < 0 ? TERMS.length - 1 : prev - 1));

      // if the current TERM has reached the minimum, also paginate the YEAR
      if (TERMS[term] === "T1") {
        // if the previous year will be out of bounds, logically, it should rotate back to the highest year
        setYear((prev) => (prev - 1 < 0 ? YEARS.length - 1 : prev - 1));
      }
    }
  };

  const paginateTerm = (termIndex) => {
    setTerm(termIndex);
  };

  const toggleAll = () => {
    setThisYear(false);
    setAll((prev) => !prev);
  };

  const toggleThisYear = () => {
    setAll(false);
    setThisYear((prev) => !prev);
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
        all,
        setAll,
        toggleAll,
        thisYear,
        setThisYear,
        toggleThisYear,
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
    all,
    setAll,
    toggleAll,
    thisYear,
    setThisYear,
    toggleThisYear,
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
    all,
    setAll,
    toggleAll,
    thisYear,
    setThisYear,
    toggleThisYear,
  };
};

export { AcademicPortfolioProvider, useAcademicPortfolioContext };
