import { useNavigate } from 'react-router';
import './AboutSection.scss';

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <section id='about--section'>
      <div className='about'>
        <div className='left--side'>
          <img src='/img/about.png' alt='' />
        </div>
        <div className='right--side'>
          <h2>
            We provide healthy <br /> food for your family.
          </h2>
          <p>
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city rich culinary culture, we aim to honor our
            local roots while infusing a global palate.
          </p>
          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <button onClick={() => navigate('/about')} className='about--btn'>
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
