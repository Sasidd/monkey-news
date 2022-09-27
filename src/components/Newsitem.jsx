import React, { Component } from 'react'
const Newsitem=(props)=> {
    let myStyle={
        width:'18rem' 
    }
   // let {titles,desc,image,url,author,time,source}=props
    return (
        <div className="card" style={myStyle}>
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.titles}</h5>
          <p className="card-text">{props.desc}</p>
          <a href={props.url} target="_blank" className="btn btn-primary">Show More</a>
          <p className="card-text"><small className="text-muted">By {props.author==null?'Unknown':props.author} at {new Date(props.time).toGMTString()}</small></p>
          <span className="position-absolute top-0 lefty translate-middle badge rounded-pill bg-danger">
    {props.source}
    <span className="visually-hidden">unread messages</span>
  </span>
        </div>
      </div>
    )
}

export default Newsitem