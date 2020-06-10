import React from "react"
import { toast, ToastContainer } from "react-toastify"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import styled from "styled-components"

import Button from "@material-ui/core/Button"
import Fade from "@material-ui/core/Fade"
import PropTypes from "prop-types"
import InfoIcon from "@material-ui/icons/Info"

import palette from "../theme/palette"
import "react-toastify/dist/ReactToastify.css"

const Toast = styled(ToastContainer).attrs((props) => ({
  marginIcon: props.title ? "-5px" : "-5px",
  marginBody: props.title ? "-4px" : "-10px",
  height: props.searchHeigth,
  marginTop: props.title ? "-4px" : "-5px",
  heightSpan: props.title ? "0.75rem" : "0.875rem",
  lineHeight: props.title ? "16px" : "18px",
  widthClose: props.closebutton ? "348px" : "412px",
}))`
  .Toastify__toast-container--top-right {
    .toast-container {
      right: 168px;
    }
  }
  .Toastify__toast {
    width: 484px;
    min-height: ${(props) => props.height};
    background-color: ${palette.primary.main};
    border-radius: 5px;
  }
  .Toastify__toast--error {
    background-color: ${palette.error.main};
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--info {
    background-color: ${palette.primary.main};
    height: ${(props) => props.height};
  }
  .Toastify__toast--success {
    background-color: ${palette.success.main};
    height: ${(props) => props.height};
  }
  .Toastify__toast-body {
    height: ${(props) => props.height};
    margin: ${(props) => props.marginBody};
  }
  .Toastify__close-button {
    display: none;
  }
  .MuiAlert-message {
    margin-top: ${(props) => props.marginTop};
    width: ${(props) => props.widthClose};
  }
  .MuiIconButton-label {
    background-color: ${palette.transparent.shadow};
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-bottom: ${(props) => (props.title ? "26px" : "")};
  }
  .MuiSvgIcon-root {
    width: 26px;
    height: 26px;
  }
  .MuiAlert-icon {
    margin-top: ${(props) => props.marginIcon};
    height: 20px;
    width: 20px;
  }
  span {
    font-size: ${(props) => props.heightSpan};
    letter-spacing: 0;
    line-height: ${(props) => props.lineHeight};
  }
`

const ToastCo = ({ id, type, msg, ...props }) => {
  const { timeclose, position, icon, closebutton, title } = props
  const searchHeigth = () => {
    let height = "48px"
    if (msg.length > 43) {
      height = "56px"
    } else {
      height = title ? "68px" : "48px"
    }
    return height
  }
  const dismiss = () => {
    toast.dismiss(id)
  }

  const options = {
    role: "alert",
    type,
    position,
    autoClose: timeclose * 1000,
    transition: Fade,
  }
  const Msg = () => (
    <Alert
      id={id}
      variant="filled"
      severity={type}
      icon={icon}
      onClose={closebutton ? () => dismiss(id) : ""}
    >
      <AlertTitle>{title}</AlertTitle>
      <span>{msg}</span>
    </Alert>
  )
  const notify = () => {
    toast(<Msg />, options)
  }
  return (
    <div>
      <Button onClick={notify}>Toast</Button>
      <Toast
        className="toast-container"
        limit={3}
        hideProgressBar
        searchHeigth={searchHeigth()}
        {...props}
      />
    </div>
  )
}

ToastCo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  msg: PropTypes.string,
  type: PropTypes.oneOf(["success", "info", "error"]).isRequired,
  icon: PropTypes.node,
  closebutton: PropTypes.bool,
  timeclose: PropTypes.number,
  position: PropTypes.oneOf([
    "top-right",
    "top-center",
    "top-left",
    "bottom-right",
    "bottom-center",
    "bottom-left",
  ]),
}

ToastCo.defaultProps = {
  title: "",
  msg:
    "the information you provided does not match our records. Please try again",
  icon: <InfoIcon />,
  closebutton: false,
  timeclose: 50,
  position: "top-center",
}

export default ToastCo
