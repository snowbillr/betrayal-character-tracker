import { KnowledgeIcon } from '../../icons/KnowledgeIcon';
import { MightIcon } from '../../icons/MightIcon';
import { SanityIcon } from '../../icons/SanityIcon';
import { SpeedIcon } from '../../icons/SpeedIcon';
import "./CharacterTracker.scss";

import { Trait } from "../../trait/Trait";

import { CharacterPortraitUtil } from "../../../utils/character-portrait-util";

export function CharacterTracker({ character }) {
  return (
    <div className="character-tracker">
      <h1 className="character-name">{character.name}</h1>
      <img className="character-portrait" src={CharacterPortraitUtil.portraitForCharacter(character.id)} alt={character.name} />
        <div className="traits">
          <Trait
            name="might"
            icon={<MightIcon color="#A0C151"/>}
            values={character.traits.might.values}
            initialValueIndex={character.traits.might.initialIndex}
          />
          <Trait
            name="sanity"
            icon={<SanityIcon color="#A0C151" />}
            values={character.traits.sanity.values}
            initialValueIndex={character.traits.sanity.initialIndex}
          />
          <Trait
            name="speed"
            icon={<SpeedIcon color="#A0C151" />}
            values={character.traits.speed.values}
            initialValueIndex={character.traits.speed.initialIndex}
          />
          <Trait
            name="knowledge"
            icon={<KnowledgeIcon color="#A0C151" />}
            values={character.traits.knowledge.values}
            initialValueIndex={character.traits.knowledge.initialIndex}
          />
      </div>
    </div>
  );
}
