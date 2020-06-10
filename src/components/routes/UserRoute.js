import React from "react"
import PropTypes from "prop-types"
import { Route } from "react-router-dom"

const UserRouter = ({ layout: Layout, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
)

UserRouter.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.node.isRequired,
}

export default UserRouter
