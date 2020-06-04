import React, { useMemo, forwardRef } from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import clsx from "clsx"

import CircularProgress from "@material-ui/core/CircularProgress"
import palette from "../theme/palette"

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
const useClasses = makeStyles(() => ({
  outlinedGrey: {
    borderColor: palette.grey[500],
    border: 1,
    borderStyle: "solid",
    color: palette.grey[500],
    "&:hover": {
      color: palette.common.white,
      backgroundColor: palette.grey[500],
      borderColor: palette.grey[500],
    },
    "&:disabled": {
      bordercolor: palette.grey[400],
      backgroundColor: palette.grey[100],
      color: palette.grey[400],
    },
  },
  outlinedInverted: {
    borderColor: palette.common.white,
    border: 1,
    borderStyle: "solid",
    color: palette.common.white,
    "&:hover": {
      color: palette.primary.main,
      borderColor: palette.common.white,
      background: palette.common.white,
    },
    "&:disabled": {
      bordercolor: "palette.transparent.bg",
      border: 1,
      borderStyle: "solid",
      color: palette.transparent.text,
      background: "transparent",
    },
  },
  shadowPrimary: {
    boxShadow: `1px 2px 4px ${palette.transparent.shadow}`,
    "&:hover": {
      boxShadow: `1px 2px 4px ${palette.transparent.shadow}`,
    },
    "&:disabled": {
      backgroundColor: "transparent",
      bordercolor: palette.transparent.bg,
      border: 1,
      color: palette.transparent.bg,
      borderStyle: "solid",
      boxShadow: "none",
    },
  },
  containedConfirm: {
    background: palette.success.main,
    color: palette.common.white,
    "&:hover": {
      background: palette.success.main,
      color: palette.common.white,
    },
    "&:active": {
      background: palette.success.main,
      color: palette.common.white,
    },
    "&:disabled": {
      background: palette.grey[200],
      color: palette.common.white,
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
  variant = "contained",
  start: StartIcon,
  end: EndIcon,
  children,
  loading,
  buttonRef,
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
      ref={buttonRef}
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
  buttonRef: PropTypes.node,
}

ButtonCo.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "medium",
  start: null,
  end: null,
  children: null,
  loading: false,
  buttonRef: null,
}
export default forwardRef((props, ref) => (
  <ButtonCo buttonRef={ref} {...props} />
))
