import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"

import { Topbar, Footer } from "./components"

const useStyles = makeStyles(() => ({
  root: {},
}))

const Main = (props) => {
  const { children } = props

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Topbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node,
}

export default Main
