import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import palette from "../../theme/palette"

const useStyles = makeStyles({
  root: {
    padding: "1rem 2rem",
    background: (props) => props.color,
    color: palette.common.white,
    width: "9rem",
    height: "9rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "1rem",
  },
})

const ColorSquareCo = (props) => {
  const classes = useStyles(props)
  const { name, code } = props
  return (
    <div className={classes.root}>
      <Typography>{name}</Typography>
      <Typography> {code} </Typography>
    </div>
  )
}

ColorSquareCo.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}

export default ColorSquareCo
