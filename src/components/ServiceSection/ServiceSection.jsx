import services from '../../assets/service';
import './ServiceSection.scss';

const ServiceSection = () => {
  return (
    <section className='service--container'>
      <div className='service--content'>
        <h2 className='service--title'>
          We also offer unique <br /> services for your events
        </h2>

        <div className='service--items'>
          {
            services.map((service)=>{
              return (
                <div key={service.id} className='service--item'>
                  <img src={service.img} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>{service.descriptions}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
