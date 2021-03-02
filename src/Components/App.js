import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import NavBar from "./NavBar.js"
import ClassCard from "./ClassCard"
import Home from "./Home"

import { routineData } from "../Routine/routineData"

const today = new Date().toString().slice(0, 3)
const holyday = (day) => day === "Fri" || day === "Thu"

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar days={Object.keys(routineData)} />
        <Switch>
          <Route path="/Sat">
            <ClassCard classes={routineData.Sat} />
          </Route>
          <Route path="/Sun">
            <ClassCard classes={routineData.Sun} />
          </Route>
          <Route path="/Mon">
            <ClassCard classes={routineData.Mon} />
          </Route>
          <Route path="/Tue">
            <ClassCard classes={routineData.Tue} />
          </Route>
          <Route path="/Wed">
            <ClassCard classes={routineData.Wed} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Redirect from="/" to={holyday(today) ? "/home" : "/" + today} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
