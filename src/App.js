import React, { useEffect } from "react";
import './index.css'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import{ getUserAuth} from './actions/index';




function App() {

  const auth = useSelector(state => state.userState)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getUserAuth())
  },[])

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Login/>
        </Route>
        <Route exact path = '/home'>
          <Home/>
        </Route>
      </Switch>
    </Router>

    </div>
  );
}


export default App;
