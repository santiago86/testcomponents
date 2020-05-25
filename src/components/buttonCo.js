import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

import Left from "@material-ui/icons/ChevronLeft"
import Right from "@material-ui/icons/ChevronRight"
import Add from "@material-ui/icons/Add"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  buttonSmall: {
    margin: theme.spacing(1),
    paddingRight: theme.spacing(1.3),
    paddingLeft: theme.spacing(1.3),
    fontSize: 12,
  },
  icon: {
    margin: theme.spacing(0),
    fontSize: 24,
  },
  loading: {
    width: 25,
    height: 25,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  loadingMedium: {
    width: 20,
    height: 20,
    paddingTop: theme.spacing(0.3),
    paddingBottom: theme.spacing(0.3),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  loadingSmall: {
    width: 13,
    height: 13,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
}))

function ButtonCo() {
  const classes = useStyles()

  return (
    <div>
      <Button variant="contained" size="large">
        Label
      </Button>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        className={classes.button}
        startIcon={<Add className={classes.icon} />}
      >
        Label
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        endIcon={<Right className={classes.icon} />}
      >
        Label
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<Left className={classes.icon} />}
        endIcon={<Right className={classes.icon} />}
      >
        Label
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
      >
        <CircularProgress
          variant="indeterminate"
          color="white"
          size="25"
          className={classes.loading}
        />
      </Button>
      <br />
      <br />
      <Button variant="contained" size="medium" color="secondary">
        Label
      </Button>{" "}
      <Button
        variant="contained"
        size="medium"
        color="secondary"
        className={classes.button}
        startIcon={<Add className={classes.icon} />}
      >
        Label
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        className={classes.button}
        endIcon={<Right className={classes.icon} />}
      >
        Label
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        className={classes.button}
        startIcon={<Left className={classes.icon} />}
        endIcon={<Right className={classes.icon} />}
      >
        Label
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        className={classes.button}
      >
        <CircularProgress
          variant="indeterminate"
          color="white"
          size="20"
          className={classes.loadingMedium}
        />
      </Button>
      <br />
      <br />
      <Button variant="contained" size="small" color="secondary">
        Label
      </Button>{" "}
      <Button
        variant="contained"
        size="small"
        color="secondary"
        className={classes.buttonSmall}
        startIcon={<Add className={classes.icon} />}
      >
        Label
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.buttonSmall}
        endIcon={<Right className={classes.icon} />}
      >
        Label
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.buttonSmall}
        startIcon={<Left className={classes.icon} />}
        endIcon={<Right className={classes.icon} />}
      >
        Label
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        className={classes.buttonSmall}
      >
        <CircularProgress
          variant="indeterminate"
          color="white"
          size="15"
          className={classes.loadingSmall}
        />
      </Button>
      <br />
      <br />
      <Button variant="outlined" size="large">
        Label
      </Button>
      <Button
        variant="outlined"
        size="large"
        color="secondary"
        className={classes.button}
        startIcon={<Add className={classes.icon} />}
      >
        Label
      </Button>
      <Button
        variant="outlined"
        size="large"
        className={classes.button}
        endIcon={<Right className={classes.icon} />}
      >
        Label
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        className={classes.shadow}
        startIcon={<Left className={classes.icon} />}
        endIcon={<Right className={classes.icon} />}
      >
        Label sombra
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        className={classes.button}
      >
        <CircularProgress
          variant="indeterminate"
          color="white"
          size="25"
          className={classes.loading}
        />
      </Button>
      <br />
      <br />
      <Button variant="contained" color="secondary" disabled>
        secondary
      </Button>{" "}
      <Button variant="contained">defaul</Button> <br />
      <Button variant="outlined" color="secondary">
        Hello
      </Button>
      <Button variant="outlined" color="primary">
        Hello
      </Button>{" "}
      <Button color="secondary" variant="outlined" disabled>
        Hello
      </Button>{" "}
      <br />
      <Button>defaul</Button>
      <Button color="secondary">Hello</Button>
      <Button color="primary">Hello</Button>{" "}
      <Button color="secondary" disabled>
        Hello
      </Button>
    </div>
  )
}

export default ButtonCo
