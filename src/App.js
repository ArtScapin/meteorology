import "./App.css";
import NavBar from "./components/layout/NavBar";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
