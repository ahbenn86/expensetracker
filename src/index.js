import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Render whatever is in the div #root to the document object in the DOM and replace whatever is there with
//the code that's inside of the App module.

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
