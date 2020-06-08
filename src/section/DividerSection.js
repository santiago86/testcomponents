import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"

import DividerCo from "../components/dividerCo"

import theme from "../theme/index"

const useStyles = makeStyles(() => ({
  root: {
    margin: 10,
    height: 50,
    padding: 25,
  },
  dark: {
    background: theme.palette.gradients.gradient3,
  },
  vertical: {
    height: 100,
    width: 20,
    padding: 0,
    paddingLeft: 10,
  },
}))

const DividerSection = () => {
  const classes = useStyles()

  const DIVIDERS = [
    {
      id: "1",
      base: "lightSolidOp",
      orientation: "horizontal",
      divider: "light",
    },
    {
      id: "2",
      base: "lightSolid",
      orientation: "horizontal",
      divider: "light",
    },
    {
      id: "3",
      base: "darkSolid",
      orientation: "horizontal",
      divider: "dark",
    },
    {
      id: "4",
      base: "lightDashed",
      orientation: "horizontal",
      divider: "light",
    },
    {
      id: "5",
      base: "darkDashed",
      orientation: "horizontal",
      divider: "dark",
    },
    {
      id: "6",
      base: "lightSolidOp",
      orientation: "vertical",
      flexItem: "flexItem",
      divider: "light",
    },
    {
      id: "8",
      base: "darkSolid",
      orientation: "vertical",
      flexItem: "flexItem",
      divider: "dark",
    },
  ]

  return (
    <div>
      {DIVIDERS.map(({ id, divider, orientation, ...props }) => (
        <div
          className={clsx(classes.root, classes[divider], classes[orientation])}
          key={id}
        >
          <DividerCo id={id} {...props} />
        </div>
      ))}
    </div>
  )
}

export default DividerSection
