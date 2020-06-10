import React from "react"
import Grid from "@material-ui/core/Grid"

import { makeStyles } from "@material-ui/styles"
import PillCo from "../components/pillCo"
import palette from "../theme/palette"

const PILLS = [
  {
    id: 1,
    label: "Escogiste esta tarifa",
    outlined: true,
  },
  {
    id: 2,
    label: "Escogiste esta tarifa",
    check: true,
  },
  {
    id: 3,
    label: "Escogiste esta tarifa",
    small: true,
    outlined: true,
  },
  {
    id: 4,
    label: "Escogiste esta tarifa",
    small: true,
    check: true,
    outlined: true,
  },
  {
    id: 5,
    label: "Saliendo",
    disabled: true,
    outlined: true,
    color: "default",
  },
  {
    id: 6,
    label: "A tiempo",
    customColor: palette.success.main,
  },
  {
    id: 7,
    label: "Atrasado",
    customColor: palette.error.main,
  },
  {
    id: 8,
    label: "Completar información",
    small: true,
    info: true,
    outlined: true,
  },
]

const useStyles = makeStyles({
  root: {
    padding: 12,
  },
})

const PillSection = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container alignItems="center" justify="space-evenly" spacing={24}>
        {PILLS.map(({ id, ...props }) => (
          <div className={classes.root} key={id}>
            <PillCo {...props} />
          </div>
        ))}
      </Grid>
    </>
  )
}

export default PillSection
