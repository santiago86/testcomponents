import React from "react"
import PropTypes from "prop-types"
import Dialog from "@material-ui/core/Dialog"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import { withStyles } from "@material-ui/core/styles"
import ButtonCo from "./buttonCo"
import theme from "../theme"

const styledBy = (property, mapping) => (props) => mapping[props[property]]

const styles = {
  root: {
    margin: 0,
    padding: 0,
    borderRadius: 0,
    borderColor: theme.palette.grey["200"],
    color: styledBy("type", {
      secondary: theme.palette.grey["600"],
    }),
    minHeight: 80,
  },

  stickyBottom: {
    position: "absolute",
    bottom: 0,
  },
}

/**
 * Creates an styled select to apply the dynamic changes
 */
const StyledButton = withStyles(styles)(({ classes, type, ...other }) => {
  return <ButtonCo classes={{ root: classes.root }} {...other} />
})

const defaultProps = {
  fullWidth: true,
}

const justPrimary = (text) => {
  return (
    <StyledButton color="secondary" fullWidth style={styles.stickyBottom}>
      {text}
    </StyledButton>
  )
}

const primaryAndSecondary = (primary, secondary) => {
  return (
    <Grid container style={styles.stickyBottom}>
      <Grid item xs={6}>
        <StyledButton
          type="secondary"
          color="primary"
          variant="outlined"
          fullWidth
        >
          {secondary}
        </StyledButton>
      </Grid>
      <Grid item xs={6}>
        <StyledButton color="secondary" fullWidth>
          {primary}
        </StyledButton>
      </Grid>
    </Grid>
  )
}

function ModalCo(props) {
  const { children, primarybutton, secondarybutton, size } = props
  const currentProps = { ...defaultProps, ...props }
  let modalButton
  if (primarybutton !== "") {
    if (secondarybutton !== "") {
      modalButton = primaryAndSecondary(primarybutton, secondarybutton)
    } else {
      modalButton = justPrimary(primarybutton)
    }
  }
  const modalSize = size === "large" ? "lg" : "xs"
  return (
    <Dialog maxWidth={modalSize} {...currentProps}>
      <Box m={8}>{children}</Box>
      {modalButton}
    </Dialog>
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
  size: PropTypes.oneOf(["large", "small"]),
}

ModalCo.defaultProps = {
  children: undefined,
  primarybutton: "",
  secondarybutton: "",
  size: "large",
  onPrimary: () => {},
  onSecondary: () => {},
}
export default ModalCo
