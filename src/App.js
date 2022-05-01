import Shop from "./components/Shop"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartContextProvider } from "./config/context";
import './App.css';

function App() {
  return (
    <div >
      <Header />
      <CartContextProvider>
        <Shop />
      </CartContextProvider>
      <Footer />
    </div>
  );
}

export default App;
