import AboutSection from '../components/AboutSection/AboutSection';
import BrowseMenu from '../components/BrowseMenu/BrowseMenu';
import Content from '../components/Content/Content';
import Hero from '../components/Hero/Hero';
import ServiceSection from '../components/ServiceSection/ServiceSection';

const Home = () => {
  return (
    <>
      <Hero />
      <BrowseMenu />
      <AboutSection />
      <ServiceSection />
      <Content />
    </>
  );
};
export default Home;
