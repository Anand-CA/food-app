import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hotel from "./components/Hotel";
import NavBottom from "./components/NavBottom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="app">
      <Router>
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/hotel/:id">
              <Hotel />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        
        <NavBottom />
      </Router>
    </div>
  );
}

export default App;
