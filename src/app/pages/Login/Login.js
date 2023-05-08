
import * as React from 'react';
import {Link} from "react-router-dom"
import {Space,Left,Icon} from 'styles/component/Sign.styled'
import {useState} from 'react'
import styled from 'styled-components'
import IMAGES from 'images/index.js';
import GlobalStyles from  'styles/component/Global'
import axios from "axios";
import {setUserSession} from 'app/pages/Common';
const Login=(props)=>{
  
  const[error,setError]=useState(null);
  const[password,setPassword]=useState('');
  const[email,setEmail]=useState('');
 const[loading,setLoading]=useState(false);

  const handleLogin=()=> {
    setError(null);
    setLoading(true);
   axios.post("http://15.206.121.23:7077/v1/auth/email/login",{
      email:email,
      password: password
    }).then(response=>{
      setLoading(false);
      setUserSession(response.data.token, response.data.user)
      props.history.push('/sign');
    }).catch(function(error){
      setLoading(false);
      if (error.response.status === 401 ||error.response.status === 400) {
        
        setError(error.response.data.message);
       
      } else if (error.request) {
       
        console.log(error.request);
      } else {
        
       setError("Something went wrong. Please try again later.");
}
    });
  }
  const Button = styled.button`
  display: flex;  flex-direction: row;  justify-content: center;
  align-items: center;  padding: 12px 24px;  gap: 10px;  width: 186px;
  height: 48px;  background: #7F79F9;  border-radius: 5px;
  border-color:#7F79F9;  flex: none;  order: 0;   flex-grow: 0;
`;


return(

<body>
  
<h5>
  
<div3 >
      <Left>
        <img src={IMAGES.imgLeft} alt=""/>
      </Left>
      <Icon>
      <img src={IMAGES.imgIcon} alt=""/>
     </Icon>
</div3>

<div2 style= {{background: " #E5E5E5",position: "absolute",width: "750px",height: "1024px",
           left: "530px",top: "0px"}}>
  <Space><br/><br/>
  
     <Link to="/">Back to Home</Link>
     <GlobalStyles/>
      <p>Log in to<br/>
         your Expanter 
         account</p><br/><br/><br/>
   
      <div> Fill out the form</div> <br/><br/>
       
   
    
    
   <label htmlFor="Email">Work email</label><br/>
   <input type="text" value={email} 
    onChange={(e)=>setEmail(e.target.value)}className="form-control"/><br/>

    <label htmlFor="Password">Password</label><br/>
    <input type="text" value={password} 
    onChange={(e)=>setPassword(e.target.value)}className="form-control"/><br/>

{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

      <div1>Forgot Password?</div1><br/><br/><br/>
      
      <label>
      <input type="checkbox" value="lsRememberMe" id="rememberMe"
      style={{background: "#DADADA",width: "18px",
      height: "18px" ,display: "inline-block",lineheight:"19px"}}/>&nbsp;&nbsp;
      Remember me</label><br/>
      
      <Button value={loading ?"Loading...":"Create account now"}
      disabled={loading}
      onClick={handleLogin} >Create account now</Button><br/><br/><br/><br/>
    </Space>
     <hr
      />
      <a>I don't have an Expanter account?</a>
      <button onClick="submit" style={{float: "right",color:"#7F79F9", margin: "0 30px",
      height:"17px",  justifycontent: "center", margintop:"30px",
      padding: "14px 20px",alignitems: "center",lineheight:"17px"}}>Create account</button>

     </div2>
     
     </h5>
     <style>
      {
        `
        div3{
              position: absolute;   width: 530px;   height: 1024px;
             left: 0px;   top: 0px;
            }
           p{
              width: 416px;    height: 120px; font-family: 'Red Hat Display', sans-serif;
              font-style:normal  ;  font-weight: 300;    font-size: 60px;
              line-height: 100%;   color: #000000;   flex: none;
              order: 0;  align-self: stretch;  flex-grow: 0;  top:120px;
              }
              
        

            Button{
                width: 138px;height: 24px;float:right;margin-top:-10px;
                font-family: 'Inter';font-style: normal;
                font-weight: 700;font-size: 14px;line-height: 17px;
                display: flex;align-items: center;
                text-align: center; border-color:#7F79F9;
                color: #FFFFFF; flex: none;order: 0;
                align-self: stretch;flex-grow: 0;
                }
          
            a{
            width: 259px;  height: 19px;  font-family: 'Inter',sans-serif;
            font-style: normal;   font-weight: 500;  font-size: 16px;
            line-height: 19px;   color: #2B353F;   flex: none;   order: 0;
            align-self: stretch;   flex-grow: 0;   textAlign:"center";
              margin:24px ; margin-top:976px; 
            }
          
            div{
            width: 416px  ;height: 17px;  font-family: 'Inter',sans-serif;
            font-style: normal;  font-weight: 400;   font-size: 12px;
            line-height: 140%;   color: #444444;   flex: none;   order: 0;
            align-self: stretch;   flex-grow: 0; 
            }
          
            div1{
            width: 416px;  height: 20px;  font-family: 'Inter',sans-serif;  font-style: normal;
            font-weight: 500;  font-size: 14px;  line-height: 140%;  color: #4769F9;
            flex: none;  order: 2;  align-self: stretch;  flex-grow: 0;
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
      font-family: 'Red Hat Display';
      }
    
 `}
</style>

  </body>
  );
}
export default Login;