import Features from "../components/Features/Features";
import Header from "../components/Header/Header";
import Hero from "../components/HeroSection/Hero";
import Business from "../components/Solutions/Business";
import Solutions from "../components/Solutions/Solutions";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Business />
      <Solutions />
      <Footer />
    </div>
  );
};

export default Home;
