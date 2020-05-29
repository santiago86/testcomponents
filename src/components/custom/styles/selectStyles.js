import { makeStyles } from "@material-ui/core/styles"
import theme from "../../../theme"
import icon from "../../../assets/icons/down.svg"

const generalStyle = {
  // Settings for the general component envolving the select
  component: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    position: "relative",
    display: "block",
  },

  // Settings for the custom select component
  select: {
    // Characteristics of the original Select material component
    borderRadius: theme.shape.borderRadius,

    /** Sets the different border color if error prop was passed */
    borderColor: (props) =>
      props.error ? theme.palette.error.main : theme.palette.grey["300"],

    /** Sets the padding depending on whether the function has an icon */
    padding: (props) =>
      props.icon !== undefined ? "16px 14px 16px 50px" : "16px 14px",
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
      borderColor: theme.palette.grey[400],
      color: theme.palette.grey["500"],
      backgroundColor: theme.palette.grey["100"],
      cursor: "default",
      pointerEvents: "none",
      opacity: 1,
    },

    // Dynamic response
    color: theme.typography.body1.color,
  },
  // Settings for the adorment
  icon: {
    position: "absolute",
    bottom: theme.spacing(2),
    left: theme.spacing(1.8),
    pointerEvents: "none",
    color: theme.palette.grey["600"],
    background: "transparent",
    zIndex: 100,
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
    padding: "8px 0px",
    ...theme.typography.body1,
  },

  // Settings for the Dropdown buttons
  dropdownContent: {
    textDecoration: "none",
    display: "block",
    textAlign: "left",
    border: "transparent",
    width: "100%",
    padding: "6px 16px",
    outline: "none",
    ...theme.typography.body1,
    color: theme.palette.text.primary,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.selection,
    },
    /** Changes the property of the option if it has been selected */
    backgroundColor: (props) =>
      props.selected ? theme.palette.selection : "transparent",
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

/** Sets a different color if there is a value selected or not in the component */
generalStyle.selectDefault = {
  ...generalStyle.select,
  color: theme.palette.grey["600"],
}

const styles = makeStyles(generalStyle)

export default styles
