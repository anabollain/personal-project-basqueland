//react libraries
import {Link} from 'react-router-dom';
//styles
import '../styles/components/Landing.scss'

function Landing(props) {

  return (
    <>
      <main className='main__landing'>
        <button className='main__landing--btn'>Discover today's character</button>
      </main>
      <footer className='footer__landing'>
        <nav className='footer__landing--nav'>
          <Link to='/characters' className='footer__landing--nav--link'>All</Link>
          <Link to='/games' className='footer__landing--nav--link'>Play</Link>
        </nav>
      </footer>
    </>
    );
}

Landing.propTypes = {

};

export default Landing;