import React from "react"
import CheckboxCo from "../components/checkboxCo"

const checkboxSection = () => {
  return (
    <>
      <CheckboxCo checked label="Label" />
      <CheckboxCo label="Label" />
      <CheckboxCo disabled label="Label" />
      <CheckboxCo disabled checked label="Label" />
      <CheckboxCo label="Quiero suscribirme a los correos de copa" />
    </>
  )
}

export default checkboxSection
