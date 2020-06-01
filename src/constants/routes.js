import App from "../App"
import Passenger from "../section/PassengerForm"
import ColorsPalette from "../section/ColorPaletteSection"

export const ROUTES = {
  HOME: "/",
  PASSENGER: "/passenger",
  COLORS_PALETTE: "/palette",
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
  {
    path: ROUTES.COLORS_PALETTE,
    component: ColorsPalette,
  },
]
