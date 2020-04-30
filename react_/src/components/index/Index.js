import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Show from './Show';


class Index extends Component{
  constructor(props){
    super(props);
    this.state={blogs:[]}
    this.delete=this.delete.bind(this)
  }
  componentDidMount(){
    axios.get('http://localhost:27017/blog/')
      .then(res => {
        console.log(res.data.data)
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
      {this.state.blogs.map(b=>(
          <Show
            obj={b}
            deleteItem={this.delete}
            value={b._id}
            key={b._id}
          />

        ))
      }
      </div>
    )
  }
}
export default Index;
