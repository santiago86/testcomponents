import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import ButtonCo from "../components/buttonCo"
import SliderCo from "../components/sliderCo"
import Tooltip from "../components/tooltipCo"

const popover = "Un mesanje de multiples lineas es soportado por el tooltip"
// const popover2 = "Popover message"

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 50,
  },
}))

const SliderSection = () => {
  const classes = useStyles()
  const [slide, setSlide] = useState(0)
  const [slideDouble, setSlideDouble] = useState([10, 50])

  return (
    <div className={classes.container}>
      <SliderCo
        value={slide}
        scale={(x) => `${x} USD`}
        handleChange={setSlide}
        label="Un Nodo"
        min={1000}
        max={100000}
        step={1000}
      />
      <SliderCo
        value={slideDouble}
        scale={(x) => `${x} USD`}
        minRange={10}
        handleChange={setSlideDouble}
        label="Dos Nodos"
      />
      <Tooltip value={popover} placement="bottom">
        <ButtonCo variant="contained">Tooltip</ButtonCo>
      </Tooltip>
      <SliderCo
        disabled
        value={20}
        label="Inhabilitado"
        handleChange={setSlide}
      />
    </div>
  )
}

export default SliderSection
