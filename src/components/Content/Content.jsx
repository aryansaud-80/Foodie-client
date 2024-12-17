import './content.scss';

const Content = () => {
  return (
    <section className='content--section'>
      <div className='left'>
        <div className='left--left'>
          <img src='/img/chef.png' alt='' />
        </div>
        <div className='left--right'>
          <img src='/img/one.png' alt='' />
          <img src='/img/salad.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <h1 className='title'>
          Fastest Food <br /> Delivery in City
        </h1>
        <p className='description'>
          Our visual designer lets you quickly and of drag a down your way to
          customapps for both keep desktop.
        </p>
        <div className='features'>
          <div className='feature'>
            <div>
              <img src='/img/clock.png' alt='' />
            </div>
            <p>Delivery within 30 minutes</p>
          </div>
          <div className='feature'>
            <div>
              <img src='/img/receipt-tax.png' alt='' />
            </div>
            <p>Best Offer & Prices</p>
          </div>
          <div className='feature'>
            <div>
              <img src='/img/shopping-cart.png' alt='' />
            </div>
            <p>Online Services Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Content;
