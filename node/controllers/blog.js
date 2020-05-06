const mongoose = require('mongoose');
const Blog = require('../models/blog');
const jwt = require('jsonwebtoken');

const rootRoute = (req,res) => {
  res.redirect('/blog')
}
const getBlogs = (req,res, next) => {
  jwt.verify(req.token,"Nie cistime oni davet", (err, authData)=>{
    if(err){
      res.sendStatus(403)
    }else{
      Blog.find({})
      .then(data=>{
            res.header('Access-Control-Allow-Credentials', true)
          res.send({data:data, user:authData} )
          console.log(req.user)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  })
}

const getNewBlogs = (req,res) => {
  res.send('form Create blogs')
}
const postBlog = (req,res)=>{
  const {title, img, text} = req.body;
  Blog.create({title, img, text})
    .then((data)=>{
      res.redirect('/')
      // res.status(200).json({"added":"is added"})
    })
    .catch(err=>{
      console.log(err)
    })
}
const getShowBlog = (req,res) => {
  Blog.findById(req.params.id)
    .then(data=>{
      res.send({data:data})
    })
    .catch(err=>{
      console.log(err)
    })
}
const getEditBlog = (req,res) =>{
  Blog.findById(req.params.id)
    .then(editData=>{
      res.send(editData)
    })
}
const putEditBlog = (req,res)=> {
  Blog.findByIdAndUpdate(req.params.id, req.body)
   .then(()=>{
     res.send("Updated")
   })
   .catch(err=>{
     console.log(err)
   })
}
const deleteBlog =(req, res) =>{
  Blog.findByIdAndRemove(req.params.id)
    .then(()=>{
      res.send("deleted")
    })
    .catch(err=>{
      console.log(err)
    })
}
module.exports = {
  rootRoute,
  getBlogs,
  getNewBlogs,
  postBlog,
  getShowBlog,
  getEditBlog,
  putEditBlog,
  deleteBlog
}
