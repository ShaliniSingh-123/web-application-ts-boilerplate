import * as React from 'react';
import {useState} from 'react';
import "app/pages/style.css";

export default function App(){
    const[tagValue, setTagValue]=useState("");
    const[tags, setTags]=useState([]);

    const addTags=(e)=>{
        if(e.keyCode === 13 && tagValue){
            setTags([...tags,tagValue]);
            setTagValue(" ");
        }
    };

    const deleteTag=(val)=>{
       let remainTags=tags.filter((t) => t !== val);
            setTags(remainTags);
            
    };
return(
    <div className="main">
        <div className="content">
            <div className="tagInput">
        
                {tags.map((item, index)=>{
                    return (
                    <button onClick={() => deleteTag(item)} key={index}>{item}
                    <span>X</span>
                    </button>
                    );
                })}
                <input type="text" placeholder="type and enter"
                value={tagValue}
                 onChange={(e)=>setTagValue(e.target.value)}
                 onKeyDown={addTags}
                 />
            </div>
        </div>
    </div>
);
}



