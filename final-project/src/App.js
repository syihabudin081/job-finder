import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/landing_page";
import JobList from "./pages/job_list";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Detail from "./pages/detail";
import { GlobalProvider } from "./GlobalContext/context";

import Login from "./auth/login";
import Dashboard from "./dashboard/dashboard";
import Datalist from "./dashboard/datalist";
import LayoutLanding from "./component/layoutlanding";
import Cookies from "js-cookie";
import Dataform from "./dashboard/dataform";
import Register from "./auth/register";
import ChangePassword from "./auth/changePassword";
import { useEffect } from "react";
function App() {

  useEffect(() => {
    document.title = "Job-Finder";  
  }, []);

  
  const LoginRoute = (props) => {
    if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
    } else if (Cookies.get("token") === undefined) {
      return props.children;
    }
  };
  const LoginRouteDashboard = (props) => {
    if (Cookies.get("token") !== undefined) {
      return props.children;
    } else if (Cookies.get("token") === undefined) {
      return <Navigate to={"/"} />;
    }
  };

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutLanding>
                <LandingPage />
              </LayoutLanding>
            }
          />

          <Route
            path="/JobList"
            element={
              <LayoutLanding>
                <JobList />
              </LayoutLanding>
            }
          />
          <Route
            path="/Login"
            element={
              <LoginRoute>
                <LayoutLanding>
                  <Login />
                </LayoutLanding>
              </LoginRoute>
            }
          />

          <Route
            path="/Register"
            element={
              <LoginRoute>
                <LayoutLanding>
                  <Register/>
                </LayoutLanding>
              </LoginRoute>
            }
          />

          <Route
            path="/detail_job/:idData"
            element={
              <LayoutLanding>
                <Detail />
              </LayoutLanding>
            }
          />
          <Route
            path="/datalist"
            element={
              <LoginRouteDashboard>
                <Dashboard>
                  <Datalist />
                </Dashboard>
              </LoginRouteDashboard>
            }
          />
          <Route
            path="/dataform/:idData"
            element={
              <LoginRouteDashboard>
                <Dashboard>
                  <Dataform />
                </Dashboard>
              </LoginRouteDashboard>
            }
          />
          <Route
            path="/dataform"
            element={
              <LoginRouteDashboard>
                <Dashboard>
                  <Dataform />
                </Dashboard>
              </LoginRouteDashboard>
            }
          />
          <Route
            path="/ChangePassword"
            element={
              <LoginRouteDashboard>
                <Dashboard>
                  <ChangePassword/>
                </Dashboard>
              </LoginRouteDashboard>
            }
          />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
