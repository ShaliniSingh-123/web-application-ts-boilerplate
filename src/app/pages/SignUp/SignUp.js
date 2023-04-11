
import * as React from 'react';
import {Link} from "react-router-dom"
import styled from 'styled-components';
const MainPage=()=>{
    const Button = styled.button`
    box-sizing: border-box;display: flex;flex-direction: row;align-items: flex-start;
    padding: 16px 24px;gap: 10px;width: 108px;height: 51px;background: #FFFFFF;
    border: 2px solid #FFFFFF;border-radius: 3px;flex: none;order: 0;flex-grow: 0;
`;
    return(
       <body>
         
           <h1 >
          
              <div1 style= {{background:"#7F79F9"}}><Link to="/">Back to Home</Link><br/><a0>Our business wants to expand to China</a0> 
               <br/><a>Unlock China </a><br/> <a1>Simplify China expansion with a self-serviced digital platform</a1><br/>
               <a2>Unlock Resources</a2><br/><a3>Custom-sourced business solutions that match your needs</a3>
               <br/><a4>Streamline Expansion</a4> <br/> <a5>B2B transaction and multiple-expansion management, automated in one digital workplace </a5>
               <Button onClick="submit">Sign up</Button>
               <button onClick="submit" style={{width: "108px",height: "51px",background:"#7F79F9",
               border: "2px solid #FFFFFF",borderradius: "3px",color:"#FFFFFF", display: "flex",
               flexdirection: "row",alignitems: "flex-start",padding: "16px 24px"}}>Log in</button>
               </div1>
              
              <div style= {{background: "#C2E1FF",position: "absolute",width: "732px",height: "900px",
           left: "708px",top: "0px"}}><a6>I provide services in China for business from overseas</a6>
              <br/><a7>Unlock Visibility</a7><br/><a8> Connect with global clients who are ready to expand to China</a8>
              <br/><a9>Filtered Opportunities</a9><br/><a10>Pitching only to find out not matching? let Expanter filter for you.</a10>
              <br/><a11>Streamline Client servicing</a11><br/><a12>B2B transaction and multi-clients management, automated in one digital workplace</a12>
              <Button onClick="submit" style= {{background:"#7F79F9",color:"#FFFFFF"}}>Sign up</Button>
               <button onClick="submit" style={{width: "108px",height: "51px",background:"#C2E1FF",
               border: "2px solid #7F79F9",borderradius: "3px",color:"#7F79F9",
               flexdirection: "row",alignitems: "flex-start",padding: "16px 24px"}}>Log in</button>
             </div>
           </h1>
          
        <style>
        {`
        body{
            margin:0px;
        }
           h1{
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        position: relative;width: 1440px;height: 900px;Top:-14422px;Left:-12822pxbackground: #FFFFFF;
        }
        div1{
            position: absolute;width: 708px;height: 900px;left: 0px;top: 0px;
        }
        Link{
            width: 94px; height: 16px; font-family: 'Inter'; font-style: normal; font-weight: 400;
            font-size: 14px; line-height: 140%; display: flex; align-items: center; color: #FFFFFF;
           flex: none; order: 1; align-self: stretch; flex-grow: 0;
            }
        a0{
            width: 320px;  height: 212px; font-family: 'Inter'; font-style: normal;
           font-weight: 300; font-size: 48px; line-height: 110%; color: #FFFFFF; flex: none;
           order: 0; align-self: stretch; flex-grow: 0;
        }
        
        a{
            width: 320px; height: 22px; font-family: 'Inter'; font-style: normal;
            font-weight: 600; font-size: 18px; line-height: 120%; color: #FFFFFF;
            flex: none;  order: 0; align-self: stretch;  flex-grow: 0; 
          }
        a1{
           width: 320px; height: 40px; font-family: 'Inter'; font-style: normal; font-weight: 400;
           font-size: 14px; line-height: 140%; letter-spacing: 0.02em; color: #FFFFFF;
           flex: none;  order: 1;  align-self: stretch;

        }
        a2{
            width: 320px; height: 22px; font-family: 'Inter'; font-style: normal; font-weight: 600;
            font-size: 18px; line-height: 120%; /* identical to box height, or 22px */ color: #FFFFFF;
            flex: none;  order: 0; align-self: stretch;  flex-grow: 0;
        }
        a3{
            width: 320px; height: 40px; font-family: 'Inter'; font-style: normal; font-weight: 400;
            font-size: 14px; line-height: 140%; letter-spacing: 0.02em; color: #FFFFFF;
            flex: none; order: 1; align-self: stretch; flex-grow: 0;
        }
        a4{
            width: 320px; height: 22px; font-family: 'Inter'; font-style: normal; font-weight: 600;
            font-size: 18px; line-height: 120%; color: #FFFFFF; flex: none; order: 0;
            align-self: stretch; flex-grow: 0;
        }
        a5{
            width: 320px; height: 60px; font-family: 'Inter'; font-style: normal; font-weight: 400;
           font-size: 14px; line-height: 140%; letter-spacing: 0.02em; color: #FFFFFF;
          flex: none;  order: 1;  align-self: stretch;  flex-grow: 0;
        }
        Button{
          width: 60px; height: 19px; font-family: 'Inter'; font-style: normal; font-weight: 600;
          font-size: 16px;    line-height: 19px;    letter-spacing: 0.02em;   color: #7F79F9;
           flex: none;     order: 0;    flex-grow: 0;
        }
        a6{
            width: 416px;  height: 212px;   font-family: 'Inter';    font-style: normal; 
             font-weight: 300; font-size: 48px;   line-height: 110%;   color: #7F79F9;  flex: none;
             order: 0;    align-self: stretch;     flex-grow: 0;
        }
        a7{
            width: 320px;  height: 22px;  font-family: 'Inter';  font-style: normal;  font-weight: 600;
            font-size: 18px;  line-height: 120%; /* identical to box height, or 22px */  color: #2B353F;
            flex: none;  order: 0;  align-self: stretch;  flex-grow: 0;
        }
        a8{
            width: 320px; height: 40px;  font-family: 'Inter';  font-style: normal;  font-weight: 400;
            font-size: 14px;  line-height: 140%;  letter-spacing: 0.02em;  color: #2B353F;
            flex: none;  order: 1;  align-self: stretch;  flex-grow: 0;
        }
        a9{
            width: 320px; height: 22px; font-family: 'Inter'; font-style: normal; font-weight: 600;
            font-size: 18px; line-height: 120%; /* identical to box height, or 22px */ color: #2B353F;
            flex: none;  order: 0;  align-self: stretch;  flex-grow: 0;
        }
        a10{
            width: 320px; height: 40px; font-family: 'Inter'; font-style: normal; font-weight: 400;
            font-size: 14px; line-height: 140%; letter-spacing: 0.02em; color: #2B353F; flex: none;
            order: 1; align-self: stretch; flex-grow: 0;
        }
        a11{
            width: 320px; height: 22px; font-family: 'Inter'; font-style: normal; font-weight: 600;
            font-size: 18px; line-height: 120%; /* identical to box height, or 22px */
            color: #2B353F;  flex: none;  order: 0; align-self: stretch; flex-grow: 0;
        }
        a12{
            width: 320px; height: 60px; font-family: 'Inter'; font-style: normal; font-weight: 400;
            font-size: 14px; line-height: 140%; letter-spacing: 0.02em; color: #2B353F;
           flex: none;  order: 1;  align-self: stretch; flex-grow: 0;
        }
         `}
        </style>
        </body>
    )
    
}
export default MainPage;