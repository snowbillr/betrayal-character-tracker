import "./Trait.scss";

import { TraitSlider } from '../trait-slider/TraitSlider';

export function Trait({ name, values, initialValueIndex, icon }) {
  return (
    <div className="trait">
      <TraitSlider values={values} initialValueIndex={initialValueIndex} size="sm" />
      <div className="trait-details">
        <div className="trait-icon">
          {icon}
        </div>
        <h2 className="trait-name">{name}</h2>
      </div>
    </div>
  )
}
