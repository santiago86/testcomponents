import palette from "../palette"

export default {
  root: {
    position: "relative",
    marginTop: "8px",
    marginBottom: "8px",
    outline: "none",
    outlineColor: "transparent",
    "& $notchedOutline": {
      borderColor: palette.grey["300"],
    },
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      borderColor: palette.primary.main,
    },
    "&$focused $notchedOutline": {
      borderColor: palette.primary.main,
      borderWidth: 1,
    },
  },
}
