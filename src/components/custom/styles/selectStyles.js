import { makeStyles } from "@material-ui/core/styles"
import theme from "../../../theme"
import icon from "../../../assets/icons/down.svg"

const generalStyle = {
  // Settings for the Select input
  component: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    position: "relative",
    display: "block",
  },
  select: {
    // Characteristics of the original Select material component
    borderRadius: theme.shape.borderRadius,

    // Dynamic border based on error
    borderColor: (props) =>
      props.error ? theme.palette.error.main : theme.palette.grey["300"],

    padding: "16px 14px",
    // Applying original typography options
    ...theme.typography.body1,
    overflow: "hidden",

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
      bordercolor: theme.palette.grey[400],
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.grey[700],
      pointer: "default",
      pointerEvents: "none",
    },

    // Dynamic response
    color: theme.typography.body1.color,
  },

  // Settings for the Dropdown paper
  dropdown: {
    display: "block",
    position: "absolute",
    backgroundColor: theme.palette.white,
    minWidth: "100%",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: "1",
    maxHeight: "200px",
    overflowY: "auto",
    ...theme.typography.body1,
  },

  // Settings for the Dropdown buttons
  dropdownContent: {
    textDecoration: "none",
    display: "block",
    textAlign: "left",
    border: "transparent",
    backgroundColor: "transparent",
    width: "100%",
    padding: "6px 16px",
    outline: "none",
    ...theme.typography.body1,
    color: theme.palette.text.primary,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.selection,
    },
  },

  // Settings for the Dropdown dividers
  dropdownDivider: {
    borderStyle: "solid",
    borderColor: theme.palette.divider,
    lineHeight: 1,
    borderBottom: 0,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: "0",
    marginBottom: "0",
  },
}

generalStyle.selectDefault = {
  ...generalStyle.select,
  color: theme.palette.grey["600"],
}

const styles = makeStyles(generalStyle)

export default styles
