import React from "react"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../../theme"
// We can inject some CSS into the DOM.
const useStyles = makeStyles({
  root: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: theme.palette.divider,
  },
})

function SelectDividerCo() {
  const classes = useStyles()

  return (
    <Divider
      classes={{
        root: classes.root,
      }}
    />
  )
}

export default SelectDividerCo
