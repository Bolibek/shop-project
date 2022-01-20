import React from 'react';
import Header from './components/Header';
import Footer from "./components/Footer";
import Shop  from "./components/Shop";
import {ToastContainer} from "material-react-toastify";
import 'material-react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Shop />
      <Footer />
    </div>
  )
}


