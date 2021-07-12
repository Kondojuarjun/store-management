import React from 'react';
import "./index.css"
const Login=()=>{
    return   <div id="loginform">
     <h2 id="headerTitle">Login</h2>
     <div class="row">
    <label>Username</label>
    <input type="text" placeholder="Enter your username"/>
  </div> 
  <div class="row">
    <label>Password</label>
    <input type="password" placeholder="Enter your password"/>
  </div> 
  <div id="button" class="row">
    <button>Login</button>
  </div>
    
  </div>
}
export default Login