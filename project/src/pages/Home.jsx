import React, { useEffect, useState } from 'react'
import './Home.css' ;
import Interview from '../Components/Interview'
const Home = () => {
  const [interviews, setInterviews]=useState([ {
    name: "Priyanshu",
    role: "Software developer",
    date: new Date(2024,1,5),
    time: "09:05",
},
{
  name: "Priyanshu2",
  role: "Software developer",
  date: new Date(2024,1,6),
  time: "09:05",
},
{
name: "Priyanshu3",
role: "Software developer",
date: new Date(2024,1,12),
time: "09:05",
}])
  useEffect(()=>{
    const url = "http://localhost:8000/api/interviews"
    fetch(url).then(res=>res.json()).then(res=>{
      if(!res.success){
        window.alert("Error in fetching interviews list")
      }else setInterviews(res.data)
    }).catch(e=>window.alert("Error in fetching details"))
  },[])

  return (
    <div className='parent'>
        <div className="title">
            <h3>Upcoming Interviews</h3>
            <h3 className='displayall'>See All &#10132;</h3>
        </div>
        <div className="today">
            <h3 className='heading-today'>Today</h3>
            {interviews.map(intv=>{
              if(intv.date.getDate()=== new Date(Date.now()).getDate() && intv.date.getMonth() === new Date(Date.now()).getMonth() && intv.date.getFullYear()===new Date(Date.now()).getFullYear())
                return (
                    <Interview data={intv}/>
                  )
            })}
        </div>
        <div className="tomorrow">
            <h3 className='heading-tomorrow'>Tomorrow</h3>
            {interviews.map(intv=>{
              if(intv.date.getDate()=== new Date(Date.now()).getDate()+1 && intv.date.getMonth() === new Date(Date.now()).getMonth() && intv.date.getFullYear()===new Date(Date.now()).getFullYear())
                return (
                    <Interview data={intv}/>
                  )
            })}
        </div>
        <div className="other-dates">
            <h3 className='heading-other'>Other Dates</h3>
            {interviews.map(intv=>{
              if(intv.date.getDate()> new Date(Date.now()).getDate()+1 && intv.date.getMonth() === new Date(Date.now()).getMonth() && intv.date.getFullYear()===new Date(Date.now()).getFullYear())
                return (
                    <Interview data={intv}/>
                  )
            })}
        </div>
      
    </div>
  )
}

export default Home

