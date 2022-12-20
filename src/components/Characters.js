//react libraries
import {Link} from 'react-router-dom';
//components
import Filters from './Filters';
import CharacterList from './CharacterList';
//styles
import '../styles/components/Characters.scss';

function Characters(props) {

  return (
    <>
      <main className='main__chars'>
            <Filters/>
            <CharacterList characterData={props.characterData}/>
          </main>
          <footer className='footer__chars'>
          <nav className='footer__chars--nav'>
            <Link to='/' className='footer__landing--nav--link'>Home</Link>
            <Link to='/games' className='footer__landing--nav--link'>Search</Link>
          </nav>
        </footer>
    </>
    );
}

Characters.propTypes = {

};

export default Characters;