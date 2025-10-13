import NavBar from "./sections/NavBar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatrureCard";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowCaseSection from "./sections/ShowCaseSection";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
