import palette from "../palette"

export default {
  root: {
    position: "relative",
    marginTop: 8,
    marginBottom: 8,
    outline: "none",
    outlineColor: palette.transparent.main,
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
