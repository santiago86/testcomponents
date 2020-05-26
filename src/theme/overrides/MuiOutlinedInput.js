export default {
  root: {
    position: "relative",
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      borderColor: "#0060A9",
    },
    "&$focused $notchedOutline": {
      borderColor: "#0060A9",
      borderWidth: 1,
    },
    "&$disabled": {
      color: "#999999",
      backgroundColor: "#EFEFEE",
    },
  },
}
