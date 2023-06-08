import './App.css';
import {useEffect,useContext} from 'react';
import TasksContext from './context/Tasks';
import CreateForm from './components/CreateForm';
import ValueList from './components/ValueList';

function App() {
  const { fetchValue }=useContext(TasksContext);

useEffect(()=>{
  fetchValue();
},[]);

  return (
    <div className="App">
      <h1>Lütfen task ekleyin !</h1>
      <CreateForm />
      <h1>GÖREVLER</h1>

      <ValueList />
    </div>
   
  );
}

export default App;
