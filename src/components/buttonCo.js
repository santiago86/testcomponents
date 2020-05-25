import React, { useMemo } from "react"
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

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  startIcon: {
    marginRight: 4,
  },
  endIcon: {
    marginLeft: 4,
  },
  buttonSmall: {
    margin: theme.spacing(1),
    paddingRight: theme.spacing(1.3),
    paddingLeft: theme.spacing(1.3),
    fontSize: 12,
  },
  loadingLarge: {
    width: 20,
    height: 20,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 32,
    paddingLeft: 32,
  },
  loadingMedium: {
    width: 20,
    height: 20,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 32,
    paddingLeft: 32,
  },
  loadingSmall: {
    width: 14,
    height: 14,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: theme.spacing(4.2),
    paddingLeft: theme.spacing(4.2),
  },
}))

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
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={clsx(styles.button, className)}
      color={defaultColor}
      variant={defaultVariant}
      startIcon={!loading && StartIcon ? <StartIcon /> : null}
      endIcon={!loading && EndIcon ? <EndIcon /> : null}
    >
      {loading ? (
        <CircularProgress
          variant="indeterminate"
          color="white"
          size="25"
          className={styles[loadingSize]}
        />
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
  variant: "contained",
  size: "medium",
  start: null,
  end: null,
  children: null,
  loading: false,
}
export default ButtonCo
