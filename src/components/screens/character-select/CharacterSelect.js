import characterData from "../../../data/characters.json";

import "./CharacterSelect.scss";

import { MightIcon } from '../../icons/MightIcon';
import { SpeedIcon } from '../../icons/SpeedIcon';
import { SanityIcon } from '../../icons/SanityIcon';
import { KnowledgeIcon } from '../../icons/KnowledgeIcon';
import { TraitSlider } from '../../trait-slider/TraitSlider';

import { CharacterPortraitUtil } from "../../../utils/character-portrait-util";

export function CharacterSelect({ onSelect }) {
  return (
    <div className="character-select">
      <h1 className="title">Choose your character</h1>
      {characterData.map(character => {
        return (
          <div className="character">
            <img className="portrait" src={CharacterPortraitUtil.portraitForCharacter(character.id)} alt={character.name} />
            <h2 className="name">{character.name}</h2>
            <div className="traits">
              <div className="trait">
                <MightIcon color="#A0C151" />
                <TraitSlider controlsEnabled={false} values={character.traits.might.values} initialValueIndex={character.traits.might.initialIndex} size="sm" />
              </div>
              <div className="trait">
                <SpeedIcon color="#A0C151" />
                <TraitSlider controlsEnabled={false} values={character.traits.speed.values} initialValueIndex={character.traits.speed.initialIndex} size="sm" />
              </div>
              <div className="trait">
                <SanityIcon color="#A0C151" />
                <TraitSlider controlsEnabled={false} values={character.traits.sanity.values} initialValueIndex={character.traits.sanity.initialIndex} size="sm" />
              </div>
              <div className="trait">
                <KnowledgeIcon color="#A0C151" />
                <TraitSlider controlsEnabled={false} values={character.traits.knowledge.values} initialValueIndex={character.traits.knowledge.initialIndex} size="sm" />
              </div>
            </div>
            <button className="select-button" onClick={() => onSelect(character)}>Choose {character.name.split(" ")[0]}</button>
          </div>
        );
      })}

    </div>
  );
}
