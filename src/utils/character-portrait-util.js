import brandonJaspers from "../assets/images/brandon-jaspers.png";
import darrenWilliams from "../assets/images/darren-williams.png";
import fatherRhinehardt from "../assets/images/father-rhinehardt.png";
import heatherGranville from "../assets/images/heather-granville.png";
import jennyLeclerc from "../assets/images/jenny-leclerc.png";
import madameZostra from "../assets/images/madame-zostra.png";
import missyDubourde from "../assets/images/missy-dubourde.png";
import oxBellows from "../assets/images/ox-bellows.png";
import peterAkimoto from "../assets/images/peter-akimoto.png";
import professorLongfellow from "../assets/images/professor-longfellow.png";
import vivianLopez from "../assets/images/vivian-lopez.png";
import zoeIngstrom from "../assets/images/zoe-ingstrom.png";

export const CharacterPortraitUtil = {
  portraitForCharacter(characterId) {
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
}
