import './App.scss';

import { useState } from 'react';

import { Screens } from './components/screens';

const SCREENS = {
  characterSelect: 'characterSelect',
  traits: 'traits',
}

function App() {
  const [screen, setScreen] = useState(SCREENS.characterSelect);
  const [selectedCharacter, setSelectedCharacter] = useState();

  function onSelectCharacter(character) {
    setSelectedCharacter(character);
    setScreen(SCREENS.traits);
  }

  function renderScreen() {
    switch(screen) {
      case SCREENS.traits:
        return <Screens.TraitGrid character={selectedCharacter} />
      case SCREENS.characterSelect:
        return <Screens.CharacterSelect onSelect={onSelectCharacter} />
      default:
        return null;
    }
  }

  return (
    <div className="app">
      {renderScreen()}
    </div>
  );
}

export default App;
