import Container from "./components/Container";
import { WeatherProvider } from "./contex/WeatherContex";


function App() {
  return (
    <div>
      <WeatherProvider>
      <Container/>
      </WeatherProvider>
    </div>
  
  );
}

export default App;
