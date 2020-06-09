import React, { useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Popper from "@material-ui/core/Popper"
import Paper from "@material-ui/core/Paper"
import PropTypes from "prop-types"
import SWOOSH from "../../../assets/images/swoosh.svg"

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  paper: ({ color, shine }) => ({
    maxWidth: shine === true ? 424 : 282,
    padding: 16,
    overflow: "auto",
    boxShadow: `5px 5px 17px 5px  ${theme.palette.transparent.shadow}`,
    background:
      color === "primary" ? theme.palette.gradients.gradientDark : null,
    position: "relative",
    height: shine === true ? 300 : 180,
  }),
  shine: {
    backgroundImage: `url(${SWOOSH})`,
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "bottom",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 300,
    zIndex: 0,
  },
  popper: {
    zIndex: 1,
    '&[x-placement*="top"]': {
      marginBottom: 10,
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: "calc((100% / 2) - 1.5em)",
      marginBottom: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderRightColor: theme.palette.transparent.main,
        borderLeftColor: theme.palette.transparent.main,
        borderBottomColor: theme.palette.transparent.main,
      },
    },
    '&[x-placement*="top-start"] $arrow': {
      left: 15,
    },
    '&[x-placement*="top-end"] $arrow': {
      left: "unset",
      right: 15,
    },
    '&[x-placement*="right"]': {
      marginLeft: 10,
    },
    '&[x-placement*="right"] $arrow': {
      top: "calc((100% / 2) - 7px)",
      left: 0,
      marginLeft: "-0.9em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderLeftColor: theme.palette.transparent.main,
        borderBottomColor: theme.palette.transparent.main,
        borderTopColor: theme.palette.transparent.main,
      },
    },
    '&[x-placement*="right-start"] $arrow': {
      top: 15,
    },
    '&[x-placement*="right-end"] $arrow': {
      top: "unset",
      bottom: 15,
    },
    '&[x-placement*="bottom"]': {
      marginTop: 10,
    },
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      right: "calc((100% / 2) - 1.5em)",
      marginTop: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderRightColor: theme.palette.transparent.main,
        borderLeftColor: theme.palette.transparent.main,
        borderTopColor: theme.palette.transparent.main,
      },
    },
    '&[x-placement*="bottom-start"] $arrow': {
      left: 15,
    },
    '&[x-placement*="bottom-end"] $arrow': {
      bottom: "unset",
      right: 15,
    },
    '&[x-placement*="left"]': {
      marginRight: 10,
    },
    '&[x-placement*="left"] $arrow': {
      top: "calc((100% / 2) - 7px)",
      right: 0,
      marginRight: "-0.9em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderRightColor: theme.palette.transparent.main,
        borderBottomColor: theme.palette.transparent.main,
        borderTopColor: theme.palette.transparent.main,
      },
    },
    '&[x-placement*="left-start"] $arrow': {
      top: 15,
    },
    '&[x-placement*="left-end"] $arrow': {
      top: "unset",
      bottom: 15,
    },
  },
  arrow: ({ color }) => ({
    position: "absolute",
    fontSize: 7,
    width: 7,
    height: 14,
    "&::before": {
      borderColor:
        color === "primary"
          ? `${theme.palette.secondary.dark}`
          : `${theme.palette.common.white}`,
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid",
    },
  }),
}))

const PopperCo = ({ anchorEl, arrow, children, flip, ...props }) => {
  const { shine } = props
  const classes = useStyles(props)
  const arrowRef = useRef()

  if (!anchorEl) {
    return null
  }

  return (
    <Popper
      {...props}
      anchorEl={anchorEl}
      className={classes.popper}
      modifiers={{
        flip: {
          enabled: flip,
        },
        preventOverflow: {
          enabled: false,
          boundariesElement: "scrollParent",
        },
        arrow: {
          enabled: arrow,
          element: arrowRef.current,
        },
      }}
    >
      <Paper className={classes.paper}>
        <span style={{ zIndex: 1, position: "relative" }}>{children}</span>
        {shine && <div className={classes.shine} />}
      </Paper>
      {arrow ? <span className={classes.arrow} ref={arrowRef} alt="" /> : null}
    </Popper>
  )
}

PopperCo.propTypes = {
  /**
   * It's used to set the position of the popper. The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: PropTypes.number,
  /**
   * Show or hide the arrow
   */
  arrow: PropTypes.bool,
  /**
   * Popper render function or node.
   */
  children: PropTypes.node,
  /**
   * Popper placement.
   * */
  placement: PropTypes.string,
  /**
   * `Flip` (flip the popper’s placement when it starts to overlap its reference element)
   * */
  flip: PropTypes.bool,
  /**
   * has two the type values of a string the first is 'white' than set the popper the white color, the second parameter is 'primary' that is applied a blue background
   */
  color: PropTypes.string,
  /**
   * show or hide an image for the blue background
   */
  shine: PropTypes.bool,
}

PopperCo.defaultProps = {
  placement: "bottom",
  anchorEl: 400,
  arrow: true,
  children: null,
  flip: true,
  color: "white",
  shine: false,
}

export default PopperCo
