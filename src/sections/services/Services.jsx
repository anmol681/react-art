import './services.css'
import Draw1 from   '../../assets/Draw-1.jpg'
import Draw2 from '../../assets/Draw-2.jpg'
import Draw6 from '../../assets/Draw-6.jpg'
import Draw from '../../assets/draw.jpg'
// import AOS from 'aos'
// import 'aos/dist/aos.css';
// import React,{useEffect} from "react";


const Services = () => {
  // useEffect(() => {
  //   AOS.init(2000);
  // }, [])
  return (
    <section id='services'>
        <h2 data-aos="fade-left">Services</h2>
        <p data-aos="fade-left">I give you the best in all the services below</p>
        <div className="container services__container">
         <div className="cards__conatiner ">
          {/* 1 div */}
          <div className='card_cont' data-aos="fade-left">
              <div className="draw-pic">
            <img src={Draw1} alt="1" />
              </div>
            <div className="img_detail">
              <h3>21×27cm</h3>
              <p>This is 21*27 cm Graphite sketch of my client</p>
            </div>
            <a href="mailto:anmolparsad6303@gmail.com" className='btn primary'>Order Now</a>
          </div>
          {/* 2 div */}
          <div className='card_cont ' data-aos="fade-left">
            <div className='draw-pic'>
            <img src={Draw2} alt="2" />
            </div>
            <div className="img_detail">
              <h3>21×27cm</h3>
              <p>This is 21*27 cm pen sketch of my client</p>
            </div>
            <a href="mailto:anmolparsad6303@gmail.com" className='btn primary'>Order Now</a>
          </div>
          {/* 3 div */}
          <div className='card_cont' data-aos="fade-left">
          <div className='draw-pic'>
            <img src={Draw6} alt="3" />
            </div>
            <div className="img_detail">
              <h3>27×35cm</h3>
              <p>This is 27×35cm cm charcoal sketch of my client</p>
            </div>
            <a href="mailto:anmolparsad6303@gmail.com" className='btn primary'>Order Now</a>
          </div>
          {/* 4 div */}
          <div className='card_cont' data-aos="fade-left">
          <div className='draw-pic'>
            <img src={Draw} alt="4" />
            </div>
            <div className="img_detail">
              <h3>30×42cm</h3>
              <p>This is 30×42cm cm charcoal and graphite sketch of my client</p>
            </div>
            <a href="mailto:anmolparsad6303@gmail.com" className='btn primary'>Order Now</a>
          </div>
         </div>
        </div>
    </section>
  )
}

export default Services
