import React from "react"
import PropTypes from "prop-types"

const OptionCoC = (props) => {
  const { children, value, setValue, selected, styles } = props
  return [
    <button
      value={value}
      type="button"
      className={styles({ selected: selected === value }).dropdownContent}
      onClick={(e) => setValue(e, value)}
      key={value}
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
   * function to set the style
   * `MUST NOT BE SET BY OUTSIDE THE SelectCoC`
   */
  styles: PropTypes.func,
}

export default OptionCoC
