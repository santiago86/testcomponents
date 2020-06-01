import React from "react"
import { Link } from "react-router-dom"
import ButtonCo from "./buttonCo"

const Navigation = () => {
  return (
    <>
      <ButtonCo variant="outlined" color="primary" to="/" component={Link}>
        Home
      </ButtonCo>
      <ButtonCo
        variant="outlined"
        color="primary"
        to="/passenger"
        component={Link}
      >
        Passenger
      </ButtonCo>
    </>
  )
}

export default Navigation
