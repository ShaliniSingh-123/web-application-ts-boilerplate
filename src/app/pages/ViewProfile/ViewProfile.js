import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom"
const ViewProfile = () => {
  const history=useHistory();
  const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 112px;
  height: 40px;
  background: #E5E5E5;;
  border-radius: 5px;
  border-color:#7F79F9;
  color:#7F79F9;
  flex: none;
  order: 0;
  flex-grow: 0;
`;async function profile()
{
   history.push("/profile")
}

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    
    const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODg0YzFhOTVmNmI4ZjUzNGRmMzllZSIsInR5cGUiOiJ1c2VyIiwidXNlclJvbGUiOiJzZXJ2aWNlUHJvdmlkZXIiLCJ0aW1lIjoxNjg4MDE4NzU4OTE0LCJpYXQiOjE2ODgwMTg3NTh9.wJG0Z5t85FoLuJ4lpGmXxtTtFrzdUybNW8cHq23dGQM";

    fetch(`http://15.206.121.23:7077/v1/users/64884c1a95f6b8f534df39ee`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setUser(data.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };
  

return(
  <body>
    <h5>
       <div style= {{background: "#E5E5E5",position: "absolute",width: "750px",height: "1024px",
           left: "530px",top: "0px"}}>
            <h1>Client profile</h1>
             <br/>
          

             <Button onClick={profile}>Edit profile</Button><br/><br/>

      {user ? (
        <div>
          
          <p>Email<br/> <b>{user.email}</b></p><br/>
          <p>User Role<br/><b> {user.userRole}</b></p><br/>
          <p>Business Name<br/> <b> {user.businessName}</b></p><br/>
          <p>CompanyType<br/> <b>{user.companyType}</b></p><br/>
          <p>DistributorType<br/> <b> {user.distributorType}</b></p><br/>
          <p>MainSpecialities<br/> <b>{user.mainSpecialities}</b></p><br/>
          <p>IndustryExperience<br/> <b>{user.industryExperience}</b></p><br/>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
     
   
    </h5>
     <style>
      {
        `
          
         h1{
          width: 680px;  height: 29px;  font-family: 'Inter,sans-serif'; font-style: normal;
          font-weight: 600; font-size: 24px; line-height: 29px;  color: #000000;
          flex: none;  order: 0;  flex-grow: 0; margin-top:30px; margin-left:-480px;
         
          }
         
          Button{
            width: 100px; height: 40px;  margin-top:-50px;
            float: "right"; margin-left:600px;
            height:"17px"; justifycontent: "center";
             alignitems: "center"; lineheight:"17px";
           }
           
           p{
            width: 270px;   height: 19px;   font-family: 'Inter',sans-serif;
            font-style: normal;   font-weight: 500;   font-size: 16px;  line-height: 19px;
            color: #2B353F;  flex: none;   order: 0;    flex-grow: 0; margin-left:-480px ;  
         
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

         b{
         
gap: 10px;

width: 100px; height: 40px;
backgroundColor: lightgrey
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
export default ViewProfile;




