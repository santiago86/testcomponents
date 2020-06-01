import React from "react"
import { Link } from "react-router-dom"
import ButtonCo from "./buttonCo"

const Navigation = () => {
  return (
    <>
      <ButtonCo variant="outlined" to="/" component={Link}>
        Home
      </ButtonCo>
      <ButtonCo variant="outlined" to="/passenger" component={Link}>
        Passenger
      </ButtonCo>
    </>
  )
}

export default Navigation
