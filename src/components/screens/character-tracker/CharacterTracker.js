import { KnowledgeIcon } from '../../icons/KnowledgeIcon';
import { MightIcon } from '../../icons/MightIcon';
import { SanityIcon } from '../../icons/SanityIcon';
import { SpeedIcon } from '../../icons/SpeedIcon';
import { Trait } from "../../trait/Trait";

import "./CharacterTracker.scss";

export function CharacterTracker({ character }) {
  return (
    <div className="character-tracker">
      <h1 className="character-name">{character.name}</h1>
        <div className="traits">
          <div>
            <Trait
              name="might"
              icon={<MightIcon color="#EFC9A7"/>}
              values={character.traits.might.values}
              initialValueIndex={character.traits.might.initialIndex}
            />
          </div>
        <Trait
          name="sanity"
          icon={<SanityIcon color="#EFC9A7" />}
          values={character.traits.sanity.values}
          initialValueIndex={character.traits.sanity.initialIndex}
        />
        <Trait
          name="speed"
          icon={<SpeedIcon color="#EFC9A7" />}
          values={character.traits.speed.values}
          initialValueIndex={character.traits.speed.initialIndex}
        />
        <Trait
          name="knowledge"
          icon={<KnowledgeIcon color="#EFC9A7" />}
          values={character.traits.knowledge.values}
          initialValueIndex={character.traits.knowledge.initialIndex}
        />
      </div>
    </div>
  );
}
