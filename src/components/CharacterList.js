//components
import CharacterItem from './CharacterItem';
//styles
import '../styles/components/CharacterList.scss';


function CharacterList({characterData}) {

  const renderChar = () => {
    return characterData.map((eachChar)=>{
      return <CharacterItem key={eachChar.id} eachChar={eachChar}/>
    })
  }
  return (
    <>
      <h2 className='main__chars--title'>Basqueland</h2>
      <ul className='main__chars--list'>{renderChar()}</ul>
    </>
    );
}

CharacterList.propTypes = {

};

export default CharacterList;