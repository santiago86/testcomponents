import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Alert from "@material-ui/lab/Alert"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import PropTypes from "prop-types"
import Close from "@material-ui/icons/Close"
import Info from "@material-ui/icons/Info"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  collapse: {
    top: 0,
    zIndex: 999,
    position: "sticky",
  },
  root: {
    padding: "12px 24px 12px 18px",
    borderRadius: 0,
    width: "100%",
    height: 122,
    display: "flex",
  },
  contentInfo: {
    padding: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    margin: "2px 18px",
    color: theme.palette.common.white,
    fontWeight: 500,
  },
  iconButton: {
    padding: 5,
    borderRadius: "50%",
    border: 0,
    backgroundColor: theme.palette.transparent.alertIcons,
    alignSelf: "flex-start",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  },
  iconMessage: {
    margin: 0,
    padding: "2px 0",
  },
  icon: {
    size: 16,
    color: theme.palette.common.white,
  },
}))

const AlertFull = ({ visible, message, type, customIcon, onClose }) => {
  const classes = useStyles()

  return (
    <Collapse
      classes={{ container: classes.collapse }}
      in={visible}
      timeout={600}
    >
      <Alert
        color={type}
        variant="filled"
        classes={{
          root: classes.root,
          message: classes.contentInfo,
          icon: classes.iconMessage,
        }}
        icon={customIcon || <Info className={classes.icon} />}
      >
        <Typography className={classes.text} variant="body1">
          {message}
        </Typography>
        <IconButton
          className={classes.iconButton}
          onClick={onClose}
          aria-label="close full alert"
        >
          <Close className={classes.icon} />
        </IconButton>
      </Alert>
    </Collapse>
  )
}

AlertFull.propTypes = {
  visible: PropTypes.bool,
  type: PropTypes.oneOf(["info", "success", "error"]),
  message: PropTypes.string.isRequired,
  customIcon: PropTypes.node,
  onClose: PropTypes.func,
}

AlertFull.defaultProps = {
  visible: false,
  type: "info",
  customIcon: null,
  onClose: null,
}

export default AlertFull
