import React from "react"
import PropTypes from "prop-types"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import CancelIcon from "@material-ui/icons/Cancel"
import IconButton from "@material-ui/core/IconButton"
import { withStyles } from "@material-ui/core/styles"
import ButtonCo from "./buttonCo"
import theme from "../theme"

const styledBy = (property, mapping) => (props) => mapping[props[property]]

const styles = {
  btnRoot: {
    margin: 0,
    padding: 8,
    borderRadius: 0,
    borderColor: theme.palette.transparent.main,
    color: styledBy("type", {
      secondary: theme.palette.grey["600"],
      primary: theme.palette.white,
    }),
    backgroundColor: styledBy("type", {
      primary: theme.palette.gradients.gradient4,
    }),
    "&:not(:first-child)": {
      margin: 0,
    },
  },
  btnLabel: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3 /* number of lines to show */,
    "-webkit-box-orient": "vertical",
  },
  paper: {
    [theme.breakpoints.up("xs")]: {
      margin: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(3),
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(5),
    },
  },
  actions: {
    padding: 0,
    margin: 0,
    borderTop: "solid 1px #D1D1D1",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    minHeight: 120,
    [theme.breakpoints.down("xs")]: {
      minHeight: 80,
    },
    alignItems: "stretch",
  },
  close: {
    marginLeft: "-8px",
    position: "fixed",
  },
}

/**
 * Creates an styled select to apply the dynamic changes
 */
const StyledButton = withStyles(styles)(({ classes, type, ...other }) => {
  return (
    <ButtonCo
      classes={{ root: classes.btnRoot, label: classes.btnLabel }}
      {...other}
    />
  )
})

const StyledActions = withStyles(styles)(({ classes, type, ...other }) => {
  return (
    <DialogActions
      classes={{ root: classes.actions, spacing: classes.actionsSpacing }}
      {...other}
    />
  )
})

const StyledModal = withStyles(styles)(({ classes, ...other }) => {
  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      {...other}
    />
  )
})

const StyledClose = withStyles(styles)(({ classes, ...other }) => {
  return (
    <IconButton
      classes={{
        root: classes.close,
      }}
      color="primary"
      disableRipple
      disableFocusRipple
      size="small"
      {...other}
    >
      <CancelIcon style={{ fontSize: 63 }} />
    </IconButton>
  )
})

const defaultProps = {
  fullWidth: true,
}

const justPrimary = (text) => {
  return (
    <StyledButton type="primary" fullWidth>
      {text}
    </StyledButton>
  )
}

const primaryAndSecondary = (primary, secondary) => {
  return [
    <StyledButton
      key="secondary"
      type="secondary"
      color="primary"
      variant="outlined"
      fullWidth
    >
      {secondary}
    </StyledButton>,
    <StyledButton key="primary" type="primary" fullWidth>
      {primary}
    </StyledButton>,
  ]
}

function ModalCo(props) {
  const { children, primarybutton, secondarybutton, showClose, onClose } = props
  const currentProps = { ...defaultProps, ...props }
  let modalButton
  if (primarybutton !== "") {
    if (secondarybutton !== "") {
      modalButton = primaryAndSecondary(primarybutton, secondarybutton)
    } else {
      modalButton = justPrimary(primarybutton)
    }
  }
  delete currentProps.onPrimary
  delete currentProps.onSecondary
  delete currentProps.showClose
  return (
    <StyledModal {...currentProps} styles={{}}>
      {showClose && <StyledClose onClick={onClose} aria-label="Close" />}
      {children}
      <StyledActions>{modalButton}</StyledActions>
    </StyledModal>
  )
}

ModalCo.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  primarybutton: PropTypes.string,
  onPrimary: PropTypes.func,
  secondarybutton: PropTypes.string,
  onSecondary: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  scroll: PropTypes.oneOf(["body", "paper"]),
  showClose: PropTypes.bool,
}

ModalCo.defaultProps = {
  children: undefined,
  primarybutton: "",
  secondarybutton: "",
  onPrimary: () => {},
  onSecondary: () => {},
  scroll: "body",
  showClose: false,
}
export default ModalCo
