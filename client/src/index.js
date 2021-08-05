// where will connect our application to the index.html file
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
// connects do <div> with 'root' id
ReactDOM.render(<App />, document.getElementById("root"))
