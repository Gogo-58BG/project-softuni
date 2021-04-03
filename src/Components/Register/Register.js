import { Link } from 'react-router-dom';

import * as traxxasServices from '../../Services/traxxasServices';


const Register = ({
    history,
}) => {

    const onSaveSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);

        let username = e.target.username.value;
        let password = e.target.password.value;  

        traxxasServices.register(username, password)
            .then(() => {
                history.push(`/`);
                return;
            });
    }

    return (
        <div className="container auth">
        <form onSubmit={onSaveSubmit}>
            <fieldset>
                <legend>Register</legend>
                <p className="field email">
                    <input type="text" id="username" name="username" placeholder="username"/>
                    <label htmlFor="email">Username:</label>
                </p>
                <p className="field password">
                    <input type="password" name="password" id="register-pass"/>
                    <label htmlFor="register-pass">Password:</label>
                </p>
                <p className="field password">
                    <input type="password" name="rep-pass" id="rep-pass"/>
                    <label for="rep-pass">Repeat password:</label>
                </p>
                <p className="field submit">
                    <button className="btn submit" type="submit">Register</button>
                </p>
                <p className="field">
                    <span>If you already have profile click <Link to="/login">here</Link></span>
                </p>
            </fieldset>
        </form>
    </div>
    );
}

export default Register;