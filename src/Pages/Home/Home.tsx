import Categories from "../Categories/Categories";
import { HowItWorks } from "../HowItWorks/HowItWorks";
import TopProducts from "../Top Products/TopProducts";
import { HeroSectionHome } from "./HeroSection/HeroSection";
import HeroSection2 from "./HeroSection2/HeroSection2";

const Home = () => {
  return (
    <>
      <Categories />
      <HeroSection2 />
      <HeroSectionHome />
      <HowItWorks />
      <TopProducts />
    </>
  );
};

export default Home;
