import { Link } from 'react-router-dom';

import * as traxxasServices from '../../Services/traxxasServices';


const Login = ({
    history,
}) => {

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

    return (
        <div className="container auth">
        <form onSubmit={onSaveSubmit}>
            <fieldset>
                <legend>Login</legend>
                <p class="field email">
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