import { Suspense, lazy } from "react";
import "./App.css";
// import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
// import Registration from "./pages/Registration";
// import RegisterPage from "./pages/RegisterPage";

const Registration = lazy(() => import("./pages/Registration"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Header /> */}
          <Routes>
            {/* <Route path="/" element={<Home />} />
              <Route path="/registration" element={<Registration />} /> */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
            </Route>

            {/* Dashboard Layout Routes */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Route>
          </Routes>
          {/* <Footer /> */}
        </Suspense>
      </Router>
    </>
  );
}

export default App;
