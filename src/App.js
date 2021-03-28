import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Details from './Components/Details/Details';
import Edit from './Components/Edit/Edit';
import Create from './Components/Create/Create';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/traxxas/details/:objectId" exact component={Details} />
      <Route path="/traxxas/details/:objectId/edit" component={Edit} />
      <Route path="/traxxas/create" component={Create} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
