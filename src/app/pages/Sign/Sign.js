import * as React from 'react';

import {Container,Nav,Img,Img1,Icon,Link} from 'styles/component/Sign.styled'
import {Button,Button1} from 'styles/component/Button.styled'
import IMAGES from 'images/index.js';

function Sign(){
   
    return(
       
       <body>
          
           <h1 >
        
              <div1 style= {{background: "linear-gradient(180deg, #7F79F9 0%, #645DEE 100%)"}}>
                
              <Link to="/"><img src={IMAGES.imgVector1} alt=""/>
              &nbsp;&nbsp;Back to Home</Link> 
              
               <Container>
              
              <h2> Our business <br/>wants to<br/> expand to <br/>China</h2>
                <Img>
                <img src={IMAGES.imgOne} alt=""/>
                </Img><br/>
                        <p> <a>Unlock China</a><br/>
                        Simplify China expansion with a self-serviced <br/>
                        digital platform</p><br/>
                        <p> <a>Unlock Resources</a><br/>
                        Custom-sourced business solutions that<br/>
                        match your needs</p><br/>
                       <p><a>Streamline Expansion</a><br/>
                       B2B transaction and multiple-expansion <br/>
                       management, automated in one digital <br/>
                       workplace</p><br/><br/>
                   
                  <Button onClick="submit"> Sign up</Button>
                  <Button1 onClick="submit" bg="#7F79F9" color="#FFFFFF"  border="2px solid #FFFFFF">Log in</Button1>
                  </Container>
                  </div1>
              
              <div style= {{background: "#C2E1FF",position: "absolute",width: "732px",height: "900px",
           left: "708px",top: "0px"}}>
            <Icon>
             <Link to="/"><img src={IMAGES.imgIcon} alt=""/></Link>
             </Icon>
             <Nav>
            <h3> I provide<br/>services in China<br/> for business <br/>from overseas 
                <Img1>
                <img src={IMAGES.imgTwo} alt=""/>
                </Img1></h3><br/>
                
             <p style={{color:" #2B353F"}}><b>Unlock Visibility </b><br/>
                  Connect with global clients who are ready to <br/>
                  expand to China</p><br/>
             <p style={{color:" #2B353F"}}><b>Filtered Opportunities</b><br/>
                Pitching only to find out not matching? let<br/>
                 Expanter filter for you.</p><br/>
              <p style={{color:" #2B353F"}}><b>Streamline Client</b><br/>
               servicing B2B transaction and multi-clients<br/>
                  management, automated in one digital<br/>
                  workplace</p><br/><br/>
                  <Button onClick="submit" bg="#7F79F9" color="#FFFFFF"> Sign up</Button>
                  <Button1 onClick="submit" bg="#C2E1FF" border="2px solid #7F79F9">Log in</Button1>

                      </Nav>
                  </div>
                </h1>
          
        
        <style>
        {`
       
           h1{
            display:grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            }
      
            div1{
            position: absolute;
           width: 708px;  height: 900px;  left: 0px;  top: 0px;
          }
      a4{
        width: 94px;
        height: 16px;
        margin-top:19px;
        margin-left:21.33px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
      }
          Button{
           width: 60px;  height: 19px;  font-family: 'Inter'; font-style: normal;
           font-weight: 600;  font-size: 16px; line-height: 19px;  letter-spacing: 0.02em;
           color: #7F79F9;  flex: none;  order: 0;  flex-grow: 0;
          }
      
         Button1{
         width: 49px;  height: 19px; font-family: 'Inter'; font-style: normal;
         font-weight: 600;  font-size: 16px;  line-height: 19px; letter-spacing: 0.02em;
         color: #FFFFFF; flex: none; order: 0; flex-grow: 0;
         }
        
         container,
         h2{
         width: 320px;  height: 212px;   font-family: 'Inter', sans-serif;  font-style: normal;
         font-weight: 300; font-size: 48px;  line-height: 110%;  color: #FFFFFF;
         flex: none;  order: 0;  align-self: stretch;  flex-grow: 0;margin-top:70px;
          }

        
          p{
           width: 320px;  height: 40px;  font-family: 'Inter', sans-serif;  font-style: normal;
           font-weight: 400;  font-size: 14px;  line-height: 140%; /* or 20px */
           letter-spacing: 0.02em;  color: #FFFFFF; flex: none;  order: 1;
           align-self: stretch;  flex-grow: 0;margin: 0 6px;
           }

           container,
           a{
           width: 320px;  height: 22px;  font-family: 'Inter', sans-serif;  font-style: normal;
           font-weight: 600;  font-size: 18px;  line-height: 120%;  color: #FFFFFF;
           flex: none;  order: 0;  align-self: stretch;  flex-grow: 0; 
            }

            h3{
            width: 416px;  height: 212px;  font-family:  'Inter', sans-serif;  font-style: normal;
            font-weight: 300;  font-size: 48px;  line-height: 110%;  color: #7F79F9;
            flex: none;  order: 0;  align-self: stretch;  flex-grow: 0;margin-top:99px;
            }

             b{
             width: 320px;  height: 22px;  font-family: 'Inter', sans-serif;  font-style: normal;
             font-weight: 600;  font-size: 18px;  line-height: 120%;  color: #2B353F;
             flex: none;  order: 0;  align-self: stretch;  flex-grow: 0;
             }
           
       `}
        </style>
        </body>
    )
    }
export default Sign

