import React from "react"
import PropTypes from "prop-types"
import theme from "../../theme"
import styles from "./styles/selectStyles"
import OptionCoC from "./optionCoC"

const setPlaceholder = (text) => {
  return (
    <OptionCoC value="" key="" style={{ display: "none" }}>
      {text}
    </OptionCoC>
  )
}

function SelectCoC(props) {
  const {
    children,
    label,
    placeholder,
    onSelect,
    disabled,
    error,
    value,
    icon,
  } = props
  const [showDropdown, setMenu] = React.useState(false)
  const empty = setPlaceholder(placeholder)
  const style = styles({ error, icon })
  let Icon
  if (icon) {
    Icon = React.cloneElement(icon, { className: style.icon })
  }
  function deployDropdown(open) {
    setMenu(open)
  }
  function setValue(e, selected) {
    e.stopPropagation()
    deployDropdown(false)
    onSelect({ target: { value: selected } })
  }
  function onBlur(e) {
    if (!e.currentTarget.parentNode.parentNode.contains(e.relatedTarget)) {
      deployDropdown(false)
    }
  }
  function onKeyDown(e) {
    if (e.keyCode === 32 || e.keyCode === 13) deployDropdown(true)
    if (e.keyCode === 27 || e.keyCode === 9) deployDropdown(false)
  }

  // Generates the children
  const dropdownMenu = children
    ? children.map((child) => [
        <button
          type="button"
          className={
            styles({ selected: value === child.props.value }).dropdownContent
          }
          key={child.key}
          value={child.props.value}
          onClick={(e) => setValue(e, child.props.value)}
        >
          {child.props.children}
        </button>,
        <hr key="hr" className={style.dropdownDivider} />,
      ])
    : null
  return (
    <div>
      <span style={theme.typography.body2}>{label}</span>
      <div className={style.component}>
        <select
          value={value}
          className={style[value === "" ? "selectDefault" : "select"]}
          disabled={disabled}
          onChange={() => {}}
          onBlur={(e) => {
            onBlur(e)
          }}
          onClick={() => {
            deployDropdown(true)
          }}
          onKeyDown={(e) => {
            onKeyDown(e)
          }}
        >
          {empty}
          {children}
        </select>
        {Icon}
        {showDropdown && <div className={style.dropdown}>{dropdownMenu}</div>}
      </div>
    </div>
  )
}

SelectCoC.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  onSelect: PropTypes.func,
  error: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
}

SelectCoC.defaultProps = {
  label: "",
  icon: undefined,
  placeholder: "",
  children: undefined,
  onSelect: () => {},
  error: false,
  disabled: false,
}

export default SelectCoC
