import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Admin from "./Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/admin" element={<Admin />} />
			<Route
				path="/github"
				component={() => {
					window.location.replace(
						"https://github.com/PRocha0503/Construccion-de-software.com"
					);
					return null;
				}}
			/>
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
