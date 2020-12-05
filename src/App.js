import './App.scss';

import { Trait } from './components/trait/Trait';

function App() {
  return (
    <div className="app">
      <div className="trait-grid">
        <Trait name="might" />
        <Trait name="sanity" />
        <Trait name="speed" />
        <Trait name="knowledge" />
      </div>
    </div>
  );
}

export default App;
