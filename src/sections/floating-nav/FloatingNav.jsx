import './floatingnav.css'
import Nav from './Nav'
import data from './data'
import Scrollspy from 'react-scrollspy'

function FloatingNav() {
  return (
    <section id="floating__nav">
          <Scrollspy offset={-400} className='scrollspy' items={['header', 'about', 'services', 'contact']} currentClassName='active'>
              {
                data.map(item => <Nav key={item.id} item={item}/>)
              }
          </Scrollspy>
    </section>
  )
}

export default FloatingNav
