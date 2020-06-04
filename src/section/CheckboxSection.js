import React from "react"
import CheckboxCo from "../components/checkboxCo"

const checkboxSection = () => {
  return (
    <>
      <CheckboxCo id="1" label="Label" />
      <CheckboxCo id="2" disabled label="Label" />
      <CheckboxCo id="3" disabled checked label="Label" />
      <CheckboxCo id="4" label="Quiero suscribirme a los correos de copa" />
    </>
  )
}

export default checkboxSection
