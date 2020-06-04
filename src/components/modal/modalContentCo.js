import React from "react"
import PropTypes from "prop-types"
import DialogContent from "@material-ui/core/DialogContent"
import { withStyles } from "@material-ui/core/styles"
import theme from "../../theme"

const styles = {
  root: {
    width: "100%",
    "&:first-child": {
      [theme.breakpoints.down("lg")]: {
        paddingTop: theme.spacing(13),
      },
      [theme.breakpoints.down("md")]: {
        paddingTop: theme.spacing(12),
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(11),
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(9),
      },
    },
    "&:last-child": {
      [theme.breakpoints.down("lg")]: {
        paddingBottom: theme.spacing(10),
      },
      [theme.breakpoints.down("md")]: {
        paddingBottom: theme.spacing(9),
      },
      [theme.breakpoints.down("sm")]: {
        paddingBottom: theme.spacing(8),
      },
      [theme.breakpoints.down("xs")]: {
        paddingBottom: theme.spacing(7),
      },
    },
    [theme.breakpoints.down("lg")]: {
      paddingTop: theme.spacing(7),
      paddingRight: theme.spacing(13),
      paddingBottom: theme.spacing(7),
      paddingLeft: theme.spacing(13),
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(6),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(10),
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(6),
      paddingRight: theme.spacing(5),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(5),
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(6),
      paddingRight: theme.spacing(5),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(3),
    },
  },
}

const StyledDC = withStyles(styles)(({ classes, ...other }) => {
  return <DialogContent classes={{ root: classes.root }} {...other} />
})

function ModalContentCo(props) {
  const { children } = props
  return <StyledDC {...props}>{children}</StyledDC>
}

ModalContentCo.propTypes = {
  children: PropTypes.node,
}

ModalContentCo.defaultProps = {
  children: undefined,
}

export default ModalContentCo
