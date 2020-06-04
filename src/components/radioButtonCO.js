import React from "react"
import PropTypes from "prop-types"
import Radio from "@material-ui/core/Radio"
import { makeStyles } from "@material-ui/core/styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import clsx from "clsx"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 180,
    height: 32,
  },
  label: {
    display: "flex",
    alignItems: "normal",
    "& .MuiTypography-body1": {
      color: theme.palette.grey[700],
      paddingLeft: theme.spacing(1),
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      width: (label) => label,
    },
  },
  radio: {
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
    "&:active": {
      backgroundColor: theme.palette.grey[900],
      backgroundImage: "radial-gradient(#fff,#fff 20%,transparent 24%)",
    },
    width: 24,
    height: 24,
    border: "1px solid",
    borderColor: theme.palette.grey[500],
  },
  icon: {
    borderRadius: "50%",
    "input:disabled ~ &": {
      backgroundColor: theme.palette.grey[100],
      "&:before": {
        display: "block",
        width: 24,
        height: 24,
        content: '""',
        borderColor: theme.palette.grey[500],
        border: "1px solid",
        borderRadius: "50%",
      },
    },
    "$radio.Mui-focusVisible &": {
      border: "1px solid",
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.white,
    },
  },
  checkedIcon: {
    backgroundColor: theme.palette.primary.main,
    "&:before": {
      display: "block",
      width: 24,
      height: 24,
      backgroundImage: "radial-gradient(#fff,#fff 20%,transparent 24%)",
      content: '""',
    },
    "input:disabled ~ &": {
      backgroundColor: theme.palette.grey[100],
      "&:before": {
        display: "block",
        width: 24,
        height: 24,
        backgroundImage: "radial-gradient(#CCCCCB,#CCCCCB 20%,transparent 24%)",
        content: '""',
        borderColor: theme.palette.grey[500],
        border: "1px solid",
        borderRadius: "50%",
      },
    },
  },
}))

const widthLabel = 100
const widthLabelMultiLine = 180

function RadioButtonCo({ id, label, onChange, value, ...props }) {
  const width = label.length <= 20 ? widthLabel : widthLabelMultiLine
  const classes = useStyles(width)

  return (
    <div className={classes.root}>
      <FormControlLabel
        className={classes.label}
        value={value}
        control={
          <Radio
            disableRipple
            className={classes.radio}
            checkedIcon={
              <span className={clsx(classes.icon, classes.checkedIcon)} />
            }
            icon={<span className={classes.icon} />}
            onChange={onChange}
            {...props}
          />
        }
        label={label}
      />
    </div>
  )
}

RadioButtonCo.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
}

RadioButtonCo.defaultProps = {
  label: "",
  value: "",
  disabled: false,
}

export default RadioButtonCo
