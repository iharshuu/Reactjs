import React, { useState } from 'react'
import "./Slider.scss"
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const Slider = () => {
  

    const [current,setCurrent] = useState(0)
    const data=[
"https://images.unsplash.com/photo-1594849076838-bcbb6207c295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        ,"https://images.unsplash.com/photo-1465172018141-c4e4fa823289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
"https://images.unsplash.com/photo-1527016021513-b09758b777bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw0MTUxNTEyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
];

const prevslide=()=>{
    setCurrent(current===0 ? 2 : (prev)=>prev-1)
}
const nextslide = ()=>{
    setCurrent(current===2? 0 : (prev)=>prev+1)
}


  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${current *100}vw)`}}>
            <img src={data[0]} alt=""/>
            <img src={data[1]} alt=""/>
           <img src={data[2]} alt=""/>
        </div>
        <div className="icons">
            <div className="icon" onClick={prevslide}>
                <WestIcon/>
            </div>
            <div className="icon" onClick={nextslide}>
                <EastIcon/>
            </div>
        </div>


    </div>
  )
}

export default Slider