import React from "react"
import PropTypes from "prop-types"
import DialogContent from "@material-ui/core/DialogContent"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../../theme"

const useStyles = makeStyles({
  content: {
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
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
  if (Array.isArray(children)) {
    ;[child1, child2] = children
  }
  return (
    <DialogContent className={styles.content}>
      <div>{child1}</div>
      <Divider orientation="vertical" flexItem className={styles.divider} />
      <div>{child2}</div>
    </DialogContent>
  )
}

ModalColumsCo.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}

ModalColumsCo.defaultProps = {
  children: [undefined, undefined],
}

export default ModalColumsCo
