import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(() => ({
  root: {},
}))

const Topbar = () => {
  const classes = useStyles()
  return <div className={classes.root}>Top bar here </div>
}

export default Topbar
