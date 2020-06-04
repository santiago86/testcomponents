import React, { useState, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Popper from "@material-ui/core/Popper"
import Paper from "@material-ui/core/Paper"
import ButtonCo from "./buttonCo"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(2),
  },
  paper: {
    maxWidth: 400,
    padding: 16,
    overflow: "auto",
    boxShadow: `5px 5px 17px 5px  ${theme.palette.transparent.shadow}`,
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
        borderColor: `${theme.palette.background.paper} ${theme.palette.transparent.main} ${theme.palette.transparent.main} ${theme.palette.transparent.main}`,
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
        borderColor: `${theme.palette.transparent.main} ${theme.palette.background.paper} ${theme.palette.transparent.main} ${theme.palette.transparent.main}`,
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
        borderColor: `${theme.palette.transparent.main} ${theme.palette.transparent.main} ${theme.palette.background.paper} ${theme.palette.transparent.main}`,
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
        borderColor: `${theme.palette.transparent.main} ${theme.palette.transparent.main} ${theme.palette.transparent.main} ${theme.palette.background.paper}`,
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
  arrow: {
    position: "absolute",
    fontSize: 7,
    width: 7,
    height: 14,
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid",
    },
  },
}))

const PopperCo = () => {
  const classes = useStyles()
  const arrowRef = useRef()
  const contentRef = useRef()
  const [anchorEl, setAnchorEl] = useState()
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState()

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget)
    setOpen((prev) => placement !== newPlacement || !prev)
    setPlacement(newPlacement)
    // console.log(contentRef, "contentRef")
  }

  const arrow = true
  return (
    <>
      <Popper
        placement={placement}
        open={open}
        anchorEl={anchorEl}
        popperRef={contentRef}
        className={classes.popper}
        transition
        disablePortal
        modifiers={{
          flip: {
            enabled: false,
          },
          preventOverflow: {
            enabled: false,
            boundariesElement: "scrollParent",
          },
          arrow: {
            enabled: true,
            element: arrowRef.current,
          },
        }}
      >
        {arrow ? <span className={classes.arrow} ref={arrowRef} /> : null}
        <Paper className={classes.paper}>
          Lorem ipsum dolor et asimet Lorem ipsum dolor et asimet Lorem ipsum
          dolor et asimet Lorem ipsum dolor et asimet Lorem ipsum dolor et
          asimet Lorem ipsum dolor et asimet Lorem ipsum dolor et asimet
        </Paper>
      </Popper>

      <ButtonCo
        ref={setAnchorEl}
        variant="contained"
        color="primary"
        onClick={handleClick("bottom")}
      >
        bottom
      </ButtonCo>
    </>
  )
}

export default PopperCo
