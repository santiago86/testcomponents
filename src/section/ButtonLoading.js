import React, { useState, useEffect } from "react"
import ButtonCo from "../components/buttonCo"
import LoadingCo from "../components/UI/Loading/loadingCo"

function ButtonLoading() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [loading])

  const onClick = () => {
    setLoading(true)
  }

  return (
    <div>
      <ButtonCo onClick={onClick} variant="contained">
        Click Me
      </ButtonCo>
      {loading && <LoadingCo />}
    </div>
  )
}

export default ButtonLoading
