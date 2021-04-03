import * as traxxasServices from '../../Services/traxxasServices';
import { useHistory } from "react-router-dom";

const Logout = ({
    history,
    token
}) => {
        traxxasServices.logout(token)
        .then(() => {
            localStorage.clear();
            history.push(`/`);
            console.log(history)
        });

    return;
}

export default Logout;