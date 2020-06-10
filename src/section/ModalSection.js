import React from "react"
import Grid from "@material-ui/core/Grid"
import ButtonCo from "../components/buttonCo"
import ModalCo from "../components/UI/modal/modalCo"
import ModalContentCo from "../components/UI/modal/modalContentCo"
import ModalTitleCo from "../components/UI/modal/modalTitleCo"
import ModalColumsCo from "../components/UI/modal/modalColumsCo"

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

export default function ModalSection() {
  const [state, setState] = React.useState({
    openModal1: false,
    openModal2: false,
    openModal3: false,
    openModal4: false,
    openModal5: false,
    openModal6: false,
    openModal7: false,
    openModal8: false,
    openModalBig: false,
  })

  const handleOpen = (set, modal) => {
    const newState = { ...state }
    newState[modal] = set
    setState(newState)
  }
  const {
    openModal1,
    openModal2,
    openModal3,
    openModal4,
    openModal5,
    openModal6,
    openModal7,
    openModal8,
    openModalBig,
  } = state

  /**
   * Large modal with a lot of items inside.
   */
  const bigModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModalBig")}
      open={openModalBig}
      primarybutton="Continuar"
      showClose
    >
      <ModalTitleCo>Título</ModalTitleCo>
      <ModalContentCo>{pileButtons()}</ModalContentCo>
      <ModalContentCo>{pileButtons(false)}</ModalContentCo>
      <ModalContentCo>
        <ButtonCo variant="contained">Bottom</ButtonCo>
      </ModalContentCo>
    </ModalCo>
  )

  /**
   * Basic modal with one Action button
   * To make the button appear, just place `primarybutton`
   * If you want an action for this button, put `onPrimary`
   */
  const firstModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal1")}
      open={openModal1}
      primarybutton="Continuar"
      showClose
    >
      <ModalContentCo>
        <ButtonCo variant="contained">Contenido</ButtonCo>
      </ModalContentCo>
    </ModalCo>
  )
  /**
   * Basic modal with two Action buttons
   * To make the second button appear, just place `secondarybutton`
   * If you want an action for this button, put `onSecondary`
   */
  const secondModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal2")}
      open={openModal2}
      primarybutton="Continuar"
      secondarybutton="Cancelar"
      showClose
    >
      <ModalContentCo>
        <ButtonCo variant="contained">Contenido</ButtonCo>
      </ModalContentCo>
    </ModalCo>
  )
  /**
   * Basic modal without the close button.
   * ONLY remove the `showClose`prop.
   */
  const thirdModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal3")}
      open={openModal3}
      primarybutton="Continuar"
      secondarybutton="Cancelar"
    >
      <ModalContentCo>
        <ButtonCo variant="contained">Contenido</ButtonCo>
      </ModalContentCo>
    </ModalCo>
  )
  /**
   * Basic modal without Action Buttons.
   * Do not place `primarybutton` nor `secondaryButton`
   */
  const fourthModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal4")}
      open={openModal4}
      showClose
    >
      <ModalContentCo>
        <ButtonCo variant="contained">Contenido</ButtonCo>
      </ModalContentCo>
    </ModalCo>
  )
  /**
   * Basic modal with one Action button.
   * If the button exceeds the lenght, it will continue next line.
   * Valid up to three lines.
   */
  const fifthModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal5")}
      open={openModal5}
      primarybutton="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      showClose
    >
      <ModalTitleCo>Título</ModalTitleCo>
      <ModalContentCo>
        <ButtonCo variant="contained">Contenido</ButtonCo>
      </ModalContentCo>
    </ModalCo>
  )
  /**
   * Basic modal with two Action buttons.
   * If one or both of the buttons exceeds the lenght,
   * it will continue next line.
   * Valid up to three lines.
   */
  const sixthModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal6")}
      open={openModal6}
      primarybutton="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      secondarybutton="Cancelar"
      showClose
    >
      <ModalTitleCo>Título</ModalTitleCo>
      <ModalContentCo>
        <ButtonCo variant="contained">Contenido</ButtonCo>
      </ModalContentCo>
    </ModalCo>
  )

  /**
   * Two column Modal. In order for it to behave like this
   * pass a child with type `ModalColumsCo` with two `<div>`components.
   */
  const seventhModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal7")}
      open={openModal7}
      primarybutton="Continuar"
      secondarybutton="Cancelar"
      showClose
    >
      <ModalTitleCo>Título</ModalTitleCo>
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
    </ModalCo>
  )
  /**
   * Two column Modal. But with more stuff
   */
  const eighthModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal8")}
      open={openModal8}
      primarybutton="Continuar"
      secondarybutton="Cancelar"
      showClose
    >
      <ModalTitleCo>Título</ModalTitleCo>
      <ModalColumsCo>
        <div>
          <ModalContentCo>{pileButtons(false)}</ModalContentCo>
        </div>
        <div>
          <ModalContentCo>{pileButtons(false)}</ModalContentCo>
        </div>
      </ModalColumsCo>
    </ModalCo>
  )

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ButtonCo
          variant="contained"
          onClick={() => handleOpen(true, "openModal1")}
        >
          Opción única
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo
          variant="contained"
          onClick={() => handleOpen(true, "openModal2")}
        >
          Dos Opciones
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo
          variant="contained"
          onClick={() => handleOpen(true, "openModal3")}
        >
          Sin cerrar
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo
          variant="contained"
          onClick={() => handleOpen(true, "openModal4")}
        >
          Sin opciones
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo
          variant="contained"
          onClick={() => handleOpen(true, "openModal5")}
        >
          Boton 3 Lineas
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo
          variant="contained"
          onClick={() => handleOpen(true, "openModal6")}
        >
          Boton 3 lineas (Dos Opciones)
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo
          variant="contained"
          onClick={() => handleOpen(true, "openModal7")}
        >
          Dos columnas
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo
          variant="contained"
          onClick={() => handleOpen(true, "openModal8")}
        >
          Dos columnas full
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo
          variant="contained"
          onClick={() => handleOpen(true, "openModalBig")}
        >
          Modal Grande
        </ButtonCo>
      </Grid>
      {/* Always declarate the modals at the bottom of the JSX */}
      {firstModal}
      {secondModal}
      {thirdModal}
      {fourthModal}
      {fifthModal}
      {sixthModal}
      {seventhModal}
      {eighthModal}
      {bigModal}
    </Grid>
  )
}
