import React, {Component}from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Logout extends Component{
  constructor(props){
    super(props)
    this.state={
      redirect:false
    }
    this.onSubmit= this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault()
    axios.get('/http://localhost:27017/logout')
     .then(()=>{
       this.setState({
         redirect:true
       })
     })
  }
  render(){
    return <Redirect  to="/" />
    return(
      <div>
      <form onSubmit={this.onSubmit}>
          <input type="submit" value="logout" />
        <h1>dfsafas</h1>
      </form>
      </div>
    )
  }
}
export default Logout;
