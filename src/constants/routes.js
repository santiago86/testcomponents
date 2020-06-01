import App from "../App"
import Passenger from "../section/PassengerForm"
import BreakpointsCo from "../components/breakpointsCo"
import ColorsPalette from "../section/ColorPaletteSection"
import TypographySection from "../section/TypographySection"

export const ROUTES = {
  HOME: "/",
  PASSENGER: "/passenger",
  BREAKPOINT: "/breakpoints",
  TYPOGRAPHY: "/typography",
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
  {
    path: ROUTES.COLORS_PALETTE,
    component: ColorsPalette,
  },
  {
    path: ROUTES.TYPOGRAPHY,
    component: TypographySection,
  },
]
