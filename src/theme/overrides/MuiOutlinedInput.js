import palette from "../palette"

export default {
  root: {
    position: "relative",
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      borderColor: palette.primary.main,
    },
    "&$focused $notchedOutline": {
      borderColor: palette.primary.main,
      borderWidth: 1,
    },
    "&$disabled": {
      color: palette.grey["500"],
      backgroundColor: palette.grey["100"],
    },
  },
}
