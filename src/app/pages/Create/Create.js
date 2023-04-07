import * as React from 'react';
import {useState} from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components';
function Create(){
  const[user,setUser]=useState("");
  const[password,setPassword]=useState("");
  const[userErr,setUserErr]=useState(false);
  const[passErr,setPassErr]=useState(false);
  const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  width: 186px;
  height: 48px;
  background: #7F79F9;
  border-radius: 5px;
  border-color:#7F79F9;
  flex: none;
  order: 0;
  flex-grow: 0;
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
<div class="Login">

   <Link to="/">Back to Home</Link>
    <h1>Create an account</h1>
    <style>
      {
        ` h1{width: 416px;height: 120px;font-family: 'Red Hat Display';font-style: normal;
          font-weight: 300;font-size: 60px;line-height: 100%;color: #000000;flex: none;
          order: 0;align-self: stretch;flex-grow: 0;
          }

          input{
            box-sizing: border-box;display: flex;flex-direction: row;align-items: center;
            padding: 16px;gap: 24px;width: 416px;height: 52px;background: #FFFFFF;
            border: 1px solid #EEEEEE;border-radius: 5px;flex: none;order: 1;align-self: stretch;
            flex-grow: 0;}

            Button{
            float: right;width: 138px;height: 24px;font-family: 'Inter';font-style: normal;
            font-weight: 700;font-size: 14px;line-height: 17px;display: flex;align-items: center;
            text-align: center;color: #FFFFFF;flex: none;order: 0;align-self: stretch;flex-grow: 0;
            border-color:"#7F79F9"
           }

           label{
            width: 416px;height: 17px;font-family: 'Inter';font-style: normal;
            font-weight: 500;font-size: 14px;line-height: 17px;color: #2B353F;flex: none;order: 0;
            align-self: stretch;flex-grow: 0;
           }
         
           hr{
              width: 750px;height: 0px;border: 1px solid #CAD2EC;flex: none;
              order: 0;align-self: stretch;flex-grow: 0;
             } 

           a{
              width: 416px;height: 17px;font-family: 'Inter';font-style: normal;font-weight: 500;
              font-size: 14px;line-height: 17px;color: #2B353F; flex: none;
            order: 0;  align-self: stretch; flex-grow: 0;
              }
           
           div{
            width: 416px;height: 17px;font-family: 'Inter';font-style: normal;font-weight: 400;
            font-size: 12px;line-height: 140%;/* identical to box height, or 17px */color: #444444;
            flex: none;order: 0;align-self: stretch;flex-grow: 0;
             }

          link{
            width: 93px;height: 16px;font-family: 'Inter';font-style: normal;font-weight: 400;font-size: 14px;
            line-height: 140%;display: flex;align-items: center;color: #516277;
            flex: none;order: 1;align-self: stretch;flex-grow: 0;
            }
        
          tr{
            width: 132px;height: 19px;font-family: 'Inter';font-style: normal;
            font-weight: 600;font-size: 16px;line-height: 19px;color: #000000;
            flex: none;order: 0;align-self: stretch;flex-grow: 0;
           }
          `
      }
       </style>
      <div> Fill out the form</div> <br/><br/>
       <a>I’m signing up as a</a><br/><br/>
       <tbody>
      <tr>
        <td> <input type  ="radio"  name="Provider" value="brand" 
        style={{width: "24px",height: "24px",background: "#7F79F9",borderradius: "12px",
        flex: "none",order: "0",flexgrow: "0",gap:"30px"}}/></td>Brand
        <td><input type ="radio" name="Provider" value="serviceprovider" style={{width: "24px",height: "24px",background: "#7F79F9",borderradius: "12px",
        flex: "none",order: "0",flexgrow: "0"}}/></td>Service Provider
      </tr>
     </tbody><br/>

    <form onSubmit={loginHandle}>

    <label htmlFor="Email">Email address</label><br/>
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
        }}>Invalid Password</span>:""}
      <br/>
      <Button onClick="submit" >Create account now</Button><br/><br/>
      <hr 
      />
      <a>Already have an Expanter account?</a>
      <button onClick="submit" style={{float: "right",color:"#7F79F9",
      padding: "14px 20px",alignitems: "center",lineheight:"17px",bordercolor:"#7F79F9"}}>Create account</button>
    </form>
    <style jsx global>
{`
    body { 
      width: 530px;
      height: 1024px;
      background:  #E5E5E5;
     textAlign:"right"
     }
 `}
</style>  
</div>
 );
}
export default Create;