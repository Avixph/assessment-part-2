import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Home from "./screens/Home";
import Dogs from "./screens/Dogs";
import Cats from "./screens/Cats";

function App() {
  return (
    <div className="App">
      <main className="app-main">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/cats" component={Cats} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
