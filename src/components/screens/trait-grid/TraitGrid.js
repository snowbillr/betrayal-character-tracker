import { Trait } from "../../trait/Trait";

import "./TraitGrid.scss";

export function TraitGrid({ character }) {
  return (
    <>
      <h1>{character.name}</h1>
      <div className="trait-grid">
        <Trait name="might" values={character.traits.might.values} initialValueIndex={character.traits.might.initialIndex} />
        <Trait name="sanity" values={character.traits.sanity.values} initialValueIndex={character.traits.sanity.initialIndex} />
        <Trait name="speed" values={character.traits.speed.values} initialValueIndex={character.traits.speed.initialIndex} />
        <Trait name="knowledge" values={character.traits.knowledge.values} initialValueIndex={character.traits.knowledge.initialIndex} />
      </div>
    </>
  );
}
