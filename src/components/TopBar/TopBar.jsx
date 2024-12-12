import { BsTelephone } from 'react-icons/bs';
import { IoMailUnreadOutline } from 'react-icons/io5';
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';

import './TopBar.scss';

const TopBar = () => {
  return (
    <section className='top--bar'>
      <div className='contact'>
        <div className='contact--phone'>
          <BsTelephone />
          (414)857-0107
        </div>
        <div className='contact--email'>
          <IoMailUnreadOutline />
          yummy@bistrobliss
        </div>
      </div>
      <div className='social--link'>
        <a href='#'>
          <FaTwitter />
        </a>
        <a href='#'>
          <FaFacebook />
        </a>
        <a href='#'>
          <FaInstagram />
        </a>
        <a href='#'>
          <FaGithub />
        </a>
      </div>
    </section>
  );
};
export default TopBar;
