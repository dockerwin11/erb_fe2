import React from 'react'
import Title from './Title';
import { services } from '../data';

function Services() {
  return ( <>
    {/* <!-- services --> */}
    <section className="section" id="services">
        <Title main_title='our' sub_title='services' />
        {/* <div className="section-title">
            <h2>our <span>services</span></h2>
        </div> */}

        <div className="section-center services-center">
            {services.map((service) => { return (
                <article className="service" key={service.id}>
                    <span className="service-icon">
                        <i className={service.icon}></i>
                    </span>
                    <div className="service-info">
                        <h4 className="service-title">{service.title}</h4>
                        <p className="service-text">{service.text}</p>
                    </div>
                </article>
                );
            })}

            {/* <!-- first icon --> */}
            {/* <article className="service">
                <span className="service-icon">
                    <i className="fa-solid fa-champagne-glasses"></i>
                </span>
                <div className="service-info">
                    <h4 className="service-title">champagne party</h4>
                    <p className="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!</p>
                </div>
            </article> */}

            {/* <!-- second icon --> */}
            {/* <article className="service">
                <span className="service-icon">
                    <i className="fa-solid fa-umbrella-beach"></i>
                </span>
                <div className="service-info">
                    <h4 className="service-title">sun & beach</h4>
                    <p className="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!</p>
                </div>
            </article> */}

            {/* <!-- third icon --> */}
            {/* <article className="service">
                <span className="service-icon">
                    <i className="fa-solid fa-face-grin-hearts"></i>
                </span>
                <div className="service-info">
                    <h4 className="service-title">amazing comfort</h4>
                    <p className="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!</p>
                </div>
            </article> */}
        </div>
    </section> </>
  )
}

export default Services