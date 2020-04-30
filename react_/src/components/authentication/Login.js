import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      username:'',
      email:'',
      password:'',
      redirect:false
    }
    this.handleChange= this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    const obj = {
      username:this.state.username,
      email:this.state.email,
      password:this.state.password
    }
    axios.post('http://localhost:27017/login', obj)
      .then(()=>{
        this.setState({
          redirect:true
        })
      })
      .catch(err=>{
        console.log(err)
      })
  }
  render(){
    if(this.state.redirect){
        return <Redirect  to="/blog" />
    }
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <input type="email" name="email" value={this.state.email}  onChange={this.handleChange}  />
          <input type="password" name="password" value={this.state.password}  onChange={this.handleChange}  />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}
export default Login;
