import React, {Component} from 'react';
import axios from 'axios';
import Logout from '.././authentication/Logout'
import {Link} from 'react-router-dom';

import Show from './Show';


class Index extends Component{
  constructor(props){
    super(props);
    this.state={blogs:[], auth:false}
    this.delete=this.delete.bind(this)
  }

  componentDidMount(){

    const token = sessionStorage.getItem('myData')
    axios.get('http://localhost:27017/blog/', {headers:{Authorization:`Bearer ${token}`}})
      .then(res => {
        this.setState(st=>({...st,blogs:[...res.data.data]}))
      })
      .catch(err => {
        console.log(err)
      })
  }
  delete(id){
    axios.delete(`http://localhost:27017/blog/${id}`)
      .then(()=>{
        this.setState(st=>({
          ...st,
          blogs:st.blogs.filter(b=>b._id!==id)
        }))
      })
      .catch((err)=>console.log(err));
  }

  render(){
    return(
      <div>
        {
          sessionStorage.getItem('myData') ?
          this.state.blogs.map(b=>(
              <Show
                obj={b}
                deleteItem={this.delete}
                value={b._id}
                key={b._id}
              />
            )) :
            <h3>You need to login first</h3>
        }
      </div>
    )
  }
}
export default Index;
