import { Link } from "react-router-dom"

const NavBar = (props) => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item" key="home">
        <Link className="nav-link" to="/home">
          Home
        </Link>
      </li>
      {props.days.map((day) => (
        <li className="nav-item" key={day}>
          <Link className="nav-link" to={`/${day}`}>
            {day}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavBar
