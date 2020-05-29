import React from "react"
import PropTypes from "prop-types"

const OptionCoC = (props) => {
  const {
    children,
    value,
    selected,
    styles,
    highlighted,
    index,
    setValue,
    onHover,
    continuePropagation,
  } = props

  /**
   * Function callback that allows me to interact with the buttons from the dropdown-Menu
   */
  const onKeyDown = React.useCallback(
    (e) => {
      if (e.keyCode === 32 || e.keyCode === 13) {
        setValue(e, value)
      } else {
        e.stopPropagation()
        e.preventDefault()
        continuePropagation(e)
      }
    },
    [setValue, value, continuePropagation]
  )

  /**
   * Component lecture to set the state of focus for the select component
   * Also works to use the keyPressHandler events
   */
  const btn = React.useRef()
  React.useEffect(() => {
    if (highlighted) {
      btn.current.focus()
    }
    const keyPressHandler = (e) => {
      if (highlighted) onKeyDown(e)
      btn.current.blur()
    }

    document.addEventListener("keydown", keyPressHandler)
    return () => {
      document.removeEventListener("keydown", keyPressHandler)
    }
  }, [highlighted, btn, onKeyDown])

  return [
    <button
      value={value}
      type="button"
      className={
        styles({ selected: selected === value || highlighted }).dropdownContent
      }
      onClick={(e) => setValue(e, value)}
      onKeyDown={(e) => onKeyDown(e)}
      key={value}
      tabIndex={highlighted ? "0" : "-1"}
      ref={btn}
      aria-label={children}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(index)}
    >
      {children}
    </button>,
    <hr key="hr" className={styles().dropdownDivider} />,
  ]
}

OptionCoC.propTypes = {
  /**
   * Information that will display inside the option
   */
  children: PropTypes.node.isRequired,

  /**
   * Value corresponding to the current option.
   * `value`can be either a string or a number
   * It is required. It cannot be empty ("")
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /**
   * Value currently selected in the Select component
   * `value`can be either a string or a number
   * `MUST NOT BE SET BY OUTSIDE THE SelectCoC`
   */

  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Function to set the behavior when selected.
   * `MUST NOT BE SET BY OUTSIDE THE SelectCoC`
   */
  setValue: PropTypes.func,

  /**
   * Function to set the index to current position.
   * `MUST NOT BE SET BY OUTSIDE THE SelectCoC`
   */
  onHover: PropTypes.func,

  /**
   * Function to keep reading the keys inside the select
   * `MUST NOT BE SET BY OUTSIDE THE SelectCoC`
   */
  continuePropagation: PropTypes.func,

  /**
   * function to set the style
   * `MUST NOT BE SET BY OUTSIDE THE SelectCoC`
   */
  styles: PropTypes.func,
}

export default OptionCoC
