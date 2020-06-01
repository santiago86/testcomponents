import App from "../App"
import Passenger from "../section/PassengerForm"
import ColorsPalette from "../section/ColorPaletteSection"
import TypographySection from "../section/TypographySection"

export const ROUTES = {
  HOME: "/",
  PASSENGER: "/passenger",
  TYPOGRAPHY: "/typography",
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
  {
    path: ROUTES.TYPOGRAPHY,
    component: TypographySection,
  },
]
