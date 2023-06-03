// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarProvider } from "../../../context/NavbarContext";
import FloatingActionButton from "../../../shared/components/FloatingActionButton";

// index route
import routes from "../route";
import Home from "../screens/Home";
import Layout from "../../layout/Layout";

function App() {
  console.log(routes);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {Object.entries(routes).map(([k, { path, component: Element }]) =>
            path === "" ? (
              <Route key={k} index element={<Element />} />
            ) : (
              <Route key={k} path={path} element={<Element />} />
            )
          )}
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
