import React from "react"
import "./App.sass"
import {Layout} from "antd"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Home} from "./pages/Home"


function App() {
	return (
		<div className="page">
			<Layout>
				<Header/>
				<Router>
					<Header/>
					<Layout>
						<Routes>
							<Route exact path="/" element={<Home/>}/>
						</Routes>
					</Layout>
				</Router>
				<Footer/>
			</Layout>
		</div>
	)
}

export default App
