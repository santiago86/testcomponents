import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import clsx from "clsx"
import theme from "../theme/index"

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "inherit",
    "& .MuiDivider-flexItem": {
      width: "1px",
      height: "inherit",
      backgroundColor: "#D1D1D1",
    },
  },
  lightSolid: {
    backgroundColor: "#D1D1D1",
    height: "1px",
  },
  lightDashed: {
    border: "dashed 1px",
    borderColor: "#D1D1D1",
    backgroundColor: "transparent",
  },
  darkDashed: {
    border: "dashed 1px",
    borderColor: theme.palette.white,
    backgroundColor: theme.palette.transparent.text,
  },
  lightOpSolid: {
    opacity: "50%",
  },
  darkSolid: {
    backgroundColor: theme.palette.white,
    opacity: "32%",
  },
}))

const DividerCo = ({ base, ...props }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Divider {...props} className={clsx(classes[base])} variant="fullWidth" />
    </div>
  )
}

DividerCo.propTypes = {
  base: PropTypes.string.isRequired,
}

export default DividerCo
