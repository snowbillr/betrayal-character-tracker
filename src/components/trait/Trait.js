import "./Trait.scss";

import { useState } from "react";
import { TraitSlider } from '../trait-slider/TraitSlider';

export function Trait({ name }) {
  const [value, setValue] = useState(5);

  return (
    <div className="trait">
      {/* <button className="trait-button decrement" onClick={() => setValue(value - 1)}>-</button>
      <div className="value">
        <div className="value-text">{value}</div>
      </div>
      <button className="trait-button increment" onClick={() => setValue(value + 1)}>+</button> */}
      <TraitSlider />
      <h2 className="name">{name}</h2>
    </div>
  )
}
