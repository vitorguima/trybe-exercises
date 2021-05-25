import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const mapTask = (array) => {
  return array.map((element) => Task(element));
}

function App() {
  const tasksList = ['estudar', 'trabalhar', 'correr', 'malhar', 'comer', 'estudar'];
  return (
    <div>
      {mapTask(tasksList)}
    </div>
  );
}

export default App;
