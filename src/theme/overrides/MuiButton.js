import palette from "../palette"

export default {
  root: {
    transition:
      "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    padding: "8px 20px",
    fontSize: "1rem",
    lineHeight: 1.5,
    boxShadow: "none",
  },
  sizeSmall: {
    padding: "4px 12px",
    fontSize: "0.75rem",
    lineHeight: 1.33,
  },
  sizeLarge: {
    fontSize: "1rem",
    padding: "12px 24px",
  },
  contained: {
    // gray variant
    "&:hover": {
      backgroundColor: palette.white,
      color: palette.primary.main,
    },
    "&:disabled": {
      backgroundColor: palette.grey["200"],
      color: palette.primary.contrastText,
    },
  },
  containedPrimary: {
    backgroundColor: palette.primary.main,
    "&:hover": {
      background: palette.gradients.gradient3,
      color: palette.white,
    },
    "&:active": {
      background: palette.gradients.gradient4,
    },
  },
  containedSecondary: {
    backgroundColor: palette.secondary.dark,
    "&:hover": {
      background: palette.gradients.gradientDark,
      color: palette.white,
    },
    "&:active": {
      background: palette.gradients.gradient2,
    },
  },
  outlined: {
    padding: "8px 20px",
    backgroundColor: "transparent",
    border: "solid 1px",
    borderColor: palette.white,
    color: palette.white,
    "&:hover": {
      backgroundColor: palette.white,
      color: palette.primary.main,
    },
    "&:disabled": {
      backgroundColor: "transparent",
      border: "solid 1px",
      borderColor: palette.white,
      color: palette.white,
      opacity: 0.5,
    },
  },
  outlinedPrimary: {
    borderColor: palette.primary.main,
    color: palette.primary.main,
    "&:hover": {
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      borderColor: palette.primary.main,
    },
    "&:disabled": {
      opacity: 1,
      backgroundColor: palette.grey["100"],
      border: "solid 1px",
      borderColor: palette.grey["300"],
      color: palette.grey["400"],
    },
  },
  outlinedSecondary: {
    borderColor: palette.secondary.dark,
    color: palette.secondary.dark,
    "&:hover": {
      backgroundColor: palette.secondary.dark,
      color: palette.primary.contrastText,
      borderColor: palette.secondary.dark,
    },
    "&:disabled": {
      opacity: 1,
      backgroundColor: palette.grey["100"],
      border: "solid 1px",
      borderColor: palette.grey["300"],
      color: palette.grey["400"],
    },
  },
}
