import "./styles/animation.css";
import "./styles/base.css";
import "./styles/typography.css";
import Login from "./pages/Login";
import { Route, Switch } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path='/home' component={Home}/>
        <Route path="/explore" component={Explore}/>
      </Switch>
    </div>
  );
}

export default App;
