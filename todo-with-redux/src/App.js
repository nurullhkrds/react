import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ItemNote from "./components/ItemNote";

function App() {
  return (
    <div className="App">
      <div className="componentsDiv">
        <Header />
      
          <div className="container">
            <div className="row">
              <div className="col-sm-3"> <InputForm /></div>
              <div className="col-sm-9"><ItemNote /></div>
            </div>
           
          </div>
         
          
       
      </div>
    </div>
  );
}

export default App;
