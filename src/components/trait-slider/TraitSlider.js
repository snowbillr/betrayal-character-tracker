import "./TraitSlider.scss";

import { useEffect, useState } from "react";

/*
 * `size` is either "md" or "sm"
 */
export function TraitSlider({ controlsEnabled = true, values, initialValueIndex, size="md", onChange }) {
  const [currentValueIndex, setCurrentValueIndex] = useState(initialValueIndex);

  useEffect(() => {
    onChange && onChange(values[currentValueIndex]);
  }, [currentValueIndex, onChange, values]);

  function nextValue() {
    if (currentValueIndex === values.length - 1) return;

    setCurrentValueIndex(currentValueIndex + 1);
  }

  function previousValue() {
    if (currentValueIndex === 0) return;

    setCurrentValueIndex(currentValueIndex - 1);
  }

  return (
    <div className={`trait-slider ${size}`}>
      {controlsEnabled ? <button className="button" onClick={previousValue} disabled={currentValueIndex === 0}>&minus;</button> : null}
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
      {controlsEnabled ? <button className="button" onClick={nextValue} disabled={currentValueIndex === values.length - 1}>+</button> : null}
    </div>
  );
}
