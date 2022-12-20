//styles
import '../styles/components/CharacterItem.scss';

function CharacterItem({eachChar}) {

  return (
    <li className='char'>
      <img className='char__img' src={eachChar.photo} alt={eachChar.name} />
      <div className='char__text'>
        <h2 className='char__text--title'>{eachChar.name}</h2>
        <h3 className='char__text--subtitle'>{eachChar.origin}</h3>
      </div>
    </li>
    );
}

CharacterItem.propTypes = {

};

export default CharacterItem;