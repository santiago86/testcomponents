import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, InputLabel, FormHelperText } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
  label: {
    fontSize: '14px',
  },
  helperText: {
    marginTop: '0px',
    fontSize: '12px',
  },
}))

const InputCo = (props) => {
  const {
    id,
    placeholder,
    label,
    value,
    setValue,
    helperText,
    InputProps,
    hasErrors,
  } = props

  const classes = useStyles()
  const [inputPlaceholder, setPlaceholder] = useState(placeholder)
  const [errors, setError] = useState('')

  const handleFocus = () => {
    setPlaceholder('')
    setError('')
  }
  const handelBlur = () => {
    if (!value) {
      setPlaceholder(placeholder)
    } else {
      if (hasErrors) {
        setError(helperText)
      } else {
        setError('')
      }
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {label && (
        <InputLabel htmlFor={id} className={classes.label}>
          {label}
        </InputLabel>
      )}
      <TextField
        id={id}
        className={classes.textfield}
        placeholder={inputPlaceholder}
        InputLabelProps={{ shrink: false }}
        variant="outlined"
        value={value}
        FormHelperTextProps={{ classes: classes.helperText }}
        InputProps={InputProps}
        onFocus={handleFocus}
        onBlur={handelBlur}
        onChange={setValue}
        error={errors !== ''}
      />
      {helperText && (
        <FormHelperText className={classes.helperText} error={hasErrors}>
          {helperText}
        </FormHelperText>
      )}
    </form>
  )
}

InputCo.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  InputProps: PropTypes.any,
  hasErrors: PropTypes.boolean,
}

export default InputCo
