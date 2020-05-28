import React from "react"
import PropTypes from "prop-types"
import theme from "../../theme"
import styles from "./styles/selectStyles"

const setPlaceholder = (text) => {
  return (
    <option value="" key="" style={{ display: "none" }}>
      {text}
    </option>
  )
}
function SelectCoC(props) {
  const { children, label, placeholder } = props
  const styleProps = { value: "" }
  return (
    <div>
      <span style={theme.typography.body2}>{label}</span>
      <select defaultValue="" className={styles(styleProps).root} {...props}>
        {setPlaceholder(placeholder)}
        {children}
      </select>
    </div>
  )
}

SelectCoC.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  // value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  placeholder: PropTypes.string,
  // startAdornment: PropTypes.node,
}

SelectCoC.defaultProps = {
  label: "",
  // startAdornment: undefined,
  placeholder: "",
  children: undefined,
}

export default SelectCoC
