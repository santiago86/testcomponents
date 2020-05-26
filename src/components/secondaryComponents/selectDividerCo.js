import React from "react"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"
// We can inject some CSS into the DOM.
const useStyles = makeStyles({
  root: {
    margin: "0 1.0rem",
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
