
import './App.css';
import Header from "./Component/DefaultLayout/Header/Header.jsx";
import Footer from "./Component/DefaultLayout/Footer/Footer.jsx";
import Container from "./Component/Container/Pages/MainPage/MainPage.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
