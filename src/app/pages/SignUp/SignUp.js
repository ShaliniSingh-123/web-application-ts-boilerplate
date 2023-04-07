
import * as React from 'react';
import {Link} from "react-router-dom"
const MainPage=()=>{
    return(
       <body>
         <Link to="/">Back to Home</Link>
           <h1 >
          
              <div1 style= {{background:"#7F79F9"}}> Our business wants to expand to China
               <br/>Unlock China <br/> Simplify China expansion with a self-serviced digital platform<br/>
               Unlock Resources<br/> Custom-sourced business solutions that match your needs
               <br/>Streamline Expansion <br/> B2B transaction and multiple-expansion management, automated in one digital workplace </div1>
              
              <div style= {{background: "#C2E1FF"}}>I provide services in China for business from overseas
              <br/>Unlock Visibility<br/> Connect with global clients who are ready to expand to China
              <br/>Filtered Opportunities<br/>Pitching only to find out not matching? let Expanter filter for you.
              <br/>Streamline Client servicing<br/>B2B transaction and multi-clients management, automated in one digital workplace
              </div>
           </h1>
      
        <style jsx global>
        {`
        body{
            margin:0px;
        }
           h1{
            display:grid;
            height:100vh;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
        }
       
        
         `}
        </style>
        </body>
    )
    
}
export default MainPage;