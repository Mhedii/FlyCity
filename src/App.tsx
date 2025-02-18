import { Suspense, lazy, useEffect } from "react";
import "./App.css";
// import Home from "./pages/Home";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthGuard from "./components/Auth/AuthGuard";
import Booking from "./components/Dashboard/Booking/Booking";
import FlightSearchResult from "./components/Dashboard/FlightSearchResult/FlightSearchResult";
import DashboardLayout from "./layouts/DashboardLayout";
import FlightSearchLayout from "./layouts/FlightSearchLayout";
import MainLayout from "./layouts/MainLayout";
import BookingsPage from "./pages/Bookings/BookingsPage";
import FlightSearch from "./pages/FlightSearch/FlightSearch";
import { store } from "./redux/store";
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
        <Provider store={store}>
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
              <Route element={<DashboardLayout />}>
                <Route path="/booking/flight" element={<BookingsPage />} />
              </Route>

              {/* FlightSearch Layout Routes */}
              <Route
                element={
                  <AuthGuard>
                    {/* <FlightSearchLayout /> */}
                    <DashboardLayout />
                  </AuthGuard>
                }
              >
                <Route element={<FlightSearchLayout />}>
                  <Route
                    path="/search/flight"
                    element={<FlightSearchResult />}
                  />
                </Route>
                <Route path="/search/flight/booking" element={<Booking />} />
              </Route>
            </Routes>
          </Suspense>
        </Provider>
      </Router>
    </>
  );
}

export default App;
