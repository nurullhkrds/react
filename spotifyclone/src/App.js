import "./App.css";
import Sidebar from "components/Sidebar";
import Content from "components/Content";
import Footer from "components/Footer";

function App() {
  return (
    <>
        <div className="wrapper">
          <Sidebar />
          <Content />
        </div>
       
          <Footer  />
       
    </>
  );
}

export default App;
