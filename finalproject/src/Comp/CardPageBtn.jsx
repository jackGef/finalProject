import React, { useState } from 'react'

const CardPageBtn = () => {

    const [AdultsBtn, setAdultsBtn] = useState(5) 

  return (
    <div className='flex '>
        <button className='px-[10px] bg-blue-500 rounded-[12px] text-[17px]' onClick={()=>{if(AdultsBtn > 0){setAdultsBtn( AdultsBtn - 1)}}}>-</button>
        <h3 className='text-gray-400 mx-[8px]'> <span className='text-[20px]'>{AdultsBtn}</span> </h3>
        <button className='px-[10px] bg-blue-500 rounded-[12px] text-[17px]' onClick={()=>{setAdultsBtn( AdultsBtn + 1)}}>+</button>
        
    </div>
  )
}

export default CardPageBtn