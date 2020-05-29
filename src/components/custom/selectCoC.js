import React from "react"
import PropTypes from "prop-types"
import theme from "../../theme"
import styles from "./styles/selectStyles"
import OptionCoC from "./optionCoC"

/**
 * Sets the placeholder to be shown in the select when it's empty
 * @param {string} text Text to be shown in the placeholder.
 */
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
  /** Inmutable value for the state of the dropdown menu (open or closed) */
  const [showDropdown, setMenu] = React.useState(false)
  const empty = setPlaceholder(placeholder)

  /**
   * Sets the initial style for the components
   * @param {boolean} error If true, it will render the component as an error
   * @param {node} icon If present, it will render the component with an icon
   */
  const style = styles({ error, icon })

  /** Adds the className to the icon if present */
  let Icon
  if (icon) {
    Icon = React.cloneElement(icon, { className: style.icon })
  }

  /**
   * Reactive function that sets the state of the dropdown menu.
   * This is done by selecting the `select` component, a `value` of the dropdown-Menu, or `onBlur`
   * @param {boolean} open If the dropdown-Menu should be open (true) or closed (false)
   */
  function deployDropdown(open) {
    setMenu(open)
  }
  /**
   * Sets the value for the current select
   * This is done by selecting a `value` of the dropdown-Menu
   * @param {event} e event corresponding to the action just performed
   * @param {string || number } selected value of the item selected in the dropdown-Menu
   */
  function setValue(e, selected) {
    deployDropdown(false)
    onSelect({ ...e, target: { value: selected } })
  }
  /**
   * Action to be performed if there was a blur on the Select
   * If the blur was performed when `selecting an option`, it will act different
   * @param {event} e event corresponding to the action just performed
   */
  function onBlur(e) {
    if (!e.currentTarget.parentNode.parentNode.contains(e.relatedTarget)) {
      deployDropdown(false)
    }
  }
  /**
   * It will detect the action performed by the keys.
   * If `enter` or `space` it will detect them as if they were done to enter de dropdown-Menu
   * If `esc` or `Tab` it will detect them as if they want to exit the dropdown-Menu
   * @param {event} e event corresponding to the action just performed
   */
  function onKeyDown(e) {
    if (e.keyCode === 32 || e.keyCode === 13) deployDropdown(true)
    if (e.keyCode === 27 || e.keyCode === 9) deployDropdown(false)
  }

  /**
   * Sets the buttons corresponding to each option
   * @param {[OptionCoC]} children Children passed to the select.
   */
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
        {showDropdown && (
          <div className={style.dropdown} id="dropdown-Menu">
            {dropdownMenu}
          </div>
        )}
      </div>
    </div>
  )
}

SelectCoC.propTypes = {
  /**
   * The children are the `options` for the respective select, must be type `OptionCoC`
   */
  children: PropTypes.node,

  /**
   * A string which will be shown at the top of the input. It can be empty
   */
  label: PropTypes.string,

  /**
   * Parameter set when there is an error in the select.
   *
   * If `true` the element will render with error style properties
   */
  error: PropTypes.bool,

  /**
   * Current value taken by the select. Usually is a string of a number
   * It is `required`, even if it has to be empty
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /**
   * Text that will be shown as the placeholder of the select.
   * If empty, it will show nothing.
   */
  placeholder: PropTypes.string,

  /**
   * Parameter set when there is an error in the select.
   *
   * If `true` the element will render with disabled style properties and won't be interactable
   */
  disabled: PropTypes.bool,

  /**
   * Node with the properties for the icon shown at the right of the select
   *
   * If `undefined`it will show nothing
   * If added, it will stylize the select component and add the icon
   */
  icon: PropTypes.node,

  /**
   * Callback fired when the value is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onSelect: PropTypes.func,
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
