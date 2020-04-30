import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/css/Navbar.css';
class Navbar extends Component{
  render(){
    return(
      <div className="Navbar">
        <nav>
          <ul className="Navbar-Ul">
            <div className="container">
              <li className="Navbar-Li-logo"><i className="fas fa-hippo logo"></i></li>
              <li className="Navbar-Li"><NavLink to="/new">Create</NavLink></li>
              <li className="Navbar-Li"><NavLink to="/blog">Home</NavLink></li>
              <li className="Navbar-Li-right"><NavLink to="/logout">Logout</NavLink></li>
              <li className="Navbar-Li-right"><NavLink to="/login">Login</NavLink></li>
              <li className="Navbar-Li-right"><NavLink to="/register">Sign in</NavLink></li>
            </div>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Navbar;
