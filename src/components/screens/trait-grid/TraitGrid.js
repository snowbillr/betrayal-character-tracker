import { Trait } from "../../trait/Trait";

import "./TraitGrid.scss";

export function TraitGrid() {
  return (
    <div className="trait-grid">
      <Trait name="might" />
      <Trait name="sanity" />
      <Trait name="speed" />
      <Trait name="knowledge" />
    </div>
  );
}
