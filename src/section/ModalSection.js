import React from "react"
import Grid from "@material-ui/core/Grid"
import ButtonCo from "../components/buttonCo"
import ModalCo from "../components/modalCo"
import ModalContentCo from "../components/modalContentCo"
import ModalTitleCo from "../components/modalTitleCo"

const buttons = () => {
  const bts = []
  for (let i = 0; i < 25; i += 1) {
    bts.push(
      <ButtonCo key={i} style={{ margin: 0 }}>
        Boton{i}
      </ButtonCo>
    )
    if (i !== 24) {
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
  } = state
  const firstModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal1")}
      open={openModal1}
      primarybutton="Continuar"
    >
      <ModalContentCo>{buttons()}</ModalContentCo>
      <ModalContentCo>
        <ButtonCo>Middle</ButtonCo>
      </ModalContentCo>
      <ModalContentCo>
        <ButtonCo>Bottom</ButtonCo>
      </ModalContentCo>
    </ModalCo>
  )
  const secondModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal2")}
      open={openModal2}
      primarybutton="Continuar"
      secondarybutton="Cancelar"
      showClose
    >
      <ModalContentCo>
        <ButtonCo>Contenido</ButtonCo>
      </ModalContentCo>
    </ModalCo>
  )
  const thirdModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal3")}
      open={openModal3}
      primarybutton="Continuar"
      secondarybutton="Cancelar"
    />
  )
  const fourthModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal4")}
      open={openModal4}
      showClose
    />
  )
  const fifthModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal5")}
      open={openModal5}
      primarybutton="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      showClose
    >
      <ModalTitleCo>Título</ModalTitleCo>
      <ModalContentCo>
        <ButtonCo>Contenido</ButtonCo>
      </ModalContentCo>
    </ModalCo>
  )
  const sixthModal = (
    <ModalCo
      onClose={() => handleOpen(false, "openModal6")}
      open={openModal6}
      primarybutton="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      secondarybutton="Cancelar"
      showClose
    >
      <ModalTitleCo>Título</ModalTitleCo>
      <ModalContentCo>
        <ButtonCo>Contenido</ButtonCo>
      </ModalContentCo>
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
          Boton 3 Lineas
        </ButtonCo>
      </Grid>
      <Grid item xs={3}>
        <ButtonCo onClick={() => handleOpen(true, "openModal6")}>
          Boton 3 lineas (Dos Opciones)
        </ButtonCo>
      </Grid>
      {firstModal}
      {secondModal}
      {thirdModal}
      {fourthModal}
      {fifthModal}
      {sixthModal}
    </Grid>
  )
}
