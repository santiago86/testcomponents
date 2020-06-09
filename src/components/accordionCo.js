import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import palette from "../theme/palette"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  summary: () => ({
    display: "flex",
    flexDirection: "row",
    padding: "33px 0 31px 0",
    justifyContent: "space-between",
    borderColor: palette.grey[400],
    borderTop: "1px solid",
    alignItems: "end",
    "& .MuiIconButton-root": {
      padding: 0,
    },
    "& .MuiIconButton-label": {
      marginRight: 16,
    },
  }),
  title: {
    cursor: "pointer",
  },
  child: {
    padding: "16px 149px 48px 0",
    fontSize: theme.typography.pxToRem(14),
    lineHeight: "20px",
  },
  labelIcon: {
    color: palette.grey[600],
    margin: "0 10px 0 24px",
  },
  iconButton: {
    color: palette.grey[400],
    padding: 16,
    "&:hover": {
      backgroundColor: palette.transparent.main,
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },
}))

const AccordionCo = ({
  id,
  title,
  child,
  labelIcon,
  sizeIcon,
  ariaLabel,
  expandedDetail,
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setExpanded(expandedDetail)
  }, [expandedDetail])

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={classes.root}>
      <div className={classes.summary}>
        <Typography
          variant="subtitle2"
          className={classes.title}
          onClick={handleExpandClick}
        >
          {title}
        </Typography>
        <IconButton
          id={id}
          className={classes.iconButton}
          aria-expanded={expanded}
          aria-label={ariaLabel}
          onClick={handleExpandClick}
          disableRipple
        >
          {labelIcon ? (
            <Typography variant="overline" className={classes.labelIcon}>
              {labelIcon}
            </Typography>
          ) : (
            ""
          )}
          <ArrowDropDownIcon
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            fontSize={sizeIcon}
          />
        </IconButton>
      </div>
      <Collapse in={expanded} unmountOnExit>
        <div className={classes.child}>{child}</div>
      </Collapse>
    </div>
  )
}

AccordionCo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  child: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
  ariaLabel: PropTypes.string.isRequired,
  labelIcon: PropTypes.string,
  sizeIcon: PropTypes.string,
  expandedDetail: PropTypes.bool,
}

AccordionCo.defaultProps = {
  labelIcon: "",
  sizeIcon: "large",
  child: undefined,
  expandedDetail: false,
}

export default AccordionCo
