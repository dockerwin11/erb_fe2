import React from 'react';
import Title from './Title';
import { tours } from '../data';


function Tours() {
  return ( <>
    {/* <!-- tour --> */}
    <section className="section" id="tours">
        <Title main_title="featured" sub_title="tours" />
        {/* <div className="section-title">
            <h2>featured <span>tours</span></h2>
        </div> */}
        <div className="section-center featured-center">

            
            { tours.map ((tour) => { return ( <article className="tour-card" key={tour.id}>
                <div className="tour-img-container">
                    <img src={tour.image} alt="" className="tour-img" />
                    <p className="tour-date">{tour.date}</p>
                </div>
                <div className="tour-info">
                    <h4>{tour.title}</h4>
                    <p>{tour.info}</p>
                </div>
                <div className="tour-footer">
                    <ul className="tour-footer-info">
                        <li><i className="fa-solid fa-map"></i>{tour.location}</li>
                        <li>{tour.duration}</li>
                        <li>{tour.cost}</li>
                    </ul>
                </div></article>); })}
                
            {/* <!-- first tour --> */}
            {/* <article className="tour-card">
                <div className="tour-img-container">
                    <img src=".images/thailand.jpg" alt="" className="tour-img" />
                    <p className="tour-date">Aug 26th, 2024</p>
                </div>
                <div className="tour-info">
                    <h4>Tibet Adventure</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Aliquam voluptatibus, explicabo cumque provident placeat ad a molestias velit corrupti? Voluptas.
                    </p>
                </div>                
                <div className="tour-footer">
                    <ul className="tour-footer-info">
                        <li><i className="fa-solid fa-map"></i>Thailand</li>
                        <li>6 days</li>
                        <li>from $2100</li>
                    </ul>
                </div>
            </article> */}

            {/* <!-- second tour --> */}
            {/* <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/switzerland.jpg" alt="" className="tour-img" />
                    <p className="tour-date">Aug 26th, 2024</p>
                </div>
                <div className="tour-info">
                    <h4>Tibet Adventure</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Aliquam voluptatibus, explicabo cumque provident placeat ad a molestias velit corrupti? Voluptas.
                    </p>
                </div>
                <div className="tour-footer">
                    <ul className="tour-footer-info">
                        <li><i className="fa-solid fa-map"></i>Switzerland</li>
                        <li>6 days</li>
                        <li>from $2100</li>
                    </ul>
                </div>   
            </article> */}

            {/* <!-- third tour --> */}
            {/* <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/japan1.jpg" alt="" className="tour-img" />
                    <p className="tour-date">Aug 26th, 2024</p>
                </div>
                <div className="tour-info">
                    <h4>Tibet Adventure</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Aliquam voluptatibus, explicabo cumque provident placeat ad a molestias velit corrupti? Voluptas.
                    </p>
                </div>
                <div className="tour-footer">
                    <ul className="tour-footer-info">
                        <li><i className="fa-solid fa-map"></i>Japan</li>
                        <li>6 days</li>
                        <li>from $2100</li>
                    </ul>
                </div>
            </article> */}

            {/* <!-- fourth tour --> */}
            {/* <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/korea1.jpg" alt="" className="tour-img" />
                    <p className="tour-date">Aug 26th, 2024</p>
                </div>
                <div className="tour-info">
                    <h4>Tibet Adventure</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Aliquam voluptatibus, explicabo cumque provident placeat ad a molestias velit corrupti? Voluptas.
                    </p>
                </div>    
                <div className="tour-footer">
                    <ul className="tour-footer-info">
                        <li><i className="fa-solid fa-map"></i>Korea</li>
                        <li>6 days</li>
                        <li>from $2100</li>
                    </ul>
                </div>
            </article> */}
        </div>
    </section> </>
  )
}

export default Tours