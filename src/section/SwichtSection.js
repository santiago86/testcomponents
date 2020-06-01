import React from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import SwichtCo from "../components/swichtCo"

const SwichtSection = () => {
  const customBorder = {
    border: "1px solid #0000005D",
    padding: "2px 9px",
  }
  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <td style={customBorder}>
                <strong>name: </strong> string
              </td>
              <td style={customBorder}>
                <strong>label: </strong> string
              </td>
              <td style={customBorder}>
                <strong>checked: </strong> bool
              </td>
              <td style={customBorder}>
                <strong>handleChange: </strong> function
              </td>
              <td style={customBorder}>
                <strong>disabled: </strong> bool
              </td>
            </tr>
            <tr>
              <td style={customBorder}>Item name </td>
              <td style={customBorder}>WCAG Aria label</td>
              <td style={customBorder}>Set manually enabled</td>
              <td style={customBorder}>
                Trigger some function when state changes
              </td>
              <td style={customBorder}>Set manually disabled</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          width: "550px",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h2>Normal</h2>
          <SwichtCo name="custom swicht" handleChange={console.log} />
        </div>
        <div>
          <h2>Disabled-checked</h2>
          <SwichtCo name="custom swicht" disabled checked />
        </div>
        <div>
          <h2>Disabled </h2>
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
    </>
  )
}
export default SwichtSection
