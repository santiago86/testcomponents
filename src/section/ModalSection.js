import React from "react"
import Grid from "@material-ui/core/Grid"
import ButtonCo from "../components/buttonCo"
import ModalCo from "../components/modalCo"

export default function ModalSection() {
  const [state, setState] = React.useState({
    openModal1: false,
    openModal2: false,
    openModal3: false,
    openModal4: false,
    openModal5: false,
    openModal6: false,
  })

  const handleOpen = (set, modal) => {
    const newState = { ...state }
    newState[modal] = set
    setState(newState)
  }
  const { openModal1, openModal2, openModal5, openModal6 } = state
  const firstModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal1")}
      open={openModal1}
      primarybutton="continuar"
    >
      Contenido
    </ModalCo>
  )
  const secondModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal2")}
      open={openModal2}
      primarybutton="Continuar"
      secondarybutton="Cancelar"
    >
      Contenido
    </ModalCo>
  )
  /* const thirdModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal1")}
      open={openModal1}
    />
  )
  const forthModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal1")}
      open={openModal1}
    />
  ) */
  const fifthModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal5")}
      open={openModal5}
      primarybutton="continuar"
      size="small"
    >
      Contenido
    </ModalCo>
  )
  const sixthModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal6")}
      open={openModal6}
      primarybutton="Continuar"
      secondarybutton="Cancelar"
      size="small"
    >
      Contenido
    </ModalCo>
  )
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ButtonCo onClick={() => handleOpen(true, "openModal1")}>
          Opción única
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo onClick={() => handleOpen(true, "openModal2")}>
          Dos Opciones
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo onClick={() => handleOpen(true, "openModal3")}>
          Sin cerrar
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo onClick={() => handleOpen(true, "openModal4")}>
          Sin opciones
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo onClick={() => handleOpen(true, "openModal5")}>
          Opción única XS
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo onClick={() => handleOpen(true, "openModal6")}>
          Dos Opciones XS
        </ButtonCo>
      </Grid>
      {firstModal}
      {secondModal}
      {fifthModal}
      {sixthModal}
    </Grid>
  )
}
