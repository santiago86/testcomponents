import palette from "../palette"

export default {
  root: {
    position: "relative",
    marginTop: "8px",
    marginBottom: "8px",
    "& $notchedOutline": {
      borderColor: palette.grey["300"],
    },
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      borderColor: palette.primary.main,
    },
    "&$focused": {
      borderColor: palette.primary.main,
      borderWidth: 1,
    },
    "&$disabled": {
      color: palette.grey["500"],
      backgroundColor: palette.grey["100"],
    },
  },
}
