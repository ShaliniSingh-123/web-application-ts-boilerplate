import styled from 'styled-components';

export const Button= styled.button`

box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 16px 24px;
gap: 10px;

width: 108px;
height: 51px;
color:#7F79F9;
background: #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 3px;
flex: none;
order: 0;
flex-grow: 0;
 background-color:${({bg})=>  bg || '#fff'};
 color:${({color})=>  color|| '#7F79F9'};
 border:${({border})=>  border|| '#7F79F9'};

`
export const Button1= styled.button`

box-sizing: border-box;
display: flex;
flex-direction: row;
margin: 0 120px;
margin-top:-50px;
padding: 16px 24px;
gap: 10px;

width: 100px;
height: 51px;

border: 2px solid #FFFFFF;
border-radius: 3px;

flex: none;
order: 0;
flex-grow: 0;
background-color:${({bg})=>  bg || '#fff'};
color:${({color})=>  color|| '#7F79F9'};
border:${({border})=>  border|| '#7F79F9'};

`