import './App.css';
import { useState } from 'react';
import Header from "./Component/DefaultLayout/Header/Header.jsx";
import Footer from "./Component/DefaultLayout/Footer/Footer.jsx";
import Container from "./Component/Container/Container.jsx";
import Cart from './Component/DefaultLayout/Header/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [showModal,setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
  return (
    <div className="App">
      <Header openModal={openModal}></Header>
      <Container></Container>
      <Footer></Footer>
      {showModal && <Cart show={showModal} onClose={closeModal}></Cart>}
      {/* <Cart show={showModal} onClose={closeModal}></Cart> */}
    </div>
  );
}

export default App;
