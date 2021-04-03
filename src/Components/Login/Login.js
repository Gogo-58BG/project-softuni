import { Link } from 'react-router-dom';
import { setUserDataInLocalStorage } from '../../Services/localStorageService';
import * as traxxasServices from '../../Services/traxxasServices';

const Login = ({
    setUser,
    history,
}) => {
    const onSaveSubmit = async e => {
        e.preventDefault();

        let username = e.target.username.value;
        let password = e.target.password.value;

        const loginUserObject = await traxxasServices.login(username, password)
        const userData = {
            username: loginUserObject.username,
            objectId: loginUserObject.objectId,
            userToken: loginUserObject['user-token'],
        };

        // save in local storage
        setUserDataInLocalStorage(userData);
        // save in app 
        setUser(userData);

        history.push(`/`);
    };

    return (
        <div className="container auth">
            <form onSubmit={onSaveSubmit}>
                <fieldset>
                    <legend>Login</legend>
                    <p className="field email">
                        <input type="text" id="username" name="username" placeholder="username" />
                        <label htmlFor="username">Username:</label>
                    </p>
                    <p className="field password">
                        <input type="password" id="login-pass" name="password" />
                        <label htmlFor="login-pass">Password:</label>
                    </p>
                    <p className="field submit">
                        <button className="btn submit" type="submit">Log In</button>
                    </p>
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </fieldset>
            </form>
        </div>
    );
}

export default Login;
