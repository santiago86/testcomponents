import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import airPlane from "../assets/images/copa_loader.gif"

const useStyles = makeStyles((theme) => ({
  loading: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.grey[900],
    opacity: 0.96,
  },
  loadingImg: {
    position: "absolute",
    top: "50%",
    right: "auto",
    bottom: "auto",
    left: "50%",
    width: 200,
    height: 200,
    padding: 0,
    transform: "translate(-50% , -50%)",
    border: 0,
    overflow: "hidden",
  },
}))

function LoadingCo() {
  const classes = useStyles()
  return (
    <div className={classes.loading}>
      <img className={classes.loadingImg} src={airPlane} alt="loading" />
    </div>
  )
}

export default LoadingCo
