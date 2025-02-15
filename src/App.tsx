import { Suspense, lazy, useEffect } from "react";
import "./App.css";
// import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FlightSearchResult from "./components/Dashboard/FlightSearchResult/FlightSearchResult";
import DashboardLayout from "./layouts/DashboardLayout";
import FlightSearchLayout from "./layouts/FlightSearchLayout";
import MainLayout from "./layouts/MainLayout";
import FlightSearch from "./pages/FlightSearch/FlightSearch";
import AuthGuard from "./components/Auth/AuthGuard";
import { initializeAppData } from "./utils/init";
// import Registration from "./pages/Registration";
// import RegisterPage from "./pages/RegisterPage";

const Registration = lazy(() => import("./pages/Registration"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  useEffect(() => {
    initializeAppData();
  }, []);

  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Main Layout Routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
            </Route>

            {/* Dashboard Layout Routes */}

            <Route
              element={
                <AuthGuard>
                  <DashboardLayout />
                </AuthGuard>
              }
            >
              <Route path="/search" element={<FlightSearch />} />
            </Route>

            {/* Bookings Layout Routes */}
            {/* <Route element={<DashboardLayout />}>
              <Route path="/bookings/" element={<BookingTable />} />
            </Route> */}

            {/* FlightSearch Layout Routes */}
            <Route
              element={
                <AuthGuard>
                  <FlightSearchLayout />
                </AuthGuard>
              }
            >
              <Route path="/search/flight" element={<FlightSearchResult />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
