import "./styles/animation.css";
import "./styles/base.css";
import "./styles/typography.css";
import Login from "./pages/Login";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Route path="/" component={Login} exact />
    </div>
  );
}

export default App;
