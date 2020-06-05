import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import PopperCo from "../components/popperCo"
import ButtonCo from "../components/buttonCo"
import TypographyCo from "../components/typographyCo"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    borderColor: theme.palette.grey[200],
    borderWidth: 1,
    borderStyle: "solid",
    width: "98%",
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 0,
    marginRight: 0,
  },
}))

const PopperSection = () => {
  const classes = useStyles()
  const [popper1, setPopper1] = useState(null)
  const [popper2, setPopper2] = useState(null)
  const [popper3, setPopper3] = useState(null)
  const [popper4, setPopper4] = useState(null)
  const [popper5, setPopper5] = useState(null)
  const [popper6, setPopper6] = useState(null)

  const [popper7, setPopper7] = useState(null)
  const [popper8, setPopper8] = useState(null)
  const [popper9, setPopper9] = useState(null)
  const [popper10, setPopper10] = useState(null)
  const [popper11, setPopper11] = useState(null)
  const [popper12, setPopper12] = useState(null)
  const [popper13, setPopper13] = useState(null)
  const [popper14, setPopper14] = useState(null)

  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)
  const [open6, setOpen6] = useState(false)
  const [open7, setOpen7] = useState(false)
  const [open8, setOpen8] = useState(false)
  const [open9, setOpen9] = useState(false)
  const [open10, setOpen10] = useState(false)
  const [open11, setOpen11] = useState(false)
  const [open12, setOpen12] = useState(false)
  const [open13, setOpen13] = useState(false)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TypographyCo
            component="h1"
            variant="contained"
            color="primary"
            style={{ fontSize: 42, marginTop: 20 }}
          >
            Floating Box
          </TypographyCo>
          <Divider variant="middle" className={classes.divider} />

          <TypographyCo component="h1" variant="outlined">
            Arrow Top
          </TypographyCo>
        </Grid>
        <Grid item xs={4}>
          <TypographyCo component="label" variant="outlined">
            Alineación a la Izquierda
          </TypographyCo>
          <ButtonCo
            variant="contained"
            color="primary"
            onClick={() => setOpen(!open)}
            ref={setPopper1}
          >
            Bottom-start
          </ButtonCo>
          <PopperCo
            anchorEl={popper1}
            open={open}
            placement="bottom-start"
            flip={false}
          >
            <TypographyCo component="span" variant="outlined">
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
            </TypographyCo>
          </PopperCo>
        </Grid>
        <Grid item xs={4}>
          <TypographyCo component="label" variant="outlined">
            Alineación Centrada
          </TypographyCo>
          <ButtonCo
            variant="contained"
            color="primary"
            onClick={() => setOpen1(!open1)}
            ref={setPopper2}
          >
            Bottom
          </ButtonCo>
          <PopperCo
            anchorEl={popper2}
            open={open1}
            placement="bottom"
            flip={false}
          >
            <TypographyCo component="span" variant="outlined">
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
            </TypographyCo>
          </PopperCo>
        </Grid>
        <Grid item xs={4}>
          <TypographyCo component="label" variant="outlined">
            Alineación a la derecha
          </TypographyCo>
          <ButtonCo
            variant="contained"
            color="primary"
            onClick={() => setOpen2(!open2)}
            ref={setPopper3}
          >
            Bottom-end
          </ButtonCo>
          <PopperCo
            anchorEl={popper3}
            open={open2}
            placement="bottom-end"
            flip={false}
          >
            <TypographyCo component="span" variant="outlined">
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
            </TypographyCo>
          </PopperCo>
        </Grid>
        <Divider variant="middle" className={classes.divider} />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TypographyCo component="h1" variant="outlined">
            Arrow Bottom
          </TypographyCo>
        </Grid>
        <Grid item xs={4}>
          <TypographyCo component="label" variant="outlined">
            Alineación a la Izquierda
          </TypographyCo>
          <ButtonCo
            variant="contained"
            color="primary"
            onClick={() => setOpen3(!open3)}
            ref={setPopper4}
          >
            Top-start
          </ButtonCo>
          <PopperCo
            anchorEl={popper4}
            open={open3}
            placement="top-start"
            flip={false}
          >
            <TypographyCo component="span" variant="outlined">
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
            </TypographyCo>
          </PopperCo>
        </Grid>
        <Grid item xs={4}>
          <TypographyCo component="label" variant="outlined">
            Alineación Centrada
          </TypographyCo>
          <ButtonCo
            variant="contained"
            color="primary"
            onClick={() => setOpen4(!open4)}
            ref={setPopper5}
          >
            Top
          </ButtonCo>
          <PopperCo
            anchorEl={popper5}
            open={open4}
            placement="top"
            flip={false}
          >
            <TypographyCo component="span" variant="outlined">
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
            </TypographyCo>
          </PopperCo>
        </Grid>
        <Grid item xs={4}>
          <TypographyCo component="label" variant="outlined">
            Alineación a la derecha
          </TypographyCo>
          <ButtonCo
            variant="contained"
            color="primary"
            onClick={() => setOpen5(!open5)}
            ref={setPopper6}
          >
            Top-end
          </ButtonCo>
          <PopperCo
            anchorEl={popper6}
            open={open5}
            placement="top-end"
            flip={false}
          >
            <TypographyCo component="span" variant="outlined">
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
            </TypographyCo>
          </PopperCo>
        </Grid>
        <Divider variant="middle" className={classes.divider} />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TypographyCo component="h1" variant="outlined">
            Arrow Left
          </TypographyCo>
        </Grid>
        <Grid item xs={4}>
          <TypographyCo component="label" variant="outlined">
            Alineación a la Izquierda
          </TypographyCo>
          <ButtonCo
            variant="contained"
            color="primary"
            onClick={() => setOpen6(!open6)}
            ref={setPopper7}
          >
            Left-start
          </ButtonCo>
          <PopperCo
            anchorEl={popper7}
            open={open6}
            placement="left-start"
            flip={false}
          >
            <TypographyCo component="span" variant="outlined">
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
            </TypographyCo>
          </PopperCo>
        </Grid>
        <Grid item xs={4}>
          <TypographyCo component="label" variant="outlined">
            Alineación Centrada
          </TypographyCo>
          <ButtonCo
            variant="contained"
            color="primary"
            onClick={() => setOpen7(!open7)}
            ref={setPopper8}
          >
            Left
          </ButtonCo>
          <PopperCo
            anchorEl={popper8}
            open={open7}
            placement="left"
            flip={false}
          >
            <TypographyCo component="span" variant="outlined">
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
            </TypographyCo>
          </PopperCo>
        </Grid>
        <Grid item xs={4}>
          <TypographyCo component="label" variant="outlined">
            Alineación a la derecha
          </TypographyCo>
          <ButtonCo
            variant="contained"
            color="primary"
            onClick={() => setOpen8(!open8)}
            ref={setPopper9}
          >
            Left-end
          </ButtonCo>
          <PopperCo
            anchorEl={popper9}
            open={open8}
            placement="left-end"
            flip={false}
          >
            <TypographyCo component="span" variant="outlined">
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
            </TypographyCo>
          </PopperCo>
        </Grid>
        <Divider variant="middle" className={classes.divider} />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TypographyCo component="h1" variant="outlined">
            Arrow Right
          </TypographyCo>
        </Grid>
        <Grid item xs={4}>
          <TypographyCo component="label" variant="outlined">
            Alineación a la Izquierda
          </TypographyCo>
          <ButtonCo
            variant="contained"
            color="primary"
            onClick={() => setOpen9(!open9)}
            ref={setPopper10}
          >
            Right-start
          </ButtonCo>
          <PopperCo
            anchorEl={popper10}
            open={open9}
            placement="right-start"
            flip={false}
          >
            <TypographyCo component="span" variant="outlined">
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
            </TypographyCo>
          </PopperCo>
        </Grid>
        <Grid item xs={4}>
          <TypographyCo component="label" variant="outlined">
            Alineación Centrada
          </TypographyCo>
          <ButtonCo
            variant="contained"
            color="primary"
            onClick={() => setOpen10(!open10)}
            ref={setPopper11}
          >
            Right
          </ButtonCo>
          <PopperCo
            anchorEl={popper11}
            open={open10}
            placement="right"
            flip={false}
          >
            <TypographyCo component="span" variant="outlined">
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
            </TypographyCo>
          </PopperCo>
        </Grid>
        <Grid item xs={4}>
          <TypographyCo component="label" variant="outlined">
            Alineación a la derecha
          </TypographyCo>
          <ButtonCo
            variant="contained"
            color="primary"
            onClick={() => setOpen11(!open11)}
            ref={setPopper12}
          >
            Right-end
          </ButtonCo>
          <PopperCo
            anchorEl={popper12}
            open={open11}
            placement="right-end"
            flip={false}
          >
            <TypographyCo component="span" variant="outlined">
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
            </TypographyCo>
          </PopperCo>
        </Grid>
        <Divider variant="middle" className={classes.divider} />
      </Grid>

      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <TypographyCo component="h1" variant="outlined">
            Arrow Primary
          </TypographyCo>
        </Grid>
        <Grid item xs={6}>
          <center>
            <TypographyCo component="label" variant="outlined">
              Login out shine
            </TypographyCo>
            <ButtonCo
              variant="contained"
              color="primary"
              onClick={() => setOpen12(!open12)}
              ref={setPopper13}
            >
              Bottom-end
            </ButtonCo>
            <PopperCo
              anchorEl={popper13}
              open={open12}
              color="primary"
              placement="bottom-end"
              flip={false}
            >
              <TypographyCo
                component="span"
                variant="outlined"
                style={{ color: "white" }}
              >
                You think water moves fast? You should see ice. It moves like it
                has a mind. Like it knows it killed the world once and got a
                taste for murder. After the avalanche, it took us a week to
                climb out.
              </TypographyCo>
            </PopperCo>
          </center>
        </Grid>
        <Grid item xs={6}>
          <center>
            <TypographyCo component="label" variant="outlined">
              Login with shine
            </TypographyCo>
            <ButtonCo
              variant="contained"
              color="primary"
              onClick={() => setOpen13(!open13)}
              ref={setPopper14}
            >
              Bottom-end
            </ButtonCo>
            <PopperCo
              anchorEl={popper14}
              open={open13}
              color="primary"
              placement="bottom-end"
              flip={false}
              shine
            >
              <TypographyCo
                component="span"
                variant="outlined"
                style={{ color: "white" }}
              >
                You think water moves fast? You should see ice. It moves like it
                has a mind. Like it knows it killed the world once and got a
                taste for murder. After the avalanche, it took us a week to
                climb out.
              </TypographyCo>
            </PopperCo>
          </center>
        </Grid>

        <Divider variant="middle" className={classes.divider} />
      </Grid>
    </div>
  )
}

export default PopperSection
