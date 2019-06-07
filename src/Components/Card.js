import React from 'react';
import picture from "../picture.jpg"
import "./card.css"
import Name from './Name';
import Handle from './Handle';
import Expand from './Expand';
import "./text.css"
import Date from "./Date"

export default function Card(props) {
  return (
    <div className="container">    
        <img src={picture} alt="Logo" className="picture"/>
        <div className="container2">
          <div className="top">
          <Name />
          <Handle />    
          <Date /> 
          </div>

          <div className="middle">
          <div className="text">
          {props.content}
          </div>
          </div>

          <div className="bottom">
          <Expand />
          </div>     
          </div>             
    </div>
  )}