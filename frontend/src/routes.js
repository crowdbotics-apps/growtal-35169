import TimeTracker from "./Containers/TimeTracker"
import WelcomeScreen from "Containers/WelcomeScreen"
import LoginScreen from "Containers/LoginScreen"
import RegisterScreen from "Containers/RegisterScreen"
import ForgotScreen from "Containers/ForgotScreen"
import DashBoardScreen from "Containers/DashBoardScreen"
import BusinessDesign from "Containers/BusinessDesign"

import ConfirmPassword from "Containers/ForgotScreen/ConfirmPassword"

import Images from "utils/Images"

const routes = [
  {
    path: "/welcome",
    name: "Welcome",
    // mini: 'L',
    icon: "nc-icon nc-bank",
    component: WelcomeScreen,
    layout: "/auth"
  },
  {
    path: "/login",
    name: "Login",
    // mini: 'L',
    icon: "nc-icon nc-bank",
    component: LoginScreen,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    // mini: 'R',
    icon: "nc-icon nc-bank",
    component: RegisterScreen,
    layout: "/auth"
  },
  {
    path: "/forgot",
    name: "ForgotScreen",
    // mini: 'LS',
    icon: "nc-icon nc-bank",
    component: ForgotScreen,
    layout: "/auth"
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    // mini: 'LS',
    icon: "nc-icon nc-bank",
    component: ConfirmPassword,
    layout: "/auth"
  },

  {
    path: "/business-design",
    name: "Active Engagement History",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: BusinessDesign,
    layout: "/business",
    isShow: true
  },

  {
    path: "/time_tracker",
    name: "Time Tracker",
    icon: "bi bi-hourglass-top",
    image: Images.Vector_1,
    component: TimeTracker,
    layout: "/admin",
    isShow: true
  },

  {
    // path: '/registration',
    name: "Log History",
    icon: "nc-icon nc-bank",
    image: Images.Vector_2,
    component: DashBoardScreen,
    layout: "/admin",
    isShow: true
  },

  {
    // path: '/registration',
    name: "Billing Informations",
    icon: "nc-icon nc-bank",
    image: Images.Vector_4,
    component: DashBoardScreen,
    layout: "/admin",
    isShow: true
  },

  {
    // path: '/registration',
    name: "Educational Center",
    icon: "nc-icon nc-bank",
    image: Images.Vector_5,
    component: DashBoardScreen,
    layout: "/admin",
    isShow: true
  },

  {
    // path: '/registration',
    name: "Refer",
    icon: "nc-icon nc-bank",
    image: Images.Vector_6,
    component: DashBoardScreen,
    layout: "/admin",
    isShow: true
  },

  {
    // path: '/registration',
    name: "Resource Area",
    icon: "nc-icon nc-bank",
    image: Images.Vector_7,
    component: DashBoardScreen,
    layout: "/admin",
    isShow: true
  }
]

export default routes
