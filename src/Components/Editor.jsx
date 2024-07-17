import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt , faExpandAlt } from '@fortawesome/free-solid-svg-icons'

const Editor = (props) => {
    const [open ,setOpen]= useState(true)
    const{
        language ,
        displayName,
        onChange,
        value
    }= props
    const handleChange =(editor , data , value)=>{
        onChange(value)
    }
  return (
    <div className={` editor-container flex grow basis-0 flex-col p-[0.5rem] bg-[#443E00] rounded-[0.5rem] ${open ? '' : ' grow-0'}`}>
      <div className="editor-title flex justify-between bg-black text-white p-[0.5rem] rounded-[0.5rem] ">
        {displayName}
        <button onClick={()=> setOpen(prevOpen => !prevOpen)} className=' ml-[0.5rem] text-white'>
        <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
        </div>
        <ControlledEditor onBeforeChange={handleChange} 
            value={value}
            className=' grow rounded-[0.5rem] overflow-hidden'
            options={{
                lineWrapping:true ,
                lint:true,
                mode:language,
                lineNumbers:true ,
                theme: "material" ,
            }}
        />
      
    </div>
  )
}

export default Editor