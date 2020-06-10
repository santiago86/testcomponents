import React from "react"

import { useDispatch, useSelector } from "react-redux"

import PropTypes from "prop-types"

import { FormattedMessage } from "react-intl"

import { FETCH_DATA_SAGA } from "../../../sagas/sagaActions"

function ResultPage() {
  const dispatch = useDispatch()
  const flightList = useSelector((state) => state.flight.list)

  const renderList = () => {
    return flightList.map((flight) => {
      return <p key={flight.id}>{flight.title}</p>
    })
  }

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: FETCH_DATA_SAGA })}>Button</button>
      {renderList()}
      <FormattedMessage id="flight.title" />
    </div>
  )
}

ResultPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default ResultPage
