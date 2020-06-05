import React from "react"
import DialogContent from "@material-ui/core/DialogContent"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../../theme"

const useStyles = makeStyles({
  /**
   * Styles definding the content.With some breakpoints, it behaves
   * different.
   */
  content: {
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  /**
   * Styles for the divider. With some breakpoints, it behaves
   * different and can even dissapear.
   */
  divider: {
    borderColor: "rgba(209, 209, 209, 0.50)",
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
      display: "block",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
    },

    borderLeft: "1px solid",
  },
})

function ModalColumsCo(props) {
  const { children } = props
  const styles = useStyles()
  let child1
  let child2
  /**
   * Divides the children in order to place them properly
   */
  if (Array.isArray(children)) {
    ;[child1, child2] = children
  }
  return (
    <DialogContent className={styles.content}>
      {child1}
      <Divider orientation="vertical" flexItem className={styles.divider} />
      {child2}
    </DialogContent>
  )
}

/**
 * PropType function which handles the validation for the children to be type <div>.
 */
const childrenPropTypeLogic = (props, propName, componentName) => {
  const prop = props[propName]
  return (
    React.Children.toArray(prop).find((child) => child.type !== "div") &&
    new Error(`${componentName} only accepts "div" elements`)
  )
}

ModalColumsCo.propTypes = {
  /**
   * The children can only be type div. This is in order to assure
   * consistency, and read the two columns properly.
   */
  children: childrenPropTypeLogic,
}

ModalColumsCo.defaultProps = {
  children: [<div />, <div />],
}

export default ModalColumsCo
