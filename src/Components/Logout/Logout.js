import * as traxxasServices from '../../Services/traxxasServices';


const Logout = ({
    history,
    token
}) => {
        console.log(history)
       traxxasServices.logout(token)
        localStorage.clear();
        history.push(`/`);


    return<></>;
}

export default Logout;