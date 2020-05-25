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
      backgroundColor: palette.text.disabled,
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
    "&:disabled": {
      bordercolor: palette.grey[400],
      backgroundColor: palette.grey[100],
      color: palette.grey[400],
    },
  },
  outlineGray: {
    borderColor: palette.grey[500],
    border: 1,
    borderStyle: "solid",
    color: palette.grey[500],
    "&:hover": {
      color: palette.common.white,
      backgroundColor: palette.grey[500],
    },
    "&:disabled": {
      bordercolor: palette.grey[400],
      backgroundColor: palette.grey[100],
      color: palette.grey[400],
    },
  },
  outlineInvert: {
    borderColor: palette.common.white,
    border: 1,
    borderStyle: "solid",
    color: palette.common.white,
    "&:hover": {
      color: palette.primary.main,
      backgroundColor: palette.common.white,
    },
    "&:disabled": {
      bordercolor: palette.transparent.bg,
      color: palette.transparent.text,
    },
  },
  shadow: {
    boxShadow: `0 2px 4px  ${palette.transparent.shadow}`,
  },
}
