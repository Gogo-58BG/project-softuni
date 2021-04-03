import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = (logedInUser=[]) => {
    let user = logedInUser.user
    console.log(user);
    let isAuthorized = Boolean(user);
    console.log(isAuthorized);
    
    return (
        <header>
            <h1><Link className="home" to="/">Traxxas</Link></h1>
            <nav className="nav-buttons">
                {isAuthorized
                ? <div><Link to={`/traxxas/create`}>Create</Link>
                    <Link to={`/logout`}>Logout</Link>
                    </div>
                : <div>
                <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    </div>}
            </nav>
        </header>
    );
}

export default Header;