import { Link } from 'react-router';
import './Hero.scss';

const Hero = () => {
  return (
    <section className='hero--container'>
      <div className='hero--content'>
        <h1 className='hero--title'>Best food for <br /> your taste</h1>
        <p className='hero--description'>
          Discover delectable cuisine and unforgettable moments <br /> in our
          welcoming, culinary haven.
        </p>
        <div className='hero--btns'>
          <button className='hero--bookTable-btn'>
            <Link to='/book-table'>Book A Table</Link>
          </button>
          <button className='hero--exploreMenu-btn'>
            <Link to='/menu'>Explore Menu</Link>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
