import "./styles/animation.css";
import "./styles/base.css";
import "./styles/typography.css";
import Login from "./pages/Login";
import { Route, Switch } from "react-router-dom";
import Application from "./pages/Application";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path='/application' component={Application}/>
      </Switch>
    </div>
  );
}

export default App;
