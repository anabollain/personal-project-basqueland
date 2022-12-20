//react libraries
import {Link} from 'react-router-dom';

function ConnectFour(props) {

  return (
    <main>
          <div></div>
          <h2>Connect Four</h2>
          <h3>Score: <span>0</span></h3>
          <Link to='/'>Restart</Link>
    </main>
    );
}

ConnectFour.propTypes = {

};

export default ConnectFour;