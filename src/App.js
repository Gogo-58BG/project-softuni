import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Details from './Components/Details/Details';
import Edit from './Components/Edit/Edit';
import Create from './Components/Create/Create';
import Delete from './Components/Delete/Delete';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Logout from'./Components/Logout/Logout';
import { getUserDataInLocalStorage } from './Services/localStorageService';

const App = () => {
  const [user, setUser] = useState(getUserDataInLocalStorage());

  console.log(user);

  return (
    <div className="App">
      <Header user={user}/>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/traxxas/details/:objectId" exact render={props => <Details {...props} logedInUser={user} />} />
        <Route path="/traxxas/details/:objectId/edit" component={Edit} />
        <Route path="/traxxas/create" component={Create} />
        <Route path="/traxxas/details/:objectId/delete" exact component={Delete} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" render={props => <Login {...props} setUser={setUser} />} />
        {/* <Route path="/logout" component={Logout} /> */}
        <Route path="/logout"  render={props => <Logout token={user.userToken} />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
