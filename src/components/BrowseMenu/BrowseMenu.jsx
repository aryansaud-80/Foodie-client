import CategoryCard from '../CategoryCard/CategoryCard';
import './BrowseMenu.scss';

const BrowseMenu = () => {
  return (
    <section className='browse-menu--container'>
      <div className='categories--container'>
        <h1>Browse Our Menu</h1>

        <div className='menu-cards'>
          <CategoryCard />
        </div>
      </div>
    </section>
  );
};
export default BrowseMenu;
