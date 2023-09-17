import logo from "./logo.svg";
import "./App.css";
import Paragraf from "./components/Paragraf";
import Input from "./components/Input";
import Time from "./components/Time";
import Result from "./components/Result";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const time = useSelector((state) => state.speed.time);

  return (
    <div className="App">
      <section
        className="sectionHeader"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <Header />
      </section>
      <section>
        <Paragraf />
      </section>
      <section>
        <div className="timeInput">
          <div className="divInput" style={{ width: "1500px" }}>
            <Input />
          </div>
          <div className="divTime">
            <Time />
          </div>
        </div>
      </section>
      {time === 0 && (
        <section style={{ marginBottom: "5px" }}>
          <Result />
        </section>
      )}

      <section className="footerSection">
        <Footer />
      </section>
    </div>
  );
}

export default App;
