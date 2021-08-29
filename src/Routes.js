import { Switch, Route } from "react-router-dom";
import AboutMe from "./containers/AboutMe";
import Projects from "./containers/Projects";
import Resume from "./containers/Resume";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/" exact component={AboutMe} />
    </Switch>
  );
};

export default Routes;
