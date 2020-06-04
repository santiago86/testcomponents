import palette from "../palette"

export default {
  root: {
    "&$selected": {
      backgroundColor: palette.selection,
    },
    "&$selected&:hover": {
      backgroundColor: palette.selection,
    },
    "&:hover": {
      backgroundColor: palette.selection,
    },
  },
}
