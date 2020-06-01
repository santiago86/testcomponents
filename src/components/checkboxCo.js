import React from "react"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import clsx from "clsx"
import CheckIcon from "@material-ui/icons/Check"

import palette from "../theme/palette"

const widthSize = 24
const widthLabelNormal = 100
const widthLabelMultiLinea = 140

const useStyles = makeStyles({
  root: {
    "&:hover": {
      borderColor: palette.primary.main,
      backgroundColor: palette.white,
      "&.Mui-checked": {
        borderColor: palette.primary.main,
        backgroundColor: palette.transparent.text,
      },
    },
  },
  icon: {
    width: widthSize,
    height: widthSize,
    boxSizing: "border-box",
    border: 1,
    borderStyle: "solid",
    borderColor: palette.grey[500],
    borderRadius: 4,
    "input:focus ~ &": {
      borderColor: palette.primary.main,
      backgroundColor: palette.selection,
    },
    "input:active ~ &": {
      backgroundColor: palette.secondary.dark,
    },
    "input:hover ~ & ": {
      borderColor: palette.primary.main,
    },
    "input:disabled ~ &": {
      borderColor: palette.grey[300],
      backgroundColor: palette.grey[100],
    },
    "input:checked ~ & input:enabled ": {
      backgroundColor: palette.primary.main,
      ":hover": {
        backgroundColor: palette.transparent.text,
      },
    },
  },
  checkedIcon: {
    color: palette.white,
    backgroundColor: palette.primary.main,
    "& .MuiSvgIcon-root": {
      display: "block",
    },
  },
  label: {
    "& .MuiTypography-body1": {
      color: palette.grey[600],
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      width: (label) => label,
    },
  },
})

// Inspired by blueprintjs
const CheckboxCo = ({ id, label, ...props }) => {
  const width = label.length <= 20 ? widthLabelNormal : widthLabelMultiLinea
  const classes = useStyles(width)

  return (
    <FormControlLabel
      className={[classes.label]}
      disableRipple
      control={
        <Checkbox
          id={id}
          className={classes.root}
          disableRipple
          icon={<span className={clsx(classes.icon)} />}
          checkedIcon={
            <span className={clsx(classes.icon, classes.checkedIcon)}>
              <CheckIcon />
            </span>
          }
          inputProps={{
            "aria-label": "decorative checkbox",
          }}
          {...props}
        />
      }
      label={label}
    />
  )
}

CheckboxCo.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
}

CheckboxCo.defaultProps = {
  label: "",
}

export default CheckboxCo
