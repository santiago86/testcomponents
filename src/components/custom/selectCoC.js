import React from "react"
import PropTypes from "prop-types"
import theme from "../../theme"
import styles from "./styles/selectStyles"

/**
 * Sets the placeholder to be shown in the select when it's empty
 * @param {string} text Text to be shown in the placeholder.
 */
const setPlaceholder = (text) => {
  return (
    <option value="" key="" style={{ display: "none" }}>
      {text}
    </option>
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
  const [showDropdownPrev, setMenuPrev] = React.useState(false)
  /** Inmutable value for the focus in the selector */
  const [currentFocus, setFocus] = React.useState(-1)
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

  /** Component lecture to set the state of focus for the select component */
  const selector = React.useRef()
  React.useEffect(() => {
    if (!showDropdown && showDropdownPrev) {
      selector.current.focus()
    }
  }, [showDropdown, showDropdownPrev, selector])

  /**
   * Reactive function that sets the state of the dropdown menu.
   * This is done by selecting the `select` component, a `value` of the dropdown-Menu, or `onBlur`
   * @param {boolean} open If the dropdown-Menu should be open (true) or closed (false)
   */
  function deployDropdown(open) {
    setMenuPrev(showDropdown)
    setMenu(open)
    setFocus(-1)
  }

  /**
   * Function that allows me to change between elements in the dropdown-Menu
   * @param {number (1, -1)} step Which element of the array will be read later
   */
  function changeFocus(step) {
    if (children) {
      let focus = currentFocus + step
      if (focus < 0) {
        focus = children.length - 1
      } else if (focus >= children.length) {
        focus = 0
      }
      setFocus(focus)
    }
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
    if (e.keyCode === 40 && showDropdown) changeFocus(1)
    if (e.keyCode === 38 && showDropdown) changeFocus(-1)
  }

  function onHover(index) {
    setFocus(index)
  }

  /**
   * Sets the value of the children to display
   * @param {number} index index of the button in the array
   * @param {value} selected checks if this button is the one selected
   * @param {styles} styles sets the styles
   * @param {boolean} highlighted checks if this button is the one highlighted
   * @param {function} onHover perorms a change of index when hovering a button
   * @param {function} setValue perorms the setValue task
   * @param {function} continuePropagation reads the key inputs inside the buttons
   */
  const items = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      index,
      selected: value,
      styles,
      highlighted: currentFocus === index,
      onHover,
      setValue,
      continuePropagation: onKeyDown,
    })
  })

  /**
   * Sets the value to be displayed as an option in the select
   */
  let currentOptionValue
  if (children && value !== "") {
    const currentOption = children.filter((button) => {
      return button.props.value === value
    })
    currentOptionValue = currentOption[0].props.children
  }
  return (
    <div>
      <span style={theme.typography.body2}>{label}</span>
      <div className={style.component}>
        <select
          tabIndex={!showDropdown ? 0 : -1}
          ref={selector}
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
          <option style={{ display: "none" }} value={value}>
            {currentOptionValue}
          </option>
        </select>
        {Icon}
        {showDropdown && (
          <div className={style.dropdown} id="dropdown-Menu">
            {items}
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
