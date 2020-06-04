import React from "react"
import PropTypes from "prop-types"
import DialogTitle from "@material-ui/core/DialogTitle"
import TypographyCo from "../typographyCo"

function ModalTitleCo(props) {
  const { children } = props
  return (
    <DialogTitle disableTypography>
      <TypographyCo variant="h5" color="primary">
        {children}
      </TypographyCo>
    </DialogTitle>
  )
}

ModalTitleCo.propTypes = {
  children: PropTypes.node,
}

ModalTitleCo.defaultProps = {
  children: undefined,
}

export default ModalTitleCo
