import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import Interview from "../Components/Interview"
const Home = () => {
	const [interviews, setInterviews] = useState({
		today: [],
		tomorrow: [],
		others: [],
	})
	useEffect(() => {
		const url = "http://localhost:8080/api/interviews/upcoming"
		fetch(url)
			.then(res => res.json())
			.then(res => {
				const today = [],
					tomorrow = [],
					others = []
				res.forEach(r => {
					r.date = new Date(r.date)
					const t2 = new Date(
						new Date().getTime() + 24 * 60 * 60 * 1000
					)
					if (
						r.date.getDate() === new Date(Date.now()).getDate() &&
						r.date.getMonth() === new Date(Date.now()).getMonth() &&
						r.date.getFullYear() ===
							new Date(Date.now()).getFullYear()
					) {
						today.push(r)
					} else if (
						r.date.getDate() === t2.getDate() &&
						r.date.getMonth() === t2.getMonth() &&
						r.date.getFullYear() === t2.getFullYear()
					) {
						tomorrow.push(r)
					} else {
						others.push(r)
					}
				})
				setInterviews({
					today: today,
					tomorrow: tomorrow,
					others: others,
				})
			})
			.catch(e => window.alert("Error in fetching details"))
	}, [])

	return (
		<div className="parent">
			<div className="title">
				<h3>Upcoming Interviews</h3>
				<Link to="/all" className="displayall">
					See All &#10132;
				</Link>
			</div>
			<div className="today">
				<h3 className="heading-today">Today</h3>
				{interviews.today.map(intv => (
					<Interview key={intv.id} data={intv} />
				))}
			</div>
			<div className="tomorrow">
				<h3 className="heading-tomorrow">Tomorrow</h3>
				{interviews.tomorrow.map(intv => (
					<Interview key={intv.id} data={intv} />
				))}
			</div>
			<div className="other-dates">
				<h3 className="heading-other">Other Dates</h3>
				{interviews.others.map(intv => (
					<Interview key={intv.id} data={intv} />
				))}
			</div>
		</div>
	)
}

export default Home
