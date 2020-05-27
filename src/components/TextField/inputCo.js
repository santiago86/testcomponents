import React, { useState } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import InputLabel from "@material-ui/core/InputLabel"
import FormHelperText from "@material-ui/core/FormHelperText"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "90%",
    },
    "& .Mui-disabled": {
      backgroundColor: "#EFEFEE",
      color: "#333333",
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "1rem",
    },
  },
  label: {
    fontSize: "0.875rem",
  },
  helperText: {
    fontSize: "0.75rem",
    marginTop: "0px",
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
  },
}))

const InputCo = ({
  id,
  placeholder,
  label,
  value,
  setValue,
  helperText,
  hasErrors,
  component,
  ...props
}) => {
  const classes = useStyles()
  const [inputPlaceholder, setPlaceholder] = useState(placeholder)
  const [errors, setError] = useState("")

  const handleFocus = () => {
    setPlaceholder("")
    setError("")
  }
  const handelBlur = () => {
    if (!value) {
      setPlaceholder(placeholder)
    }
    if (hasErrors) {
      setError(helperText)
    } else {
      setError("")
    }
  }

  return (
    <div className={classes.root} noValidate autoComplete="off">
      {label && (
        <InputLabel htmlFor={id} className={classes.label}>
          {label}
        </InputLabel>
      )}
      <TextField
        {...props}
        placeholder={inputPlaceholder}
        label={null}
        helperText={null}
        className={classes.textfield}
        InputLabelProps={{ shrink: false }}
        variant="outlined"
        FormHelperTextProps={{ classes: classes.helperText }}
        onFocus={handleFocus}
        onBlur={handelBlur}
        onChange={setValue}
        error={errors !== ""}
      />
      {helperText && (
        <FormHelperText className={classes.helperText} error={errors !== ""}>
          <span>{errors && component}</span>
          <span>{(!hasErrors && helperText) || errors}</span>
        </FormHelperText>
      )}
    </div>
  )
}

InputCo.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  hasErrors: PropTypes.bool,
  component: PropTypes.element,
}

InputCo.defaultProps = {
  label: "",
  value: "",
  helperText: "",
  hasErrors: false,
  component: null,
}

export default InputCo
