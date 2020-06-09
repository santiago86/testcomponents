import React from "react"

import { boolean, text } from "@storybook/addon-knobs"

import ModalCo from "./modalCo"
import ModalContentCo from "./modalContentCo"
import ModalTitleCo from "./modalTitleCo"
import ModalColumsCo from "./modalColumsCo"
import ButtonCo from "../../buttonCo"

const pileButtons = (stack = true) => {
  const bts = []
  for (let i = 0; i < 25; i += 1) {
    bts.push(
      <ButtonCo variant="contained" key={i} style={{ margin: 0 }}>
        Boton{i}
      </ButtonCo>
    )
    if (i !== 24 && stack) {
      bts.push(<br key={`i${i}`} />)
    }
  }
  return bts
}

const bigContent = [
  <ModalContentCo>{pileButtons()}</ModalContentCo>,
  <ModalContentCo>{pileButtons(false)}</ModalContentCo>,
  <ModalContentCo>
    <ButtonCo variant="contained">Bottom</ButtonCo>
  </ModalContentCo>,
]

export default {
  title: "Components|Modal",
  parameters: {
    info: {
      info: { inline: true },
      source: false,
      text: `
        Modal Copa
      `,
    },
  },
}

export const OneOption = () => {
  const [isOpen, setOpen] = React.useState(true)
  const handleOpen = (value) => {
    setOpen(value)
  }
  return (
    <div>
      <ButtonCo variant="contained" onClick={() => handleOpen(true)}>
        Abrir modal
      </ButtonCo>
      <ModalCo
        onClose={() => handleOpen(false)}
        open={isOpen}
        primarybutton={text("Set button", "Continuar")}
        showClose={boolean("Set showClose", true)}
      >
        <ModalContentCo>
          {!boolean("Show more content", false) && (
            <ButtonCo variant="contained">Contenido</ButtonCo>
          )}
          {boolean("Show more content", false) && bigContent}
        </ModalContentCo>
      </ModalCo>
    </div>
  )
}

export const TwoOptions = () => {
  const [isOpen, setOpen] = React.useState(true)
  const handleOpen = (value) => {
    setOpen(value)
  }
  return (
    <div>
      <ButtonCo variant="contained" onClick={() => handleOpen(true)}>
        Abrir modal
      </ButtonCo>
      <ModalCo
        onClose={() => handleOpen(false)}
        open={isOpen}
        primarybutton={text("Set primary", "Continuar")}
        secondarybutton={text("Set secondary", "Cancelar")}
        showClose={boolean("Set showClose", true)}
      >
        <ModalContentCo>
          {!boolean("Show more content", false) && (
            <ButtonCo variant="contained">Contenido</ButtonCo>
          )}
          {boolean("Show more content", false) && bigContent}
        </ModalContentCo>
      </ModalCo>
    </div>
  )
}

export const NoOptions = () => {
  const [isOpen, setOpen] = React.useState(true)
  const handleOpen = (value) => {
    setOpen(value)
  }
  return (
    <div>
      <ButtonCo variant="contained" onClick={() => handleOpen(true)}>
        Abrir modal
      </ButtonCo>
      <ModalCo
        onClose={() => handleOpen(false)}
        open={isOpen}
        showClose={boolean("Set showClose", true)}
      >
        <ModalContentCo>
          {!boolean("Show more content", false) && (
            <ButtonCo variant="contained">Contenido</ButtonCo>
          )}
          {boolean("Show more content", false) && bigContent}
        </ModalContentCo>
      </ModalCo>
    </div>
  )
}

export const Title = () => {
  const [isOpen, setOpen] = React.useState(true)
  const handleOpen = (value) => {
    setOpen(value)
  }
  return (
    <div>
      <ButtonCo variant="contained" onClick={() => handleOpen(true)}>
        Abrir modal
      </ButtonCo>
      <ModalCo
        onClose={() => handleOpen(false)}
        open={isOpen}
        primarybutton="Continuar"
        secondarybutton="Cancelar"
        showClose={boolean("Set showClose", true)}
      >
        {text("Set Title", "Título") && (
          <ModalTitleCo>{text("Set Title", "Título")}</ModalTitleCo>
        )}
        <ModalContentCo>
          {!boolean("Show more content", false) && (
            <ButtonCo variant="contained">Contenido</ButtonCo>
          )}
          {boolean("Show more content", false) && bigContent}
        </ModalContentCo>
      </ModalCo>
    </div>
  )
}

export const TwoColumns = () => {
  const [isOpen, setOpen] = React.useState(true)
  const handleOpen = (value) => {
    setOpen(value)
  }
  return (
    <div>
      <ButtonCo variant="contained" onClick={() => handleOpen(true)}>
        Abrir modal
      </ButtonCo>
      <ModalCo
        onClose={() => handleOpen(false)}
        open={isOpen}
        primarybutton="Continuar"
        secondarybutton="Cancelar"
        showClose={boolean("Set showClose", true)}
      >
        {text("Set Title", "Título") && (
          <ModalTitleCo>{text("Set Title", "Título")}</ModalTitleCo>
        )}
        {boolean("See More Content", true) && (
          <ModalColumsCo>
            <div>
              <ModalContentCo>{pileButtons(false)}</ModalContentCo>
            </div>
            <div>
              <ModalContentCo>{pileButtons(false)}</ModalContentCo>
            </div>
          </ModalColumsCo>
        )}
        {!boolean("See More Content", true) && (
          <ModalColumsCo>
            <div>
              <ModalContentCo>
                <ButtonCo variant="contained">Contenido</ButtonCo>
              </ModalContentCo>
            </div>
            <div>
              <ModalContentCo>
                <ButtonCo variant="contained">Contenido</ButtonCo>
              </ModalContentCo>
              <ModalContentCo>
                <ButtonCo variant="contained">Contenido 2</ButtonCo>
              </ModalContentCo>
              <ModalContentCo>
                <ButtonCo variant="contained">Contenido 3</ButtonCo>
              </ModalContentCo>
            </div>
          </ModalColumsCo>
        )}
      </ModalCo>
    </div>
  )
}
