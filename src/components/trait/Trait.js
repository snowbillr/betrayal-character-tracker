import "./Trait.scss";

import { useState } from 'react';

import { DiceIcon } from "../icons/DiceIcon";

import { TraitSlider } from '../trait-slider/TraitSlider';

export function Trait({ name, values, initialValueIndex, icon }) {
  const [value, setValue] = useState(values[initialValueIndex]);

  function roll() {
    const numberOfDice = value;
    let rollValues = [];
    for (let i = 0; i < numberOfDice; i++) {
      const dieValue = Math.floor(Math.random() * (2 + 1));
      rollValues.push(dieValue);
    }

    const total = rollValues.reduce((sum, v) => sum + v, 0);

    alert(`${rollValues.join(' + ')} = ${total}`);
  }

  return (
    <div className="trait">
      <div className="trait-details">
        <div className="trait-icon">
          {icon}
        </div>
        <h2 className="trait-name">{name}</h2>
      </div>
      <TraitSlider values={values} initialValueIndex={initialValueIndex} onChange={setValue}/>
      <button className="trait-button" onClick={roll}>
        <DiceIcon color="#EFC9A7" />
        <span className="trait-button-label">Roll</span>
      </button>
    </div>
  )
}
