import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
