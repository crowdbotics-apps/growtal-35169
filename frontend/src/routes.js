import TimeTracker from "./Containers/TimeTracker"
import WelcomeScreen from "Containers/WelcomeScreen"
import LoginScreen from "Containers/LoginScreen"
import RegisterScreen from "Containers/RegisterScreen"
import ForgotScreen from "Containers/ForgotScreen"
import DashBoardScreen from "Containers/DashBoardScreen"
import ConfirmPassword from "Containers/ForgotScreen/ConfirmPassword"
import LogHour from "Containers/DashBoardScreen/Screens/LogHour"
import Listofallusers from "Containers/DashBoardScreen/Screens/Listofallusers"


import Feedback from "Containers/DashBoardScreen/Screens/Feedback"

import Engagement from "Containers/DashBoardScreen/Screens/Engagement"
import EngagementHistory from "Containers/BusinessDesign/EngagementHistory"
import ManageHistory from "Containers/BusinessDesign/ManageHistory"

// import ConfirmPassword from "Containers/ForgotScreen/ConfirmPassword"
// import Listofallusers from "Containers/ExpertDesign/Listofallusers"
// import ApproveAccounts from "Containers/ExpertDesign/ApproveAccounts"
// import TimeTracker from "Containers/ExpertDesign/TimeTracker"


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
    // isShow: true
  },
  {
    path: "/manage_history",
    name: "Manage History",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: ManageHistory,
    layout: "/business",
    // isShow: true
  },
                              // Expets routes
  {
    path: "/Time Tracker",
    name: "Time Tracker",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: TimeTracker,
    layout: "/Expert",
    // isShow: true
  },
  {
    path: "/LogHistory",
    name: "LogHistory",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: LogHour,
    layout: "/Expert",
    // isShow: true
  },
  {
    path: "/Engagements",
    name: "Engagements",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: EngagementHistory,
    layout: "/Expert",
    // isShow: true
  },
  {
    path: "/Billing Informations",
    name: "Billing Informations",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: EngagementHistory,
    layout: "/Expert",
    // isShow: true
  },
  {
    path: "/Educational Center",
    name: "Educational Center",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: EngagementHistory,
    layout: "/Expert",
    // isShow: true
  },
  {
    path: "/Refer",
    name: "Refer",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: EngagementHistory,
    layout: "/Expert",
    // isShow: true
  },
  {
    path: "/Resource Area",
    name: "Resource Area",
    icon: "nc-icon nc-bank",
    image: Images.Vector_3,
    component: EngagementHistory,
    layout: "/Expert",
    // isShow: true
  },
  // {
  //   path: "/approve_accounts",
  //   name: "Approve Accounts",
  //   icon: "nc-icon nc-bank",
  //   image: Images.Vector_3,
  //   component: ApproveAccounts,
  //   layout: "/Expert",
  //   isShow: true
  // },
  // {
  //   path: "/Feedback",
  //   name: "Feedback",
  //   icon: "nc-icon nc-bank",
  //   image: Images.Vector_3,
  //   component: Feedback,
  //   layout: "/Expert",
  //   isShow: true
  // },
  // {
  //   path: "/engagement_history",
  //   name: "Feedback",
  //   icon: "nc-icon nc-bank",
  //   image: Images.Vector_3,
  //   component: EngagementHistory,
  //   layout: "/Expert",
  //   isShow: true
  // },
 
  {
    path: "/time_tracker",
    name: "Time Tracker",
    icon: "bi bi-hourglass-top",
    image: Images.Vector_1,
    component:TimeTracker,
    layout: "/admin",
    isShow: true
  },
  {
    path: "/List_of_allusers",
    name: "List of allusers",
    icon: "bi bi-hourglass-top",
    image: Images.Vector_1,
    component:Listofallusers,
    layout: "/admin",
    isShow: true
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
      path: "/Feedback",
      name: "Feedback",
      icon: "nc-icon nc-bank",
      image: Images.Vector_3,
      component: Feedback,
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
