import React from "react"
import PropTypes from "prop-types"
import DialogTitle from "@material-ui/core/DialogTitle"
import TypographyCo from "../../typographyCo"

function ModalTitleCo(props) {
  const { children } = props
  /** The title will be set inside a TypographyCo of variant h5 and primary color.  */
  return (
    <DialogTitle disableTypography>
      <TypographyCo variant="h5" color="primary">
        {children}
      </TypographyCo>
    </DialogTitle>
  )
}

ModalTitleCo.propTypes = {
  children: PropTypes.string,
}

ModalTitleCo.defaultProps = {
  children: "",
}

export default ModalTitleCo
