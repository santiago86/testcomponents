import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import PropTypes from "prop-types"
import Close from "@material-ui/icons/Close"
import Info from "@material-ui/icons/Info"
import Typography from "@material-ui/core/Typography"

import palette from "../theme/palette"

const useStyles = makeStyles((theme) => ({
  collapse: {
    top: 0,
    zIndex: 999,
    position: "sticky",
  },
  root: (props) => ({
    width: "100%",
    height: "7.625rem",
    backgroundColor: props.color,
    display: "flex",
    justifyContent: "space-between",
  }),
  contentInfo: {
    margin: "14px 16px",
    display: "flex",
  },
  iconMessage: {
    size: 16,
    color: theme.palette.common.white,
  },
  text: {
    marginLeft: 16,
    color: theme.palette.common.white,
    fontWeight: 500,
  },
  iconButton: {
    marginTop: 12,
    marginRight: 24,
    padding: 5,
    border: 0,
    backgroundColor: "rgba(66, 66, 66, 0.3)",
    alignSelf: "flex-start",
    "&:hover": {
      backgroundColor: "rgba(66, 66, 66, 0.6)",
    },
  },
  icon: {
    size: 16,
    color: theme.palette.common.white,
  },
}))

const switchColor = (value) => {
  switch (value) {
    case "info":
      return palette.primary.main
    case "success":
      return palette.success.main
    case "error":
      return palette.error.main
    default:
      return palette.primary.main
  }
}

const AlertFull = ({ visible, message, type, customIcon, onClose }) => {
  const styles = { color: switchColor(type) }
  const classes = useStyles(styles)

  return (
    <Collapse
      classes={{ container: classes.collapse }}
      in={visible}
      timeout={600}
    >
      <div className={classes.root}>
        <div className={classes.contentInfo}>
          {customIcon || <Info className={classes.iconMessage} />}
          <Typography className={classes.text} variant="body1">
            {message}
          </Typography>
        </div>
        <IconButton
          className={classes.iconButton}
          onClick={onClose}
          aria-label="close full alert"
        >
          <Close className={classes.icon} />
        </IconButton>
      </div>
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
