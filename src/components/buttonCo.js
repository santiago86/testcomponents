import React, { useMemo } from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import clsx from "clsx"

import CircularProgress from "@material-ui/core/CircularProgress"

const VARIANTS_COLORS_MAP = {
  // Colors
  grey: "primary",
  inverted: "primary",
  confirm: "primary",
  // Variants
  shadow: "contained",
}

const widthSize = 20

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  loadingLarge: {
    width: widthSize,
    height: widthSize,
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
    marginRight: theme.spacing(4.1),
    marginLeft: theme.spacing(4.1),
    color: "inherit",
  },
  loadingMedium: {
    width: widthSize,
    height: widthSize,
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
    marginRight: theme.spacing(3.8),
    marginLeft: theme.spacing(3.8),
    color: "inherit",
  },
  loadingSmall: {
    width: 14,
    height: 14,
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
    marginRight: theme.spacing(3.6),
    marginLeft: theme.spacing(3.6),
    color: "inherit",
  },
}))

// Here are just the new styles "variants"
const useClasses = makeStyles((theme) => ({
  outlinedPrimary: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.transparent.main,
      color: theme.palette.primary.main,
      "&:active, &:focus": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
    },
  },
  outlinedSecondary: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.transparent.main,
      color: theme.palette.secondary.dark,
      "&:active, &:focus": {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
      },
    },
  },
  outlinedGrey: {
    borderColor: theme.palette.grey[500],
    border: 1,
    borderStyle: "solid",
    color: theme.palette.grey[500],
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[500],
      borderColor: theme.palette.grey[500],
    },
    "&:disabled": {
      bordercolor: theme.palette.grey[400],
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.grey[400],
    },
  },
  outlinedInverted: {
    borderColor: theme.palette.common.white,
    border: 1,
    borderStyle: "solid",
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.primary.main,
      borderColor: theme.palette.common.white,
      background: theme.palette.common.white,
    },
    "&:disabled": {
      bordercolor: theme.palette.transparent.bg,
      border: 1,
      borderStyle: "solid",
      color: theme.palette.transparent.text,
      background: theme.palette.transparent.main,
    },
  },
  shadowPrimary: {
    boxShadow: `1px 2px 4px ${theme.palette.transparent.shadow}`,
    "&:hover": {
      boxShadow: `1px 2px 4px ${theme.palette.transparent.shadow}`,
    },
    "&:disabled": {
      backgroundColor: theme.palette.transparent.main,
      bordercolor: theme.palette.transparent.bg,
      border: 1,
      color: theme.palette.transparent.bg,
      borderStyle: "solid",
      boxShadow: "none",
    },
  },
  containedConfirm: {
    background: theme.palette.success.main,
    color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.success.main,
      color: theme.palette.common.white,
    },
    "&:active": {
      background: theme.palette.success.main,
      color: theme.palette.common.white,
    },
    "&:disabled": {
      background: theme.palette.grey[200],
      color: theme.palette.common.white,
    },
  },
  Inverted: {
    border: "none",
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.transparent.bg2,
    },
    "&:focus": {
      border: 0,
      outline: 0,
    },
    "&:disabled": {
      color: theme.palette.grey[300],
    },
  },
}))

const LOADING_SIZES = {
  small: "loadingSmall",
  medium: "loadingMedium",
  large: "loadingLarge",
}

function ButtonCo({
  color = "primary",
  variant = "",
  start: StartIcon,
  end: EndIcon,
  children,
  loading,
  ...props
}) {
  const { size } = props
  const styles = useStyles()
  const classes = useClasses()
  const classNameVariant = useMemo(() => {
    return variant + color[0].toUpperCase() + color.substr(1)
  }, [color, variant])
  const className = classes[classNameVariant] || null
  const defaultColor = VARIANTS_COLORS_MAP[color] || color
  const defaultVariant = VARIANTS_COLORS_MAP[variant] || variant
  const loadingSize = LOADING_SIZES[size] || LOADING_SIZES.medium
  return (
    <Button
      {...props}
      className={clsx(styles.button, className)}
      color={defaultColor}
      variant={defaultVariant}
      startIcon={!loading && StartIcon && <StartIcon />}
      endIcon={!loading && EndIcon && <EndIcon />}
    >
      {loading ? (
        <>
          <CircularProgress
            variant="indeterminate"
            color="primary"
            size="25"
            className={styles[loadingSize]}
          />
        </>
      ) : (
        children
      )}
    </Button>
  )
}

ButtonCo.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
  start: PropTypes.elementType,
  end: PropTypes.elementType,
  children: PropTypes.node,
  loading: PropTypes.bool,
  size: PropTypes.string,
}

ButtonCo.defaultProps = {
  color: "primary",
  variant: "",
  size: "medium",
  start: null,
  end: null,
  children: null,
  loading: false,
}
export default ButtonCo
