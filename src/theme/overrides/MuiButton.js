import palette from "../palette"

const containedPrimary = {
  color: palette.common.white,
  backgroundColor: palette.primary.main,
  boxShadow: "none",
  "&:hover": {
    background: `
      linear-gradient(
        to right,
        ${palette.primary.dark} 0%,
        ${palette.primary.main} 100%
      )
    `,
    boxShadow: "none",
  },
  "&:active": {
    background: `
      linear-gradient(
        to right,
        ${palette.secondary.dark} 0%,
        ${palette.primary.main} 100%
      )
    `,
    boxShadow: "none",
  },
  "&:disabled": {
    color: palette.common.white,
    backgroundColor: palette.text.disabled,
  },
}

const outlinedPrimary = {
  borderColor: palette.primary.main,
  border: 1,
  borderStyle: "solid",
  color: palette.primary.main,
  "&:hover": {
    color: palette.common.white,
    backgroundColor: palette.primary.main,
  },
  "&:active": {
    color: palette.common.white,
    backgroundColor: palette.primary.main,
  },
  "&:disabled": {
    bordercolor: palette.grey[400],
    backgroundColor: palette.grey[100],
    color: palette.grey[400],
  },
}

export default {
  contained: {
    ...containedPrimary,
  },
  containedPrimary,
  containedSecondary: {
    backgroundColor: palette.secondary.dark,
    "&:hover": {
      background: `
        linear-gradient(
          to right,
          ${palette.secondary.main} 0%,
          ${palette.secondary.dark} 100%
        )
      `,
    },
    "&:active": {
      background: `
        linear-gradient(
          to right,
          ${palette.primary.main} 0%,
          ${palette.secondary.dark} 100%
        )
      `,
    },
    "&:disabled": {
      color: palette.common.white,
      backgroundColor: palette.grey[200],
    },
  },
  outlined: {
    ...outlinedPrimary,
  },
  outlinedPrimary,
  outlinedSecondary: {
    borderColor: palette.secondary.dark,
    border: 1,
    borderStyle: "solid",
    color: palette.secondary.dark,
    "&:hover": {
      color: palette.common.white,
      backgroundColor: palette.secondary.dark,
    },
    "&:active": {
      color: palette.common.white,
      backgroundColor: palette.secondary.dark,
    },
    "&:disabled": {
      bordercolor: palette.grey[400],
      backgroundColor: palette.grey[100],
      color: palette.grey[400],
    },
  },
  startIcon: {
    marginRight: 4,
  },
  endIcon: {
    marginLeft: 4,
  },
}
