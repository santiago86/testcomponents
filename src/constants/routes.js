import App from "../App"
import Passenger from "../section/PassengerForm"
import BreakpointsCo from "../components/breakpointsCo"

export const ROUTES = {
  HOME: "/",
  PASSENGER: "/passenger",
  BREAKPOINT: "/breakpoints",
}

export const ROUTES_CONFIG = [
  {
    path: ROUTES.HOME,
    component: App,
    exact: true,
  },
  {
    path: ROUTES.BREAKPOINT,
    component: BreakpointsCo,
  },
  {
    path: ROUTES.PASSENGER,
    component: Passenger,
  },
]
