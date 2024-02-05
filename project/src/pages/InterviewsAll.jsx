import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import Interview from "../Components/Interview"
const InterviewsAll = () => {
	const [interviews, setInterviews] = useState([])
	useEffect(() => {
		const url = "http://localhost:8080/api/interviews/upcoming"
		fetch(url)
			.then(res => res.json())
			.then(res => {
				res.forEach(r => {
					r.date = new Date(r.date)
				})
				setInterviews(res)
			})
			.catch(e => window.alert("Error in fetching details"))
	}, [])

	return (
		<div className="parent">
			<div className="title">
				<h3>Upcoming Interviews</h3>
				<Link to="/" className="displayall">
					Back to Home
				</Link>
			</div>
			<div className="other-dates">
				<h3 className="heading-other">All Interviews</h3>
				{interviews.map(intv => (
					<Interview key={intv.id} data={intv} />
				))}
			</div>
		</div>
	)
}

export default InterviewsAll
