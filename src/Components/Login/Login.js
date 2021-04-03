import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import * as traxxasServices from '../../Services/traxxasServices';


const Login = ({
    setToken, 
    history,
}) => {
    const [user, setUser] = useState();

    const onSaveSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);

        let username = e.target.username.value;
        let password = e.target.password.value;  

        traxxasServices.login(username, password)
            .then(() => {
                
                history.push(`/`);
                return;
            });
    }

//     const user = traxxasServices.login(username, password)
//     .then(() => {
//         setUser(user);
//         history.push(`/`);
//     });

// return (user);
// }

    return (
        <div className="container auth">
        <form onSubmit={onSaveSubmit}>
            <fieldset>
                <legend>Login</legend>
                <p className="field email">
                    <input type="text" id="username" name="username" placeholder="username"/>
                    <label htmlFor="username">Username:</label>
                </p>
                <p className="field password">
                    <input type="password" id="login-pass" name="password"/>
                    <label htmlFor="login-pass">Password:</label>
                </p>
                <p className="field submit">
                    <button className="btn submit" type="submit">Log In</button>
                </p>
                <p class="field">
                    <span>If you don't have profile click <Link to="/register">here</Link></span>
                </p>
            </fieldset>
        </form>
    </div>
    );
}

export default Login;