import "./App.css";
import NavBar from "./components/layout/NavBar";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
