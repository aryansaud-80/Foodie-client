import './CategoryCard.scss';

import menu from '../../assets/menu';
import { useNavigate } from 'react-router';

const CategoryCard = () => {
  const navigate = useNavigate();
  return (
    <>
      {menu.map((item) => (
        <div
          onClick={() => navigate(`/menu/${item.title}`)}
          key={item.title}
          className={`${item.title} menu-card`}
        >
          <img src={item.img} alt={item.alt} />
          <h2>{item.title}</h2>
          <p className='detail'>{item.description}</p>
          <button className='menu-btn'>Explore Menu</button>
        </div>
      ))}
    </>
  );
};
export default CategoryCard;
