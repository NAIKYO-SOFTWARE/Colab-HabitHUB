import screenUrl from "../constant/screenUrl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CanlendarPage,
  ContractPage,
  FirstPage,
  HomePage,
  LoginPage,
  NewTaskPage,
  ProfilePage,
  SuggestionsPage,
} from "../view";
import LayoutContainer from "../components/common/LayoutContainer";
import TransitionPage from "../view/Transition/TransitionPage";

const routerConfig = [
  {
    url: screenUrl.FIRST,
    component: FirstPage,
    title: "first page",
    isFooter: false,
  },
  {
    url: screenUrl.LOGIN,
    component: LoginPage,
    title: "login page",
    isFooter: true,
  },
  {
    url: screenUrl.CONTRACT,
    component: ContractPage,
    title: "contract page",
    isFooter: true,
  },
  {
    url: screenUrl.HOME,
    component: HomePage,
    title: "home page",
    isFooter: true,
  },
  {
    url: screenUrl.SUGGESTIONS,
    component: SuggestionsPage,
    title: "suggestions page",
    isFooter: false,
  },
  {
    url: screenUrl.NEWTASK,
    component: NewTaskPage,
    title: "newTasks page",
    isFooter: false,
  },
  {
    url: screenUrl.CALENDAR,
    component: CanlendarPage,
    title: "canlendar page",
    isFooter: true,
  },
  {
    url: screenUrl.PROFILE,
    component: ProfilePage,
    title: "profile page",
    isFooter: true,
  },
  {
    url: screenUrl.TRANSITION,
    component: TransitionPage,
    title: "transition page",
    isFooter: false,
  },
];

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {routerConfig.map((route, index) => (
          <Route
            key={index}
            path={route.url}
            element={
              <LayoutContainer
                component={route.component}
                title={route.title}
                isFooter={route.isFooter}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
