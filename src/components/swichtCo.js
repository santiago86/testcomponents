import React from "react"
import Switch from "@material-ui/core/Switch"
import PropTypes from "prop-types"
/* import FormControlLabel from "@material-ui/core/FormControlLabel"
 */
/**
 *
 */

const SwitchCo = ({ isDisable, name, color }) => {
  const [state, setState] = React.useState({
    checked: false,
  })
  const handleChange = (event) => {
    setState({ ...state, checked: event.target.checked })
  }

  return (
    <div>
      <Switch
        checked={state.checked}
        onChange={handleChange}
        disabled={isDisable}
        color={color}
        name={name}
        inputProps={{ "aria-label": `primary ${name}` }}
      />
    </div>
  )
}

SwitchCo.propTypes = {
  isDisable: PropTypes.bool,
  name: PropTypes.string,
  color: PropTypes.string,
}

SwitchCo.defaultProps = {
  isDisable: false,
  name: "Swicht",
  color: "primary",
}
export default SwitchCo
