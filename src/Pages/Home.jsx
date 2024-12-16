import AboutSection from '../components/AboutSection/AboutSection';
import BrowseMenu from '../components/BrowseMenu/BrowseMenu';
import Hero from '../components/Hero/Hero';
import ServiceSection from '../components/ServiceSection/ServiceSection';

const Home = () => {
  return (
    <>
      <Hero />
      <BrowseMenu />
      <AboutSection />
      <ServiceSection />
    </>
  );
};
export default Home;
