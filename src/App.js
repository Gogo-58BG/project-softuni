import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Details from './Components/Details/Details'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/traxxas/details/:objectId" exact component={Details} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
