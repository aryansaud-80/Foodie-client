import { Link, NavLink } from 'react-router';
import './Header.scss';

const Header = () => {
  return (
    <section className='header--container'>
      <div className='logo--container'>
        <img src='./img/japanese-food.png' alt='logo' />
        <img src='./img/Cuisine.png' alt='logo' />
      </div>

      <nav className='nav--bar'>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/about'> About </NavLink>
        <NavLink to='/menu'> Menu </NavLink>
        <NavLink to='/pages'> Pages </NavLink>
        <NavLink to='/contact'> Contact </NavLink>
      </nav>

      <button className="book-table--btn">
        <Link to='/book-table'> Book a Table </Link>
      </button>
    </section>
  );
};
export default Header;
