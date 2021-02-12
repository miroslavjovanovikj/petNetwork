import React, {Component}from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Logout extends Component{
  constructor(props){
    super(props)
    this.logout= this.logout.bind(this);
  }
  logout(){
    axios.get('/http://localhost:27017/logout')
     .then(()=>{
        sessionStorage.removeItem('myData')
     })
     .catch(err=>err)
  }
  logout(){
      sessionStorage.removeItem('myData')
  }
  render(){
    return(
      <div>
        <button onClick={this.logout}>logout</button>
      </div>
    )
  }
}
export default Logout;
