import * as React from 'react';
import {useState} from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components';
import IMAGES from 'images/index.js';
import {Space,Leftc,Icon1,Logo} from 'styles/component/Sign.styled'
import GlobalStyles from  'styles/component/Global'
import {useHistory} from "react-router-dom"
function Create(){
  const [firstname,setFirstname]=useState("");
  
  const [lastname,setLastname]=useState("");
  const [businessname,setBusinessname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const history=useHistory();
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
async function SignUp()
{
  let item={firstname,lastname,businessname,email,password}
  
 let result =await fetch("http://15.206.121.23:7077/v1/auth/email/registration/serviceProvider",{
      method:'POST',
      headers:{
         "Content-Type":"application/json",
         "Accept":"application/json"
      },
      body:JSON.stringify(item)
     });
     result= await result.json();
     console.warn("result",result)
     localStorage.setItem("user-info",JSON.stringify(result));
    history.push("/sign")
  }

return(
  <body>
    <h5>
       
       <div1 style={{background:"linear-gradient(180deg, #F1FEFF 0%, #C2E1FF 100%"}}>
        <Leftc>
       <img src={IMAGES.imgLeftc} alt=""/>
       </Leftc>
       
       <Icon1><img src={IMAGES.imgIcon1} alt=""/></Icon1>
    
      <Logo> <img src={IMAGES.imgExpanter} alt=""/></Logo>
       </div1>

      <div style= {{background: "#E5E5E5",position: "absolute",width: "750px",height: "1024px",
           left: "530px",top: "0px"}}>
             <Space>
              <GlobalStyles/><br/>
            
            <Link to="/"><img src={IMAGES.imgVector} alt=""/>&nbsp;Back to Home</Link> 

           <h1>Create an account</h1>
           <div> Fill out the form</div><br/>
           <a1>I’m signing up as a</a1><br/><br/><br/>
           <tbody>
          <tr>
         <td> <input type  ="radio"  name="Provider" value="brand" 
        style={{width: "24px",height: "24px",background: "#7F79F9",borderradius: "12px",
        flex: "none",order: "0",flexgrow: "0",gap:"30px",Top:"450"}}/></td>&nbsp;Brand
        
       &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <td><input type ="radio" name="Provider" value="serviceprovider" style={{width: "24px",
       height: "24px",background: "#7F79F9",borderradius: "12px",
        flex: "none",order: "0",flexgrow: "0",Left:"330px",Top:"450px"}}/></td>&nbsp;Service Provider
      </tr>
     </tbody>

   <br/>

   
   <label htmlFor="FirstName">First Name</label><br/>
   <input type="text" value={firstname} 
    onChange={(e)=>setFirstname(e.target.value)}className="form-control"/><br/>

      <label htmlFor="LastName">Last Name</label><br/>
     <input type="text" value={lastname} 
    onChange={(e)=>setLastname(e.target.value)} className="form-control" /><br/>

      <label htmlFor="BusinessName">Business Name</label><br/>
     <input type="text"value={businessname} 
    onChange={(e)=>setBusinessname(e.target.value)} className="form-control"/><br/>

    <label htmlFor="Email">Email address</label><br/>
    <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}
     className="form-control" /><br/>
       
     
      <label htmlFor="Password">Password</label><br/>
      <input type="password"  value={password} 
    onChange={(e)=>setPassword(e.target.value)} className="form-control"/><br/>
     
      <br/>
      <Button onClick={SignUp}>Create account now</Button><br/><br/>
    
      </Space>
      <hr 
      />
      <a>Already have an Expanter account?</a>
      <button onClick={SignUp} style={{float: "right",color:"#7F79F9", margin: "0 30px",
      height:"17px",  justifycontent: "center", margintop:"30px",
      padding: "14px 20px",alignitems: "center",lineheight:"17px"}}>Create account</button>
    </div>
    </h5>
     <style>
      {
        `
          div1{
            position: absolute;
            width: 530px;
            height: 1024px;
            left: 0px;
            top: 0px;
            
          }
         h1{
          width: 416px;  height: 120px;  font-family: 'Red Hat Display', sans-serif;  font-style: normal;
          font-weight: 300;   font-size: 60px;   line-height: 100%;   color: #000000;
          flex: none;   order: 0;  align-self: stretch;   flex-grow: 0; margin-top:120px;
          px;
          }
         
          Button{
           width: 138px;  height: 24px;  font-family: 'Inter';  font-style: normal;
            font-weight: 700;  font-size: 14px;  line-height: 17px;  display: flex;
            align-items: center;  text-align: center;  color: #FFFFFF;  flex: none;  order: 0; 
            align-self: stretch;  flex-grow: 0;  border-color:"#7F79F9";   float:right;
           }
           
           a{
            width: 270px;   height: 19px;   font-family: 'Inter',sans-serif;
            font-style: normal;   font-weight: 500;   font-size: 16px;  line-height: 19px;
            color: #2B353F;  flex: none;   order: 0;    flex-grow: 0; margin:24px ;  
            margin-top:976px;
              }
           
          a1{
            width: 416px;   height: 17px;  font-family: 'Inter',sans-serif;  font-style: normal;
            font-weight: 500;   font-size: 14px;   line-height: 17px;  color: #2B353F;
            flex: none;   order: 0;  align-self: stretch;  flex-grow: 0;
          }
           div{
            width: 416px;   height: 17px;    font-family: 'Inter',sans-serif;    font-style: normal;  
            font-weight: 400;  font-size: 12px; line-height: 140%;/* identical to box height, or 17px */
            color: #444444;   flex: none;  order: 0;  align-self: stretch;   flex-grow: 0;
           
             }

         
        
          tr{
            width: 132px;  height: 19px;  font-family: 'Inter',sans-serif;   font-style: normal;
            font-weight: 600;   font-size: 16px;   line-height: 19px;   color: #000000;
            flex: none;o  rder: 0;    align-self: stretch;    flex-grow: 0; margin:-100px;
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
     textAlign:"right"
     }
 `}
</style>  

</body>
 );
}
export default Create;