//react libraries
import {Link} from 'react-router-dom';

function Games(props) {

  return (
    <main className="page__main">
      <section className="main__hero">
        <h2 className="main__hero--title">Welcome</h2>
        <h3 className="main__hero--subtitle">Choose a game</h3>
      </section>
      <section>
        <article>
          <img src="" alt="Memory game"/>
            <h4>Memory game. Discover the most fantastic creatures</h4>
            <Link to='/games/memory-game'>Play</Link>
        </article>
        <article>
          <img src="" alt="Whack a sheep"/>
            <h4>Whack-A-Sheep. Will you be able to beat Tartalo eating sheeps?</h4>
            <Link to='/games/whack-a-sheep'>Play</Link>
        </article>
        <article>
          <img src="" alt="Connect four"/>
            <h4>Connect 4. Basque games</h4>
            <Link to='/games/connect-four'>Play</Link>
        </article>
      </section>
    </main>
  );
}

Games.propTypes = {

};

export default Games;