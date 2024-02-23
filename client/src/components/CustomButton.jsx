import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({type,title,customStyles,handleClick}) => {

  const snap=useSnapshot(state);
    const generateStyle=(type)=>{
        if(type=== 'filled'){
            return{
                backgroundColor:snap.btncolor,
                color:getContrastingColor(snap.btncolor)
            }
        }else if(type=== "outline"){
          return{
            borderWidth:`1px`,
            borderColor: snap.btncolor,
            color:snap.btncolor
          }
        }
    }
  
  
    return (
    <button className= {`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    onClick={handleClick}
    >
        {title}
    </button>
  )
}


export default CustomButton