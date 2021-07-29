import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./components/NavBar";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import Courses from "./pages/Courses";
import Fees from "./pages/Fees";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/fees" component={Fees} />
        <Route exact path="/faq" component={FAQ} />
      </Switch>
    </div>
  );
}

export default App;
