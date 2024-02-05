import "./App.css"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import InterviewsAll from "./pages/InterviewsAll"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/all" element={<InterviewsAll />} />
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
