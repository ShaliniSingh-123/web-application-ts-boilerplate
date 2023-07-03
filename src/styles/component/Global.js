import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.cdnfonts.com/css/red-hat-display');

     h5{
          
    display:grid;
    height:100vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    }
 
      div{
        width: 416px  ;height: 17px;  font-family: 'Inter';
        font-style: normal;  font-weight: 400;   font-size: 12px;
        line-height: 140%;   color: #444444;   flex: none;   order: 0;
        align-self: stretch;   flex-grow: 0; 
        }
    
          input{
            box-sizing: border-box;   display: flex;  flex-direction: row;  align-items: center;
            padding: 16px;  gap: 24px;   width: 416px;   height: 52px;  background: #FFFFFF;
            border: 1px solid #EEEEEE; border-radius: 5px;  flex: none;  order: 1;
            align-self: stretch;   flex-grow: 0;
          }
          
           
           label{
            width: 416px;  height: 17px;  font-family: 'Inter',sans-serif; font-style: normal;
            font-weight: 500;  font-size: 14px;  line-height: 17px;  color: #2B353F;  flex: none;
            order: 0;  align-self: stretch;  flex-grow: 0;
            }

            hr{
                width: 750px;  height: 0px;  border: 1px solid #CAD2EC;  flex: none;
                order: 0;  align-self: stretch;  flex-grow: 0;  margin-top:947px;  align-items: center;
                gap: 24px;    display: flex;     flex-direction: row;
               }

  select{
    box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 24px;

width: 331px;
height: 52px;

/* Light Fill */

background: #FFFFFF;
border: 1px solid rgba(71, 105, 249, 0.2);
border-radius: 5px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
  }
  
  option{
    width: 255px;
height: 20px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */

display: flex;
align-items: center;

/* Dark Gray */

color: #2B353F;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 1;
  }

  frame2{
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 22px;

width: 662px;
height: 233px;

background: #FFFFFF;
border-radius: 5px;

/* Inside auto layout */

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
  }
`
export default GlobalStyle