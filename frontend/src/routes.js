import TimeTracker from "./Containers/TimeTracker"
import WelcomeScreen from "Containers/WelcomeScreen"
import LoginScreen from "Containers/LoginScreen"
import RegisterScreen from "Containers/RegisterScreen"
import ForgotScreen from "Containers/ForgotScreen"
import DashBoardScreen from "Containers/DashBoardScreen"
import ConfirmPassword from "Containers/ForgotScreen/ConfirmPassword"
import LogHour from "Containers/DashBoardScreen/Screens/LogHour"
import Engagement from "Containers/DashBoardScreen/Screens/Engagement"
import EngagementHistory from "Containers/BusinessDesign/EngagementHistory"
import ManageHistory from "Containers/BusinessDesign/ManageHistory"
import Benefits from "Containers/BusinessDesign/Benefits"
import Refer from "Containers/BusinessDesign/Refer"
import ExpertHire from "Containers/BusinessDesign/ExpertHired"
import HistoricalView from "Containers/BusinessDesign/HistoricalView"
import SignedContracts from "Containers/BusinessDesign/SignedContracts"
import RequestAdditionalExpert from "Containers/BusinessDesign/RequestAdditionalExpert"
// import ConfirmPassword from "Containers/ForgotScreen/ConfirmPassword"

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
    path: "/engagement_history",
    name: "Active Engagement History",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: EngagementHistory,
    layout: "/business",
    isShow: true
  },

  {
    path: "/manage_history",
    name: "Manage History",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: ManageHistory,
    layout: "/business",
    isShow: true
  },
  {
    path: "/benefits",
    name: "Benefits",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: Benefits,
    layout: "/business",
    isShow: true
  },
  {
    path: "/refer",
    name: "Refer",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: Refer,
    layout: "/business",
    isShow: true
  },

  {
    path: "/expert_hire",
    name: "Expert Hire",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: ExpertHire,
    layout: "/business",
    isShow: true
  },
  {
    path: "/historical_view",
    name: "Historical View",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: HistoricalView,
    layout: "/business",
    isShow: true
  },
  {
    path: "/signed_contracts",
    name: "Signed Contracts",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: SignedContracts,
    layout: "/business",
    isShow: true
  },

  {
    path: "/request_additional_expert",
    name: "Request Additional Expert",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: RequestAdditionalExpert,
    layout: "/business",
    isShow: true
  },

  {
    path: "/time_tracker",
    name: "Time Tracker",
    icon: "bi bi-hourglass-top",
    image: Images.Vector_1,
    component: TimeTracker,
    layout: "/admin"
  },
  {
    path: "/LogHour",
    name: "Log History",
    icon: "nc-icon nc-bank",
    image: Images.Vector_2,
    component: LogHour,
    layout: "/admin",
    isShow: true
  },

  {
    path: "/Engagement",
    name: "Engagements",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: Engagement,
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
