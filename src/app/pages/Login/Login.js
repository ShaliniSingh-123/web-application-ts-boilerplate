
import * as React from 'react';
import {Link} from "react-router-dom"
import {useState} from 'react'
import styled from 'styled-components';

function Login(){
  const[user,setUser]=useState("");
  const[password,setPassword]=useState("");
  const[userErr,setUserErr]=useState(false);
  const[passErr,setPassErr]=useState(false);
  
  const Button = styled.button`
  display: flex;flex-direction: row;justify-content: center;
  align-items: center;padding: 12px 24px;gap: 10px;width: 186px;
  height: 48px;background: #7F79F9;border-radius: 5px;
  border-color:#7F79F9;flex: none;order: 0; flex-grow: 0;
`;

function loginHandle(e)
{
  if(user.length<5 || password.length<5)
    {
      alert("type correct value")
    }
  else
    {
      alert("all good :)")
    }
  e.preventDefault()
}
function userHandler(e){
let item =e.target.value;
if(item.length<5)
{
  setUserErr(true)
}
else
{
 setUserErr(false)
}
  setUser(item)
 }
function passwordHandler(e){
  let item=e.target.value;
  if(item.length<5)
  {
    setPassErr(true)
  }
  else
  {
    setPassErr(false)
  }
  setPassword(item)
}

return(

<div className="cover">

<Link to="/">Back to Home</Link>
    <h1>Log in to your Expanter account</h1><br/><br/><br/>
   
      <div> Fill out the form</div> <br/><br/>
       
    <form onSubmit={loginHandle}>
    
    <label htmlFor="Email">Work email</label><br/>
      <input type="text" onChange={userHandler} /><br/>
       {userErr?<span
         style={{
          fontWeight: "bold",
          color: "red"
        }}> Invalid UserId</span>:""}
      <br/><br/>

      <label htmlFor="Password">Password</label><br/>
      <input type="password"
      onChange={passwordHandler}/><br/>
      {passErr?<span
        style={{
          fontWeight: "bold",
          color: "red"
        }}>Invalid Password</span>:""}<br/>
     
      <div1>Forgot Password?</div1><br/><br/><br/><br/>
      
      <label>
      <input type="checkbox" value="lsRememberMe" id="rememberMe"
      style={{background: "#DADADA",width: "12.5px",
      height: "12.5px",verticalalign: "middle" ,display: "inline-block",lineheight:"19px"}}/>
    Remember me</label>
      <Button onClick="submit">Create account now</Button><br/><br/><br/><br/>
      <hr 
      />
      <a> I don’t have an Expanter account?</a>
      <button onClick="submit" style={{float: "right",color:"#7F79F9",
      padding: "14px 20px",alignitems: "center",lineheight:"17px"}}>Create account</button>
     </form>
     <style>
      {
        ` h1{width: 416px;height: 120px;
         font-family: 'Red Hat Display';
          font-style: normal;font-weight: 300;font-size: 60px;
          line-height: 100%;color: #000000;flex: none;
          order: 0;align-self: stretch;flex-grow: 0;
          }

          input{
            box-sizing: border-box;display: flex;
            flex-direction: row;align-items: center;
            padding: 16px;gap: 24px;width: 416px;height: 52px;
            background: #FFFFFF;border: 1px solid #EEEEEE;
            border-radius: 5px;flex: none;order: 1;align-self: stretch;
            flex-grow: 0;}

            Button{
                width: 138px;height: 24px;float:right;
                font-family: 'Inter';font-style: normal;
                font-weight: 700;font-size: 14px;line-height: 17px;
                display: flex;align-items: center;
                text-align: center; border-color:#7F79F9;
                color: #FFFFFF; flex: none;order: 0;
                align-self: stretch;flex-grow: 0;
           }
           
           label{
            width: 105px; height: 19px;font-family: 'Roboto';
            font-style: normal;font-weight: 400;font-size: 16px;
            line-height: 19px;color: #2B353F; flex: none; order: 0;
            align-self: stretch;text-align: center;align-items: center;flex-grow: 0;
            }
           
            hr{
           width: 750px;height: 0px;border: 1px solid #CAD2EC;flex: none;
           order: 0;align-self: stretch;flex-grow: 0;bottom:50em;
             }

           a{
            width: 259px;height: 19px;font-family: 'Inter';
            font-style: normal;font-weight: 500;font-size: 16px;
            line-height: 19px;color: #2B353F;
            flex: none;order: 0;align-self: stretch;flex-grow: 0;textAlign:"center";
            }
          
            div{
            width: 416px;height: 17px;font-family: 'Inter';
            font-style: normal;font-weight: 400;font-size: 12px;
            line-height: 140%;color: #444444;flex: none;order: 0;
            align-self: stretch;flex-grow: 0;
            }

           link{
            width: 93px;height: 16px;font-family: 'Inter';
            font-style: normal;font-weight: 400;font-size: 14px;
            line-height: 140%;/* or 20px */display: flex;
            align-items: center;color: #516277;flex: none;order: 1;
            align-self: stretch;flex-grow: 0;
             }
div1{
    
width: 416px;
height: 20px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 140%;
/* identical to box height, or 20px */


/* Expanter Blue */

color: #4769F9;


/* Inside auto layout */

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
div2{
    width: 105px;
height: 19px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

display: flex;
align-items: center;

/* Dark Gray */

color: #2B353F;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
cover{
  background-color:white;
  width:30em;
  height:35em;
  position:relative;
  border-radius:1em;
 rgb(156, 156, 156);
  display:flex;

}
          `
      }
       </style>
    <style jsx global>
{`
    body {
      width: 530px;
      height: 1024px;
      background:  #E5E5E5;
      }
     page{
        display:flex;
        height:100vh;
        width:"100%;
        justify-content:center;
        align-items:center;
      }
 `}
</style>

  </div>
  );
}
export default Login;