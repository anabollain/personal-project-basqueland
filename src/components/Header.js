//react libraries
import {Link} from 'react-router-dom';
//styles
import '../styles/components/Header.scss';

function Header(props) {

  return (
    <header className="page__header">
            <Link to='/'className="page__header--link"><h1>Basqueland</h1></Link>
        </header>
    );
}

Header.propTypes = {

};

export default Header;