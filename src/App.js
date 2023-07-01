import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Pages/Home';
import ContextApi from './Components/ContextApi/ContextApi';
import UseReducer from './Components/UseReducer';
import { Button } from '@mui/material';

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Button onClick={()=>history.push('/')} variant='contained'>HOME</Button>
 <Switch>
  <Route exact path="/">
<Home />

  </Route>
  <Route path='/context'>
    <ContextApi />
  </Route>
  <Route path='/usereducer'>
    <UseReducer />
  </Route>
 </Switch>
    </div>
  );
}

export default App;
