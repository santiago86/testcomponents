import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { green, red } from "@material-ui/core/colors"
import theme from "../theme/index"

const useStyles = makeStyles(() => ({
  root: {
    color: theme.palette.white,
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      backgroundColor: red[900],
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: green[500],
    },
  },
}))

const BreakpointsCo = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography>down(sm): red</Typography>
      <Typography>up(md): blue</Typography>
      <Typography>up(lg): green</Typography>
    </div>
  )
}

export default BreakpointsCo
