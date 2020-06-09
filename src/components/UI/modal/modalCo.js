import React from "react"
import PropTypes from "prop-types"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import SvgIcon from "@material-ui/core/SvgIcon"
import IconButton from "@material-ui/core/IconButton"
import Right from "@material-ui/icons/ChevronRight"
import { withStyles } from "@material-ui/core/styles"
import ButtonCo from "../../buttonCo"
import theme from "../../../theme"
import { ReactComponent as CloseSVG } from "../../../assets/icons/Modal_close_default.svg"
/**
 * Function to make the characteristics of the Select component
 * @param {string} property Which property will affect the current style
 * @param {styple object} mapping How will the property affect the current style
 */
const styledBy = (property, mapping) => (props) => mapping[props[property]]

/**
 * Property that transform the CloseSVG icon into a Material Icon
 * @param {props} props for the respective SvgIcon
 */
function CloseIcon(props) {
  return (
    <SvgIcon {...props}>
      <CloseSVG />
    </SvgIcon>
  )
}

const styles = {
  /**
   * Style defining the paper for the modal.
   * It mostly focuses on changing the margin and borders.
   */
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
    overflow: "visible",
    width: "100%",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  /**
   * Style to define the area for the Action Buttons
   */
  actions: {
    padding: 0,
    margin: 0,
    borderTop: "solid 1px #D1D1D1",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    /* Dynamic size change */
    minHeight: 120,
    [theme.breakpoints.down("xs")]: {
      minHeight: 80,
    },
    alignItems: "stretch",
    paddingTop: -1,
  },
  /**
   * Style to define the Action Buttons
   */
  btnRoot: {
    margin: 0,
    padding: 8,
    borderRadius: 0,
    borderColor: theme.palette.transparent.main,

    /* The color of the text will differ if the button is primary/unique or secondary */
    color: styledBy("type", {
      secondary: theme.palette.grey["600"],
      primary: theme.palette.white,
    }),
    /* The background of the button will differ if the button is primary/unique or secondary */
    background: styledBy("type", {
      primary: theme.palette.gradients["500"],
    }),
    "&:hover": {
      background: styledBy("type", {
        primary: theme.palette.gradients["600"],
      }),
      color: styledBy("type", {
        primary: theme.palette.white,
      }),
    },
    /* If the button is the element at the right, change their borderRadius */
    "&:last-child": {
      margin: 0,
      borderBottomRightRadius: 8,
    },
    /* If the button is the element at the left, change their borderRadius */
    "&:first-child": {
      margin: 0,
      borderBottomLeftRadius: 8,
    },
  },
  /**
   * Style defined for the label to overflow it's text
   */
  btnLabel: {
    position: "relative",
    display: "inline-block",
    wordWrap: "break-word",
    overflow: "hidden",
    maxHeight: "3.6em",
    lineHeight: "1.2em",
    textAlign: "justify",
    textOverflow: "ellipsis",
  },
  /**
   * Variables to make the CloseSVG button stay in place
   */
  CloseSVG: {
    float: "right",
    position: "sticky",
    top: theme.spacing(9),
    width: 0,
  },
}

/**
 * Creates an stylized Action button to apply the dynamic changes
 */
const ActionButton = withStyles(styles)(({ classes, type, ...other }) => {
  return <ButtonCo classes={{ root: classes.btnRoot }} {...other} />
})

/**
 * Creates an stylized Action adrea to apply the dynamic changes
 */
const ActionsArea = withStyles(styles)(({ classes, type, ...other }) => {
  return (
    <DialogActions
      classes={{ root: classes.actions, spacing: classes.actionsSpacing }}
      {...other}
    />
  )
})
/**
 * Creates an stylized paper for the dialog
 */
const Modal = withStyles(styles)(({ classes, ...other }) => {
  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      {...other}
    />
  )
})
/**
 * Sets the definition for the CloseButton
 */
const CloseButton = withStyles(styles)(({ classes, ...other }) => {
  return (
    <IconButton
      color="primary"
      size="small"
      {...other}
      classes={{
        root: classes.CloseSVG,
      }}
    >
      <CloseIcon style={{ fontSize: 52 }} />
    </IconButton>
  )
})

/**
 * Function that sets the primary/unique button for the Actions
 *
 * @param {string} text Text to be placed as the label for the button
 * @param {function} action Action to be performed when the button is clicked
 */
const justPrimary = (text, action) => {
  return (
    <ActionButton type="primary" fullWidth onClick={action} end={Right}>
      <div style={styles.btnLabel}>{text}</div>
    </ActionButton>
  )
}
/**
 * Function that sets both the secondary and primary button for the Actions
 *
 * @param {[string, function]} primary Text and Action to be performed by the primary button
 * @param {[string, function]} secondary Text and Action to be performed by the secondary button
 */
const primaryAndSecondary = (primary, secondary) => {
  return [
    <ActionButton
      key="secondary"
      type="secondary"
      color="primary"
      variant="outlined"
      onClick={secondary[1]}
      fullWidth
    >
      <div style={styles.btnLabel}>{secondary[0]}</div>
    </ActionButton>,
    <ActionButton key="primary" type="primary" fullWidth onClick={primary[1]}>
      <div style={styles.btnLabel}>{primary[0]}</div>
    </ActionButton>,
  ]
}

/**
 * Default props to set for the Modal
 */
const defaultProps = {
  fullWidth: true,
  maxWidth: "lg",
}

function ModalCo(props) {
  const {
    children,
    primarybutton,
    secondarybutton,
    showClose,
    onClose,
    onPrimary,
    onSecondary,
  } = props
  const currentProps = { ...defaultProps, ...props }

  /**
   * Sets the action portion of the modal, according to the props
   */
  let modalButton
  if (primarybutton) {
    if (secondarybutton) {
      modalButton = primaryAndSecondary(
        [primarybutton, onPrimary],
        [secondarybutton, onSecondary]
      )
    } else {
      modalButton = justPrimary(primarybutton, onPrimary)
    }
  }

  /** Deleting a couple of unnecesary elements from the object */
  delete currentProps.onPrimary
  delete currentProps.onSecondary
  delete currentProps.showClose
  return (
    <div>
      <Modal {...currentProps}>
        {showClose && <CloseButton onClick={onClose} aria-label="Close" />}
        {children}
        {modalButton && <ActionsArea>{modalButton}</ActionsArea>}
      </Modal>
    </div>
  )
}

ModalCo.propTypes = {
  /**
   * Children to show inside the modal
   */
  children: PropTypes.node,

  /**
   * If `true`, the Dialog is open.
   */
  open: PropTypes.bool.isRequired,

  /**
   * `text`to be placed as the label for the primary button
   */
  primarybutton: PropTypes.string,
  /**
   * `function`to be placed as the action for the primary button
   */
  onPrimary: PropTypes.func,

  /**
   * `text`to be placed as the label for the secondary button
   */
  secondarybutton: PropTypes.string,
  /**
   * `function`to be placed as the action for the secondary button
   */
  onSecondary: PropTypes.func,

  /**
   * Reactive function to the behavior of closing the modal
   */
  onClose: PropTypes.func.isRequired,

  /**
   * A way to set the scroll for the modal
   * `IT IS ONLY PLACED TO SET AN IMPORTANT DEFAULT`
   */
  scroll: PropTypes.oneOf(["body", "paper"]),

  /**
   * If `true` sets the close button as visible
   */
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
