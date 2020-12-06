import "./Trait.scss";

import { TraitSlider } from '../trait-slider/TraitSlider';

export function Trait({ name, values, initialValueIndex }) {
  return (
    <div className="trait">
      <TraitSlider values={values} initialValueIndex={initialValueIndex} size="sm" />
      <h2 className="name">{name}</h2>
    </div>
  )
}
