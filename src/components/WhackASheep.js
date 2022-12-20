//react libraries
import {Link} from 'react-router-dom';

function WhackASheep(props) {

    return (
      <main className="whack__main">
        <h2>Whack a sheep</h2>
        <h3>Score: <span id="js-whack-score"></span></h3>+
        <h3>Seconds left: <span id="js-whack-time-left"></span></h3>
        <div className="js-whack-grid">
            <div className="square" id="1"></div>
            <div className="square" id="2"></div>
            <div className="square" id="3"></div>
            <div className="square" id="4"></div>
            <div className="square" id="5"></div>
            <div className="square" id="6"></div>
            <div className="square" id="7"></div>
            <div className="square" id="8"></div>
            <div className="square" id="9"></div>
        </div>
        <Link to='/'>Return</Link>
      </main>
      );
  }
  
  WhackASheep.propTypes = {
  
  };
  
  export default WhackASheep;