import "./TraitSlider.scss";

import { useState } from "react";

export function TraitSlider() {
  const values = [2, 3, 3, 3, 5];
  const [currentValueIndex, setCurrentValueIndex] = useState(2);

  function nextValue() {
    if (currentValueIndex === values.length - 1) return;

    setCurrentValueIndex(currentValueIndex + 1);
  }

  function previousValue() {
    if (currentValueIndex === 0) return;

    setCurrentValueIndex(currentValueIndex - 1);
  }

  return (
    <div className="trait-slider">
      <button className="button" onClick={previousValue} disabled={currentValueIndex === 0}>&minus;</button>
      <div className="values">
        {values.map((value, i) => {
          const classNames = ["value"];
          if (i === currentValueIndex) classNames.push("current");

          const separator = i < values.length - 1
            ? <div className="separator" key={`separator-{i}`}>•</div>
            : null;

          return (
            <>
              <div className={classNames.join(" ")}>{value}</div>
              {separator}
            </>
          );
        })}
      </div>
      <button className="button" onClick={nextValue} disabled={currentValueIndex === values.length - 1}>+</button>
    </div>
  );
}
