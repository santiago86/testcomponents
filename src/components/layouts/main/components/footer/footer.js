import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(() => ({
  root: {},
}))

const Footer = () => {
  const classes = useStyles()

  return <div className={classes.root}>Footer</div>
}

export default Footer
