import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import SliderCo from "../components/sliderCo"

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
      <SliderCo disabled value={20} label="Inhabilitado" />
    </div>
  )
}

export default SliderSection