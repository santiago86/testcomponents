import React from "react"
import PropTypes from "prop-types"
import Radio from "@material-ui/core/Radio"
import { makeStyles } from "@material-ui/core/styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import clsx from "clsx"
import theme from "../theme/index"
import palette from "../theme/palette"

const useStyles = makeStyles({
  div: {
    width: 180,
    height: 40,
    "& .Mui-focusVisible": {
      borderColor: palette.primary.main,
      backgroundColor: palette.selection,
    },
    "& .MuiRadio-colorSecondary.Mui-disabled": {
      backgroundColor: theme.palette.grey[100],
    },
    "& .Mui-disabled": {
      color: theme.palette.grey[700],
    },
  },
  label: {
    display: "flex",
    alignItems: "normal",
    "& .MuiTypography-body1": {
      paddingLeft: theme.spacing(1),
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      width: (label) => label,
    },
  },
  root: {
    "&:hover": {
      borderColor: palette.primary.main,
    },
    "&:active": {
      backgroundColor: theme.palette.grey[900],
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    },
    width: 24,
    height: 24,
    border: "1px solid",
    borderColor: palette.grey[500],
  },
  icon: {
    borderRadius: "50%",
  },
  checkedIcon: {
    backgroundColor: palette.primary.main,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    "&:before": {
      display: "block",
      width: 24,
      height: 24,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:disabled ~ &": {
      backgroundColor: theme.palette.grey[100],
    },
  },
})

const widthLabelNormal = 100
const widthLabelMultiLinea = 180

function RadioButtonCo({ id, label, value, ...props }) {
  const width = label.length <= 20 ? widthLabelNormal : widthLabelMultiLinea
  const classes = useStyles(width)

  return (
    <div className={classes.div}>
      <FormControlLabel
        className={classes.label}
        value={value}
        control={
          <Radio
            disableRipple
            className={classes.root}
            checkedIcon={
              <span className={clsx(classes.icon, classes.checkedIcon)} />
            }
            icon={<span className={classes.icon} />}
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
  value: PropTypes.string,
  disabled: PropTypes.bool,
}

RadioButtonCo.defaultProps = {
  label: "",
  value: "",
  disabled: false,
}

export default RadioButtonCo
