import React, { useState } from "react"
import Container from "@material-ui/core/Container"

import SliderCo from "../components/sliderCo"

const SliderSection = () => {
  const [slide, setSlide] = useState(20)
  const [slideDouble, setSlideDouble] = useState([10, 50])

  return (
    <Container
      maxWidth="xs"
      style={{
        marginBottom: 50,
      }}
    >
      <SliderCo
        value={slide}
        scale={(x) => `${x} USD`}
        handleChange={setSlide}
        label="Un Nodo"
      />
      <SliderCo
        value={slideDouble}
        scale={(x) => `${x} USD`}
        handleChange={setSlideDouble}
        label="Dos Nodos"
      />
      <SliderCo
        disabled
        value={slide}
        scale={(x) => `${x} USD`}
        handleChange={setSlide}
        label="Dos Nodos"
      />
    </Container>
  )
}

export default SliderSection
