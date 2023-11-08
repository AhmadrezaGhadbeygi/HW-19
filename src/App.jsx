import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Modalinfo from "./componets/Modalinfo/Modalinfo";
import ModalFinish from "./componets/ModalFinish/ModalFinish";
import ModalProduct from "./componets/ModalProduct/ModalProduct";

function App() {
  return (
    <div>
{/* <Modalinfo></Modalinfo> */}
      {/* <Header></Header> */}
      {/* <Footer></Footer> */}
      {/* <ModalFinish></ModalFinish> */}
      <ModalProduct></ModalProduct>

    </div>
  );
}

export default App;
