import React,{Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import '../../styles/css/Create.css';
class Create extends Component{
  constructor(props){
    super(props);
    this.state={
      title:'',
      img:'',
      text:'',
      redirect:false
    }
    this.handleChange= this.handleChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this)
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
    e.preventDefault();
    const obj ={
      title:this.state.title,
      img:this.state.img,
      text:this.state.text
    }
    axios.post('http://localhost:27017/blog', obj)
      .then(res=>{
        this.setState(st=>({
          ...st,
          title:this.state.title,
          img:this.state.img,
          text:this.state.text,
          redirect:true
        }))
      })

  }
  render(){
    if(this.state.redirect){
      return <Redirect  to="/blog" />
    }
    return(
      <div className="Create-container">
            <h3 className="Create-h3">Create</h3>
          <form onSubmit={this.onSubmit}>
            <fieldset>
              <input type="text" className="Create-input" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title"/>
            </fieldset>
            <fieldset>
                <input type="text" className="Create-input" name="img" value={this.state.img} onChange={this.handleChange} placeholder="Image URL" />
            </fieldset>
            <fieldset>
                <textarea
                    name="text" className="Create-input"  placeholder="Text"
                    value={this.state.text}
                    onChange={this.handleChange} cols="50" rows="7"
                >
                  {this.state.text}
                </textarea>
            </fieldset>
              <input  className="Create-button Create-input"type="submit" value="create" />
          </form>
      </div>
    )
  }
}
export default Create;
