import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Container } from "@material-ui/core"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
	return (
		<Container maxWidth='lg'>
			<Navbar />
		</Container>
	)
}

export default App
