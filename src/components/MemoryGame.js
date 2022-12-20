//react libraries
import {Link} from 'react-router-dom';

function MemoryGame(props) {

  return (
    <div className="page">
      <main className="memo__main">
          <h2>Memory Game</h2>
          <div className="memo__main--grid js-memo-grid"></div>
          <h3>Score: <span className="js-memo-result">0</span></h3>
          <h3>Movements: <span className="js-memo-moves">0</span></h3>
          <Link className="memo__main--btn js-re-btn" to='/games/memory-game'>Restart</Link>
      </main>
    </div>
    );
}

MemoryGame.propTypes = {

};

export default MemoryGame;