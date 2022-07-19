import TimeTracker from './Containers/TimeTracker'
import WelcomeScreen from 'Containers/WelcomeScreen'
import LoginScreen from 'Containers/LoginScreen'
import RegisterScreen from 'Containers/RegisterScreen'
import ForgotScreen from 'Containers/ForgotScreen'
import DashBoardScreen from 'Containers/DashBoardScreen'

import Images from 'utils/Images'


const routes = [
  {
    path: '/welcome',
    name: 'Welcome',
    // mini: 'L',
    icon: 'nc-icon nc-bank',
    component: WelcomeScreen,
    layout: '/auth'
  },
  {
    path: '/login',
    name: 'Login',
    // mini: 'L',
    icon: 'nc-icon nc-bank',
    component: LoginScreen,
    layout: '/auth'
  },
  {
    path: '/register',
    name: 'Register',
    // mini: 'R',
    icon: 'nc-icon nc-bank',
    component: RegisterScreen,
    layout: '/auth'
  },
  {
    path: '/forgot',
    name: 'ForgotScreen',
    // mini: 'LS',
    icon: 'nc-icon nc-bank',
    component: ForgotScreen,
    layout: '/auth'

  },
  {
    path: '/time_tracker',
    name: 'Time Tracker',
    icon: 'bi bi-hourglass-top',
    image: Images.Vector_1,
    component: TimeTracker,
    layout: '/admin',
    isShow: true
  },

  {
    // path: '/registration',
    name: 'Log History',
    icon: 'nc-icon nc-bank',
    image: Images.Vector_2,
    component: DashBoardScreen,
    layout: '/admin',
    isShow: true
  },

  {
    // path: '/registration',
    name: 'Engagements',
    icon: 'nc-icon nc-bank',
    image: Images.Vector_3,
    component: DashBoardScreen,
    layout: '/admin',
    isShow: true
  },

  {
    // path: '/registration',
    name: 'Billing Informations',
    icon: 'nc-icon nc-bank',
    image: Images.Vector_4,
    component: DashBoardScreen,
    layout: '/admin',
    isShow: true
  },

  {
    // path: '/registration',
    name: 'Educational Center',
    icon: 'nc-icon nc-bank',
    image: Images.Vector_5,
    component: DashBoardScreen,
    layout: '/admin',
    isShow: true
  },

  {
    // path: '/registration',
    name: 'Refer',
    icon: 'nc-icon nc-bank',
    image: Images.Vector_6,
    component: DashBoardScreen,
    layout: '/admin',
    isShow: true
  },

  {
    // path: '/registration',
    name: 'Resource Area',
    icon: 'nc-icon nc-bank',
    image: Images.Vector_7,
    component: DashBoardScreen,
    layout: '/admin',
    isShow: true
  },
  // {
  //   collapse: true,
  //   name: 'Pages',
  //   icon: 'nc-icon nc-book-bookmark',
  //   state: 'pagesCollapse',
  //   views: [
  //     {
  //       path: '/timeline',
  //       name: 'Timeline',
  //       mini: 'T',
  //       component: Timeline,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/welcome',
  //       name: 'Welcome',
  //       mini: 'L',
  //       component: WelcomeScreen,
  //       layout: '/auth'
  //     },
  //     {
  //       path: '/login',
  //       name: 'Login',
  //       mini: 'L',
  //       component: LoginScreen,
  //       layout: '/auth'
  //     },
  //     // {
  //     //   path: '/login',
  //     //   name: 'Login',
  //     //   mini: 'L',
  //     //   component: Login,
  //     //   layout: '/auth'
  //     // },

  //     {
  //       path: '/register',
  //       name: 'Register',
  //       mini: 'R',
  //       component: RegisterScreen,
  //       layout: '/auth'
  //     },
  //     // {
  //     //   path: '/register',
  //     //   name: 'Register',
  //     //   mini: 'R',
  //     //   component: Register,
  //     //   layout: '/auth'
  //     // },
  //     {
  //       path: '/lock-screen',
  //       name: 'LockScreen',
  //       mini: 'LS',
  //       component: LockScreen,
  //       layout: '/auth'
  //     },
  //     {
  //       path: '/forgot',
  //       name: 'ForgotScreen',
  //       mini: 'LS',
  //       component: ForgotScreen,
  //       layout: '/auth'
  //     },

  //     {
  //       path: '/user-profile',
  //       name: 'UserProfile',
  //       mini: 'UP',
  //       component: UserProfile,
  //       layout: '/admin'
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: 'Components',
  //   icon: 'nc-icon nc-layout-11',
  //   state: 'componentsCollapse',
  //   views: [
  //     {
  //       path: '/buttons',
  //       name: 'Buttons',
  //       mini: 'B',
  //       component: Buttons,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/grid-system',
  //       name: 'Grid System',
  //       mini: 'GS',
  //       component: GridSystem,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/panels',
  //       name: 'Panels',
  //       mini: 'P',
  //       component: Panels,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/sweet-alert',
  //       name: 'Sweet Alert',
  //       mini: 'SA',
  //       component: SweetAlert,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/notifications',
  //       name: 'Notifications',
  //       mini: 'N',
  //       component: Notifications,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/icons',
  //       name: 'Icons',
  //       mini: 'I',
  //       component: Icons,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/typography',
  //       name: 'Typography',
  //       mini: 'T',
  //       component: Typography,
  //       layout: '/admin'
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: 'Forms',
  //   icon: 'nc-icon nc-ruler-pencil',
  //   state: 'formsCollapse',
  //   views: [
  //     {
  //       path: '/regular-forms',
  //       name: 'Regular Forms',
  //       mini: 'RF',
  //       component: RegularForms,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/extended-forms',
  //       name: 'Extended Forms',
  //       mini: 'EF',
  //       component: ExtendedForms,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/validation-forms',
  //       name: 'Validation Forms',
  //       mini: 'VF',
  //       component: ValidationForms,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/wizard',
  //       name: 'Wizard',
  //       mini: 'W',
  //       component: Wizard,
  //       layout: '/admin'
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: 'Tables',
  //   icon: 'nc-icon nc-single-copy-04',
  //   state: 'tablesCollapse',
  //   views: [
  //     {
  //       path: '/regular-tables',
  //       name: 'Regular Tables',
  //       mini: 'RT',
  //       component: RegularTables,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/extended-tables',
  //       name: 'Extended Tables',
  //       mini: 'ET',
  //       component: ExtendedTables,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/react-tables',
  //       name: 'React Tables',
  //       mini: 'RT',
  //       component: ReactTables,
  //       layout: '/admin'
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: 'Maps',
  //   icon: 'nc-icon nc-pin-3',
  //   state: 'mapsCollapse',
  //   views: [
  //     {
  //       path: '/google-maps',
  //       name: 'Google Maps',
  //       mini: 'GM',
  //       component: GoogleMaps,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/full-screen-map',
  //       name: 'Full Screen Map',
  //       mini: 'FSM',
  //       component: FullScreenMap,
  //       layout: '/admin'
  //     },
  //     {
  //       path: '/vector-map',
  //       name: 'Vector Map',
  //       mini: 'VM',
  //       component: VectorMap,
  //       layout: '/admin'
  //     }
  //   ]
  // },
  // {
  //   path: '/widgets',
  //   name: 'Widgets',
  //   icon: 'nc-icon nc-box',
  //   component: Widgets,
  //   layout: '/admin'
  // },
  // {
  //   path: '/charts',
  //   name: 'Charts',
  //   icon: 'nc-icon nc-chart-bar-32',
  //   component: Charts,
  //   layout: '/admin'
  // },
  // {
  //   path: '/calendar',
  //   name: 'Calendar',
  //   icon: 'nc-icon nc-calendar-60',
  //   component: Calendar,
  //   layout: '/admin'
  // }
]

export default routes
