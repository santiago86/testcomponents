import React, { useState } from "react"
import PropTypes from "prop-types"

import { makeStyles } from "@material-ui/core/styles"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import Collapse from "@material-ui/core/Collapse"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles(() => ({
  root: ({ backgroundColor, fontSize, fontWeight, width }) => ({
    padding: [11, 24, 13, 16],
    backgroundColor,
    fontWeight,
    fontSize,
    width,
  }),
  action: {
    alignItems: "baseline",
  },
}))

const AlertCo = ({ children, alertTitle, closeIcon, ...props }) => {
  const [open, setOpen] = useState(true)
  const classes = useStyles(props)

  const closeEvent = () => setOpen(false)

  const closeAction = (
    <IconButton
      aria-label="close"
      color="inherit"
      size="small"
      onClick={closeEvent}
    >
      <CloseIcon fontSize="inherit" />
    </IconButton>
  )

  return (
    <Collapse in={open}>
      <Alert
        classes={{ action: classes.action }}
        className={classes.root}
        action={closeIcon && closeAction}
        {...props}
      >
        <>
          {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
          {children}
        </>
      </Alert>
    </Collapse>
  )
}

AlertCo.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  alertTitle: PropTypes.string,
  closeIcon: PropTypes.bool,
  width: PropTypes.string,
  fontWeight: PropTypes.number,
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
}

AlertCo.defaultProps = {
  closeIcon: false,
  alertTitle: "",
  width: "100%",
  fontWeight: 300,
  fontSize: "1.25rem",
  backgroundColor: "",
}

export default AlertCo
