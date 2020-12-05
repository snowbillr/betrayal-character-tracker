import './App.scss';

import { useState } from 'react';

import { Screens } from './components/screens';

const SCREENS = {
  characterSelect: 'characterSelect',
  traits: 'traits',
}

function App() {
  const [screen, setScreen] = useState(SCREENS.characterSelect);

  function renderScreen() {
    switch(screen) {
      case SCREENS.traits:
        return <Screens.TraitGrid />
      case SCREENS.characterSelect:
        return <Screens.CharacterSelect />
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
