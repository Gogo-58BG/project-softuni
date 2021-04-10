import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as traxxasServices from '../../Services/traxxasServices';
import ValidationError from '../../Common/ValidationError';


const Register = ({
    history,
}) => {

    const [errorMessage, setErrorMessage] = useState('');

    const onSaveSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.password.value);
        console.log(e.target.repPass.value);

        let username = e.target.username.value;
        let password = e.target.password.value;
        let repPassword = e.target.repPass.value;

        if (password != repPassword) {
            setErrorMessage('Password do not match!');
        } else {
            setErrorMessage('');
            if (e.target.username.value.length  < 5) {
                setErrorMessage('Username should be at least 5 symbols!');
            } else {
                setErrorMessage('');
                traxxasServices.register(username, password)
                    .then(() => {
                        history.push(`/`);
                        return;
                    });
            }
        }
    };



    return (
        <div className="container auth">
            <form onSubmit={onSaveSubmit}>
                <fieldset>
                    <legend>Register</legend>
                    <p className="field email">
                        <input type="text" id="username" name="username" placeholder="username" />
                        <label htmlFor="username">Username:</label>
                    </p>
                    <p className="field password">
                        <input type="password" name="password" id="register-pass" />
                        <label htmlFor="register-pass">Password:</label>
                    </p>
                    <p className="field password">
                        <input type="password" name="repPass" id="rep-pass" />
                        <label for="rep-pass">Repeat password:</label>
                    </p>
                    <ValidationError>{errorMessage}</ValidationError>
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