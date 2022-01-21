import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
// import {ToastContainer} from "material-react-toastify";
// import 'material-react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {ContextProvider} from "./context"
export default function App() {
	return (
		<div>
			<ToastContainer />
			<Header />
			<ContextProvider>
				<Shop />
			</ContextProvider>
			<Footer />
		</div>
	);
}
