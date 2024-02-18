import './header.css'
import data from './data'
// import AOS from 'aos'
// import 'aos/dist/aos.css';
// import React,{useEffect} from "react";
import AnmolPic from '../../assets/My pic.jpg'

const Header = () => {
  // useEffect(() => {
  //   AOS.init(300);
  // }, [])
  return (
    <header id='header'>
      <div className="container header__container">
        <div className='profile_pic' data-aos="fade-right">
          <img src={AnmolPic} alt="My Self" />
        </div>
        <h3 data-aos="fade-right">Anmol Parsad</h3>
        <p data-aos="fade-right">
          Heyy! My name is Anmol.Young Selfmade Artist from jalandhar,Punjab.Making People Happy by 
          providing them quality work in good price.Check My work Below!
        </p>
        <div data-aos="fade-right" className="header__btn">
          <a href="#services" className='btn primary'>My work</a>
          <a href="#contact" className='btn light'>Contact</a>
        </div>
        <div className="header__socials" data-aos="fade-right">
          {
            data.map(item => <a key={item.id} href={item.link} target='_blank' rel="noreferrer"> {item.icon} </a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
