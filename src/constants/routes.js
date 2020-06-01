import App from "../App"
import Passenger from "../section/PassengerForm"

export const ROUTES = {
  HOME: "/",
  PASSENGER: "/passenger",
}

export const ROUTES_CONFIG = [
  {
    path: ROUTES.HOME,
    component: App,
    exact: true,
  },
  {
    path: ROUTES.PASSENGER,
    component: Passenger,
  },
]
