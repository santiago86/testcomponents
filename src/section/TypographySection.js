import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../theme"
import TypographyCo from "../components/typographyCo"

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 700,
    padding: theme.spacing(3),
    borderStyle: "solid",
    borderColor: theme.palette.primary,
  },
})

export default function Types() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TypographyCo variant="h1" gutterBottom>
        h1. Heading
      </TypographyCo>
      <TypographyCo variant="h2" gutterBottom>
        h2. Heading
      </TypographyCo>
      <TypographyCo variant="h3" gutterBottom>
        h3. Heading
      </TypographyCo>
      <TypographyCo variant="h4" gutterBottom>
        h4. Heading
      </TypographyCo>
      <TypographyCo variant="h5" gutterBottom>
        h5. Heading
      </TypographyCo>
      <TypographyCo variant="h6" gutterBottom>
        h6. Heading
      </TypographyCo>
      <TypographyCo variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </TypographyCo>
      <TypographyCo variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </TypographyCo>
      <TypographyCo variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </TypographyCo>
      <TypographyCo variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </TypographyCo>
      <TypographyCo variant="button" display="block" gutterBottom>
        button text
      </TypographyCo>
      <TypographyCo variant="caption" display="block" gutterBottom>
        caption text
      </TypographyCo>
      <TypographyCo variant="overline" display="block" gutterBottom>
        overline text
      </TypographyCo>
    </div>
  )
}
