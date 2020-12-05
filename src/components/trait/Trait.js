import "./Trait.scss";

import { TraitSlider } from '../trait-slider/TraitSlider';

export function Trait({ name }) {
  return (
    <div className="trait">
      <TraitSlider />
      <h2 className="name">{name}</h2>
    </div>
  )
}
