import characterData from "../../../data/characters.json";

import brandonJaspers from "../../../assets/images/brandon-jaspers.png";
import darrenWilliams from "../../../assets/images/darren-williams.png";
import fatherRhinehardt from "../../../assets/images/father-rhinehardt.png";
import heatherGranville from "../../../assets/images/heather-granville.png";
import jennyLeclerc from "../../../assets/images/jenny-leclerc.png";
import madameZostra from "../../../assets/images/madame-zostra.png";
import missyDubourde from "../../../assets/images/missy-dubourde.png";
import oxBellows from "../../../assets/images/ox-bellows.png";
import peterAkimoto from "../../../assets/images/peter-akimoto.png";
import professorLongfellow from "../../../assets/images/professor-longfellow.png";
import vivianLopez from "../../../assets/images/vivian-lopez.png";
import zoeIngstrom from "../../../assets/images/zoe-ingstrom.png";

import "./CharacterSelect.scss";
import { MightIcon } from '../../icons/MightIcon';
import { SpeedIcon } from '../../icons/SpeedIcon';
import { SanityIcon } from '../../icons/SanityIcon';
import { KnowledgeIcon } from '../../icons/KnowledgeIcon';
import { TraitSlider } from '../../trait-slider/TraitSlider';

function portraitForCharacter(characterId) {
  switch(characterId) {
    case "brandon-jaspers": return brandonJaspers;
    case "darren-williams": return darrenWilliams;
    case "father-rhinehardt": return fatherRhinehardt;
    case "heather-granville": return heatherGranville;
    case "jenny-leclerc": return jennyLeclerc;
    case "madame-zostra": return madameZostra;
    case "missy-dubourde": return missyDubourde;
    case "ox-bellows": return oxBellows;
    case "peter-akimoto": return peterAkimoto;
    case "professor-longfellow": return professorLongfellow;
    case "vivian-lopez": return vivianLopez ;
    case "zoe-ingstrom": return zoeIngstrom ;
    default: return null;
  }
}

export function CharacterSelect({ onSelect }) {
  return (
    <div className="character-select">
      <h1 className="title">Choose your character</h1>
      {characterData.map(character => {
        return (
          <div className="character">
            <img className="portrait" src={portraitForCharacter(character.id)} alt={character.name} />
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
