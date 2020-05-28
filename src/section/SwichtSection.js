import React from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import SwichtCo from "../components/swichtCo"

const SwichtSection = () => (
  <div style={{ display: "flex" }}>
    <div>
      <h2>Normal</h2>
      <SwichtCo name="custom swicht" />
    </div>
    <div>
      <h2>Disabled</h2>
      <SwichtCo name="custom swicht" disabled />
    </div>
    <div>
      <h2>FormControl</h2>
      <FormControlLabel
        control={<SwichtCo name="custom swicht" />}
        label="label"
      />
    </div>
  </div>
)
export default SwichtSection
