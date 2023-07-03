import * as React from 'react';
import {Link} from "react-router-dom"
import {useState, useEffect} from 'react'
import styled from 'styled-components';
import {Frame,Icon} from 'styles/component/Sign.styled'
import IMAGES from 'images/index.js';
import {useHistory} from "react-router-dom"
import GlobalStyles from 'styles/component/Global'
import axios from 'axios';
import "app/pages/style.css";

function Profile () {
  
  const [user, setUser] = useState([])
  const[data,setData]=useState([])

  useEffect(() => {
  fetchData();
}, []);
const fetchData = async () => {
  const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODg0YzFhOTVmNmI4ZjUzNGRmMzllZSIsInR5cGUiOiJ1c2VyIiwidXNlclJvbGUiOiJzZXJ2aWNlUHJvdmlkZXIiLCJ0aW1lIjoxNjg4MDE4NzU4OTE0LCJpYXQiOjE2ODgwMTg3NTh9.wJG0Z5t85FoLuJ4lpGmXxtTtFrzdUybNW8cHq23dGQM";

  fetch(`http://15.206.121.23:7077/v1/users/64884c1a95f6b8f534df39ee`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Accept': 'application/json'
    }
  })
      .then((response) => response.json())
     .then(data => {
        setUser(data.data);
      })
  };
 

  function updateUser()
  {
    fetch(`http://15.206.121.23:7077/documentation#/v1/putV1Users_id`,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Conntent-Type':'application/json'
      },
    
    }).then((response) => {
      return response.json().then((resp)=> {
        console.warn(resp)
        fetchData()
      })
   })
    
  }
    const[selects,setSelects]=useState();
    const[select,setSelect]=useState();
    
    
    const[tagValue, setTagValue]=useState("");
    const[tags, setTags]=useState([]);

     const addTags=(e)=>{
      if(e.keyCode === 13 && tagValue){
          setTags([...tags,tagValue]);
          setTagValue(" ");
      }
  }

  const deleteTag=(val)=>{
     let remainTags=tags.filter((t) => t !== val);
          setTags(remainTags);
          
  }

  const[tagValues, setTagValues]=useState("");
    const[tag, setTag]=useState([]);
  const addTag=(e)=>{
    if(e.keyCode === 13 && tagValues){
        setTag([...tag,tagValues]);
        setTagValues(" ");
    }
}

const deleteTags=(val)=>{
   let remainTags=tags.filter((t) => t !== val);
        setTag(remainTags);
        
}  
  const history=useHistory();
      const Button = styled.button`
      display: flex;  flex-direction: row;  justify-content: center;  align-items: center;
      padding: 12px 24px;  gap: 10px;  width: 155px;  height: 48px;  background: #4769F9;
      border-radius: 5px;  flex: none;  order: 1;  flex-grow: 0;margin-left:500px;
`;
async function Profile()
{
   history.push("/viewprofile")
}

    return(
        <body>
            <h1>
            <p> {user.businessName}</p>      
        <div style= {{background: "#E5E5E5"}}>
  
<Frame>
 
<Link to="/">Back to home</Link> 
<div4> Fill up your<br/><div4 style={{fontWeight:'bold'}}>business <br/>profile</div4></div4>
<a2> Help us offer better experiences for you by filling up <br/>
your business profile. You can always change these <br/>later.

<a3 style={{marginTop:"40px"}}> <input style={{display: "flex",flexdirection:"column",justifycontent: "center",
alignitems: "center",padding: "8px",gap: "10px",width: "32px",height: "32px",background: "#7F79F9",
borderradius: "20px",flex: "none",order: "0",flexgrow: "0"}} type="radio"  /> Business information</a3><br/>

<a3 style={{color: "#2B353F",marginTop:"-5px"}}><input style={{display: "flex",flexdirection:"column",justifycontent: "center",
alignitems: "center",padding: "8px",gap: "10px",width: "32px",height: "32px",background: "#7F79F9",
borderradius: "20px",flex: "none",order: "0",flexgrow: "0"}} type="radio"  /> Expansion details </a3></a2>
</Frame>
             
<img src={IMAGES.imgEllipse} alt=""/>
         
<frame>

<Link to="/"><img style={{float:"right",marginLeft:"670px",marginTop:"-70px"}} src={IMAGES.imgIcon} alt=""/></Link>
<div1>Fields with asterish (<div1 style={{color:"red"}}>*</div1>)are required</div1> 
<a1>Business information</a1>
<label style={{marginTop:"-10px"}}htmlFor="Business name"> Business name <label style={{color:"red"}}>*</label><br/>
<input style={{marginTop:"5px"}} type="text"  defaultValue= {user.businessName}/></label><br/>

<label style={{marginTop:"4px"}}> Business description or Tagline<br/>
<input type="text"  className="form-control" style={{marginTop:"5px",boxsizing: "border-box",display: "flex",
flexdirection: "column", alignitems: "flex-start", padding: "16px 24px 24px", gap: "24px",
width: "662px", height: "100px", background: "#FFFFFF", border: "1px solid rgba(71, 105, 249, 0.2)",
borderradius: "5px",
}}/></label>

<label  style={{marginTop:"90px"}}>Industry / Sector <label style={{color:"red"}}>*</label>
<select defaultValue={user.industryExperience} style={{width:"319px",marginTop:"5px"}}value={selects} onChange={e=>setSelects(e.target.value)}>
    <option></option>
    <option>Health & Medical</option>
    <option>Art & Entertainment</option>
    <option>Education</option>
    <option>Sports</option>
    <option>Watch & Jewellery</option>
    <option>Home & Interior</option>
 </select></label>
<br/>
 <label > Country of origin <label style={{color:"red"}}>* </label>
<select  style={{width:"319px",marginTop:"5px"}}value={select} onChange={e=>setSelect(e.target.value)}>
    <option></option>
    <option>1-3 months</option>
    <option>3-5 months</option>
    <option>5-8 months</option>
    <option>more than 8 months</option>
 </select></label><br/>
 <label>Business size <label style={{color:"red"}}>* </label>
<select id="business size" style={{width:"319px",marginTop:"5px"}}>
    <option></option>
    <option>2-10</option>
    <option>11-50</option>
    <option>51-200</option>
    <option>201-500</option>
    <option>501-1000</option>
    <option>1000+</option>
 </select></label>

<label  style={{marginLeft:"343px",marginTop:"-250px"}}>Business type<label style={{color:"red"}}>* </label> 
<select id="business type" style={{width:"319px",marginTop:"5px"}}>
    <option></option>
    <option>Whole Sell</option>
    <option>x</option>
    <option>y</option>
    <option>z</option>
 </select></label><br/>

     
     <div3 style={{marginLeft:"343px",marginTop:"-1px"}}> <div3 style={{width: "332px",
    height: "17px", fontFamily: "Inter,sans-serif", fontStyle: "normal", fontWeight: "400", fontSize: "14px",
    lineHeight: "17px",color: "#000000"}}> Founding year</div3>
     <input style={{marginTop:"5px"}} type="text"  className="form-control" /></div3>

     <div3 style={{marginLeft:"343px",marginTop:"-20px"}}> <div3 style={{width: "332px",
    height: "17px", fontFamily: "Inter,sans-serif", fontStyle: "normal", fontWeight: "400", fontSize: "14px",
    lineHeight: "17px",color: "#000000"}}>  Website </div3><div3 style={{color:"red"}}>*</div3>
     <input style={{marginTop:"5px"}} type="text"  className="form-control" /></div3>

     <label style={{marginTop:"-10px"}}>Language(s) spoken 
     <label style={{color:"red"}}>*</label></label>
     <div6 style={{marginTop:"-35px"}} className="tagInput">
             {tags.map((item, index)=>{
                    return (
                    <button onClick={() => deleteTag(item)} key={index}>{item}
                    <b>X</b>
                    </button>
                    
                    );
                })}
                <input type="text" placeholder="type and enter"
                value={tagValue}
                 onChange={(e)=>setTagValue(e.target.value)}
                 onKeyDown={addTags}
                 />
            </div6>

    <label style={{marginTop:"-15px"}}> Existing international market presence (if any)</label>
     <div6 style={{marginTop:"-35px"}} className="tagInput">
             {tag.map((item, index)=>{
                    return (
                    <button onClick={() => deleteTags(item)} key={index}>{item}
                    <b>X</b>
                    </button>
                    );
                })}
                <input type="text" placeholder="type and enter"
                value={tagValues}
                 onChange={(e)=>setTagValues(e.target.value)}
                 onKeyDown={addTag}
                 />
            </div6>
     
     <a1 style={{marginTop:"40px"}}>Expansion details</a1>
     <label>Prefered timeline of market entry <label style={{color:"red"}}>* </label>
     <GlobalStyles/>
     <select style={{marginTop:"5px"}}value={selects} onChange={e=>setSelects(e.target.value)}>
    
        <option></option>
        <option>1-3 months</option>
        <option>3-5 months</option>
        <option>5-8 months</option>
        <option>more than 8 months</option>
     </select></label><br/>

     <label style={{width:"662px"}}>Interested in new markets for expansion? Please add country <label style={{color:"red"}}>*</label>
     <input type="text" placeholder="Type here or add country" className="form-control" /></label><br/>
 <frame2>
  <label> Preferred expansion modes<label style={{color:"red"}}>* </label></label>
     <label>
     <input type="checkbox"  id="checkbox" label="Set up an office"
      style={{width: "32px",top:"1340px",
      height: "32px" ,display: "inline-block",lineheight:"19px"}}/>
     <span>Set up an office</span>
      
      <input style={{width: "32px",height: "32px", marginTop:"-30px",lineheight:"19px",marginLeft:"280px"}} type="checkbox"  id="checkbox" label="Set up an office"/>
      <span style={{ marginLeft:"330px"}}>Others</span>
     </label>

      <label>
     <input type="checkbox"  id="checkbox" label="Hire a team"
      style={{width: "32px", height: "32px" ,display: "inline-block",lineheight:"19px",
      top:"1356px"}}/>&nbsp;&nbsp;
      <span > Hire a team</span>
      <span style={{marginLeft:"330px", marginTop:"-25px", width: "256px",
   height: "17px",fontfamily: 'Inter',fontstyle: "normal",fontweight: "400",fontsize: "14px",lineheight: "17px",
color:"#000000"}}> Please specify</span>
<input style={{boxsizing: "border-box", display: "flex",flexDirection: "row",
  alignItems: "center",padding: "16px",gap: "24px",width: "256px", height: "52px",marginLeft:"330px",marginTop:"5px",
  background: "#FFFFFF",border: "1px solid #EEEEEE",borderRadius: "5px", flex: "none",order: "1",
  alignself: "stretch",flexgrow: "0"}}></input></label>

      
<label>
     <input type="checkbox"  id="checkbox" label="Remember me"
      style={{width: "32px",height: "32px" ,display: "inline-block",lineheight:"19px",
    top:"1388px"}}/>&nbsp;&nbsp;
      <span>eCommerce</span></label>
      <label>
     <input type="checkbox"  id="checkbox" label="Remember me"
      style={{width: "32px",top:"1428px",
      height: "32px" ,display: "inline-block",lineheight:"19px"}}/>&nbsp;&nbsp;
      <span>venture partnership</span></label>  <Button onClick={Profile}>Save & Proceed </Button>
      </frame2>  
      <hr></hr>
      </frame> 
        </div>   
        </h1> 
      
        <style>
       {`
       div3 input{
        box-sizing: border-box;  display: flex;  flex-direction: row;
        align-items: center;  padding: 16px;  gap: 24px;  width: 319px;
        height: 52px;  background: #FFFFFF;  border: 1px solid rgba(71, 105, 249, 0.2);
        border-radius: 5px;  flex: none;  order: 1;  align-self: stretch;  flex-grow: 0;font-family: 'Inter',sans-serif;
        font-style: normal; font-weight: 500;  font-size: 16px;  line-height: 19px;  font-family: 'Inter';
        display: flex; align-items: center; color: rgba(0, 0, 0, 0.2); font-family: 'Inter'; font-style: normal; font-weight: 500;
        font-size: 16px; 
       }
       div{
        position:absolute;  width:1280px;  height:1800px;  left:0px;  top:0px;  overflow-y:scroll;
       }

       frame{
        display: flex;  flex-direction: column;  align-items: flex-start;  padding: 0px;
        gap: 40px;  position: absolute;  width: 662px;  height: 1800px;  left: 554px;  top: 76px;}

        frame1{
       display: flex;  flex-direction: column;  align-items: flex-start;  padding: 0px; gap: 16px;
       left:64px;  top: 76px;  width: 368px;  height: 80px;  flex: none;
       order: 1;  align-self: stretch;  flex-grow: 0;
       }
       div4{
        width: 400px;  height: 198px;  font-family: 'Inter', sans-serif;  font-style: normal;
        font-weight: 300;  font-size: 60px;  line-height: 110%;  letter-spacing: -0.02em;
     flex: none;  order: 1;  flex-grow: 0; margin-top:104px;
      }
      
      img{
        margin-left:-37px;
        margin-top:-50px;
      }
      link{
        width: 38px; height: 16px; font-family: 'Inter'; font-style: normal; font-weight: 500;
       font-size: 16px; line-height: 140%; display: flex; align-items: center; color: #4769F9;
       flex: none; order: 1; align-self: stretch; flex-grow: 0;
      }
       hr{
      width: 662px;  height: 0px;  opacity: 0.2;  border: 1px solid #4769F9; flex: none;
      order: 4;  align-self: stretch;  flex-grow: 0; margin-top:-1px;
      }
      span{
       width: 256px;  height: 32px;  margin-left:50px;  margin-top:-35px; font-family: 'Inter',sans-serif;
      font-style: normal;  font-weight: 500;  font-size: 16px;  line-height: 19px;  display: flex;
      align-items: center;  color: #2B353F;  flex: none; order: 0;  align-self: stretch;
      flex-grow: 1;
      }
     select{
      box-sizing: border-box;  display: flex;  flex-direction: row;  align-items: center;
      padding: 16px;  gap: 24px;  width: 331px;  height: 52px;  background: #FFFFFF;
      border: 1px solid rgba(71, 105, 249, 0.2);  border-radius: 5px;  flex: none;
      order: 1;   flex-grow: 0;
      }

    input{
      display: flex;  flex-direction: row;  align-items: center;  padding: 16px;  gap: 24px;
      width: 662px;  height: 52px;  background: #FFFFFF;  border: 1px solid rgba(71, 105, 249, 0.2);
      border-radius: 5px;  flex: none;  order: 1;  align-self: stretch;  flex-grow: 0;margin-top:"2px";
    }  
       a2{
        width: 400px;  height: 66px;  font-family: 'Inter',sans-serif;  font-style: normal;
        font-weight: 400;  font-size: 16px;  line-height: 140%;  color: #2B353F;
        flex: none;  order: 2;  align-self: stretch;  flex-grow: 0;margin-top:22px;
       }
       a3{
        width: 312px; height: 32px; font-family: 'Inter'; font-style: normal; font-weight: 600; 
        font-size: 18px; line-height: 120%; display: flex; align-items: center;  color: #7F79F9; flex: none; order: 1; align-self: stretch; flex-grow: 1;
      }  
       div1{
        width: 662px;  height: 20px;  font-family: 'Inter',sans-serif;  font-style: normal;
        font-weight: 400;  font-size: 14px;  line-height: 140%;  color: #516277;
        left:554px;  flex: none;  order: 0;  align-self: stretch;  flex-grow: 0; margin-top:-50px;
       }
       a1{
        width: 680px;  height: 29px;  font-family: 'Inter',sans-serif;  font-style: normal;
        font-weight: 600;  font-size: 24px;  line-height: 29px;  color: #000000;
        flex: none;  order: 0;  flex-grow: 0; margin-top:1px;
       }

       label{
        width: 332px;  height: 17px;  font-family: 'Inter',sans-serif;  font-style: normal;
        font-weight: 400;  font-size: 14px;  line-height: 17px;  color: #000000;
        flex: none;  order: 0;  flex-grow: 0;
       }
       Button{
        width: 107px;  height: 24px; font-family: 'Inter'; font-style: normal; font-weight: 700;
        font-size: 14px; line-height: 17px; display: flex; align-items: center; text-align: center;
        margin-top:85px; color: #FFFFFF; flex: none; order: 0; align-self: stretch; flex-grow: 0; float:right;
       }
      `}
       </style>
       </body>
    )
}
export default Profile