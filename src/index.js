import React from "react";
import ReactDOM from "react-dom";

var a = "Shubham";
var b = new Date().toLocaleDateString();
var c = new Date().toLocaleTimeString();


ReactDOM.render(
  <>
  <h1> My name is {a} </h1>
  <p> Current Date is = {b}     </p>

  <p> Current Date is {c}       </p>
  </>
  
  
  
  , document.getElementById("root"));
