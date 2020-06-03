import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import Fade from "@material-ui/core/Fade"
import PropTypes from "prop-types"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

import palette from "../theme/palette"

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiSnackbarContent-root": {
      backgroundColor: palette.primary.main,
    },
  },
  icon: {
    backgroundColor: palette.black,
    width: 26,
    height: 26,
    // display: "contents",
  },
}))
const ToastCo = ({ id, msg, ...props }) => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  })

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    })
  }

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    })
  }
  const { timeClose } = props
  return (
    <div>
      <Button onClick={handleClick(Fade)}>Fade Transition</Button>
      <Snackbar
        className={classes.root}
        id={id}
        open={state.open}
        onClose={handleClose}
        autoHideDuration={timeClose * 1000}
        TransitionComponent={state.Transition}
        message={msg}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            className={classes.icon}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        }
        // children={
        //   <ul>
        //     <li>prueba</li>
        //   </ul>
        // }
        {...props}
      />
    </div>
  )
}

ToastCo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  msg: PropTypes.string,
  timeClose: PropTypes.number,
}

ToastCo.defaultProps = {
  title: "prueba",
  msg: "Mensaje de prueba",
  timeClose: 8,
}

export default ToastCo
