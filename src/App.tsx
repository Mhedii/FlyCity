import { Suspense, lazy } from "react";
import "./App.css";
// import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Home/Footer/Footer";
import Header from "./components/Home/Header/Header";
// import Registration from "./pages/Registration";
// import RegisterPage from "./pages/RegisterPage";

const Registration = lazy(() => import("./pages/Registration"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
