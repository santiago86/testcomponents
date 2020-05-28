import { makeStyles } from "@material-ui/core/styles"
import theme from "../../../theme"
import icon from "../../../assets/icons/down.svg"

const styles = makeStyles({
  root: {
    // Characteristics of the original Select material component
    borderRadius: theme.shape.borderRadius,
    borderColor: theme.palette.grey["300"],
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    padding: "18.5px 14px",
    // Applying original typography options
    ...theme.typography.body1,

    // Custom arrow setup
    background: `url(${icon}) no-repeat right center`,
    backgroundPosition: "right 5px top 50%",
    backgroundColor: "transparent",
    "-webkit-appearance": "none",
    "-moz-appearance": "none",

    // Personalized characteristics
    width: "100%",
    height: theme.spacing(7),

    // Events setup
    "&&": {
      paddingRight: 32,
    },
    cursor: "pointer",
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
    "&:focus": {
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
    },
    outline: "none",
    "&:error": {
      borderColor: theme.palette.error.main,
    },
    "&:disabled": {
      borderColor: theme.palette.action.disabled,
      cursor: "default",
    },

    // Dynamic response
    color: (props) =>
      props.value === ""
        ? theme.palette.grey["600"]
        : theme.typography.body1.color,
  },
})

export default styles
