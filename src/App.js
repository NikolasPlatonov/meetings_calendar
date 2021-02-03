import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Calendar } from './components/Calendar';
import { NewEvent } from './components/NewEvent';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Calendar />} />
        <Route path="/create-event" render={() => <NewEvent />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
