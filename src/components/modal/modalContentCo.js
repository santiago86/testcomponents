import React from "react"
import PropTypes from "prop-types"
import DialogContent from "@material-ui/core/DialogContent"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../../theme"

/**
 * Styles which define the behavior of the padding for the content.
 * The first-child and last-child will have different padding
 */
const useStyles = makeStyles({
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
})

function ModalContentCo(props) {
  const { children } = props
  const styles = useStyles()
  return (
    <DialogContent className={styles.root} {...props}>
      {children}
    </DialogContent>
  )
}

ModalContentCo.propTypes = {
  /**
   * The children can be of any type
   */
  children: PropTypes.node,
}

ModalContentCo.defaultProps = {
  children: undefined,
}

export default ModalContentCo
