import React, { useState } from "react"
import PropTypes from "prop-types"

import { makeStyles } from "@material-ui/core/styles"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import Collapse from "@material-ui/core/Collapse"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"

import palette from "../../../theme/palette"

const useStyles = makeStyles(() => ({
  root: ({ bgColor, fontSize, fontColor, fontWeight, width }) => ({
    padding: [11, 24, 13, 16],
    backgroundColor: bgColor,
    color: fontColor,
    fontWeight,
    fontSize,
    width,
  }),
  alertAction: ({ bgColor, fontSize, fontColor, fontWeight, width }) => ({
    boxShadow:
      "0 4px 5px 0 rgba(0,0,0,0.07), 0 3px 15px 0 rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.12)",
    padding: [11, 24, 13, 16],
    borderRadius: 4,
    backgroundColor: bgColor,
    color: fontColor,
    fontWeight,
    fontSize,
    width,
    "& .MuiAlert-message": {
      paddingTop: 18,
    },
    "& .MuiAlert-icon": {
      borderLeft: `8px solid ${palette.oldGold}`,
      color: palette.oldGold,
      borderRadius: 4,
      fontSize: 24,
      paddingLeft: 9,
      paddingTop: 16,
      "& .MuiSvgIcon-root": {
        marginLeft: 10,
      },
    },
  }),
  closeAction: {
    backgroundColor: palette.grey[400],
    margin: 10,
    height: 32,
    width: 32,
    color: palette.white,
    "&:hover": {
      backgroundColor: palette.grey[400],
    },
  },
  buttonContainer: {
    margin: "12px 0",
  },
  action: {
    alignItems: "baseline",
  },
}))

const AlertCo = ({
  children,
  alertTitle,
  closeIcon,
  alertAction,
  ...props
}) => {
  const [open, setOpen] = useState(true)
  const classes = useStyles(props)

  const closeEvent = () => setOpen(false)

  const closeAction = (
    <IconButton
      className={alertAction && classes.closeAction}
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
        className={alertAction ? classes.alertAction : classes.root}
        action={closeIcon && closeAction}
        {...props}
      >
        <div>
          {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
          {children}
        </div>
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
  fontColor: PropTypes.string,
  alertAction: PropTypes.bool,
  bgColor: PropTypes.string,
}

AlertCo.defaultProps = {
  closeIcon: false,
  alertTitle: "",
  width: "100%",
  fontWeight: 300,
  fontSize: "1rem",
  fontColor: palette.white,
  alertAction: false,
  bgColor: "",
}

export default AlertCo
