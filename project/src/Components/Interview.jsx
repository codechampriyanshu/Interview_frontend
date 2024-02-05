import React from 'react'
import './Interview.css'
const Interview = ({data}) => {
  return (
    <div className='main'>
        <div className="sub-main">
            <p className='sub-title'>{data.name}</p>
            <p className='sub-title2'>{data.role}</p>
        </div>
        <div className="sub-main2">
            <div>
                <p className='sub-title2'>{data.time}</p>
                <p className='sub-history'>View History</p>
            </div>
          
            <button className='join'>Join Now</button>
            
        </div>  
    </div>
  )
}

export default Interview
