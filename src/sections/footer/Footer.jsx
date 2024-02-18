import './footer.css'
import data from '../header/data.js'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
          <div className="footer_group">
          <div className="h5">
              <h5>Visit to our Social links</h5>
              </div>
            <div className="socials">
             
              {
                data.map(item => <a key={item.id} href={item.link} target='_blank' rel="noreferrer"> {item.icon} </a>)
              }
            </div>
            <div className="h4">
            <h4>© 2024 An studio Art. All rights reserved</h4>
            </div>
          </div>
        </div>
       </footer>
  )
}

export default Footer
