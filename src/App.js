import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Clock_cl from './clock_cl';
import Clock_fn from './clock_fn';
import Counter from './counter';
import Foot from './footer';
import Header from './header';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />    
        <Switch>
          <Route exact path='/' component={Counter} />
          <Route exact path='/class' component={Clock_cl} />
          <Route exact path='/func' component={Clock_fn} />
        </Switch>
      </BrowserRouter>
      <Foot/>




    </div>
  );
}

export default App;
