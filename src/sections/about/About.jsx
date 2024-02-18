import './about.css'
import Billeimg from '../../assets/Billie_img.jpg'
// import AOS from 'aos'
// import 'aos/dist/aos.css';
// import React,{useEffect} from "react";

const About = () => {
  // useEffect(() => {
  //   AOS.init(2000);
  // }, [])
  return (
    <section id='about'>
        <div className="container about__container">
          <div className="left" data-aos="fade-left">
          <div className="img">
            <img src={Billeimg} alt="Work" />
          </div>
          </div>
          <div className="right__div" data-aos="fade-left">
            <h2 data-aos="fade-left">About Me</h2>
          <div className="__about" data-aos="fade-left">
            <h4>Anmol Parsad</h4>
            <p>⁕17 years old self made artist</p>
            <p>⁕+3 Years of Experience</p>
            <p>Believe in Art</p>
            <p>Let's Join the world together with artist.<br/>
              Creating the emotions in form of Art. Making <br/>
              the clients happy with portrait art.<br/>
              "Creativity takes courage".<br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
               Saepe cum impedit enim? Perferendis odit ut accusantium?<br/>
                Laudantium, iure ullam. Recusandae?
            </p>
          </div>
          </div>
        </div>
    </section>
  )
}

export default About
