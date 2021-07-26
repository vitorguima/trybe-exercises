import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SortNumbers from './SortNumbers';
import ToDoList from './ToDoList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SortNumbers} />
        <Route path="/todo" component={ToDoList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
