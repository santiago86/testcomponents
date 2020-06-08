import React from "react"
import AccordionCo from "../components/accordionCo"
import TypographyCo from "../components/typographyCo"

const AccodionSection = () => {
  return (
    <div>
      <h3 aria-label="large">LARGE</h3>
      <AccordionCo
        id="accordion_1"
        ariaLabel="expandir para ver más"
        title="¿Puedo llevar más equipaje del que aparece en la sección de Equipaje Permitido?"
        child="Accordion sample inner content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed ante velit. Nunc nunc felis, eleifend sed pretium id, pretium nec leo. Sed bibendum vulputate porttitor. Curabitur fringilla, risus eget facilisis viverra, nunc tellus placerat nulla, et blandit urna tellus a eros. Curabitur vitae fringilla leo. Proin imperdiet lacinia orci vitae vestibulum. Fusce condimentum a sapien in congue. Fusce at nulla vel felis pretium convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <h3>LABEL + ICONO</h3>
      <AccordionCo
        id="accordion_3"
        title={
          <TypographyCo variant="inherit" color="primary">
            Equipaje permitido
          </TypographyCo>
        }
        labelIcon="VER MÁS"
        sizeIcon="medium"
        child={<h1>Ejemplo Componente equipaje permitido</h1>}
      />
      <h3>With other type of title</h3>
      <AccordionCo
        id="accordion_4"
        title={
          <div>
            <TypographyCo variant="inherit" color="primary">
              Servicios especiales
            </TypographyCo>{" "}
            <TypographyCo variant="inherit">
              - Sin servicios especiales
            </TypographyCo>
          </div>
        }
        labelIcon="VER MÁS"
        expandedDetail
        sizeIcon="medium"
        child="Ejemplo Componente equipaje permitido"
      />
    </div>
  )
}

export default AccodionSection
