import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <h1><a className="home" href="/">Traxxas</a></h1>
        <nav className="nav-buttons">
            <Link to={`/traxxas/create`}>Create</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            {/* {% if user.is_authenticated %}
            <a href="{% url 'sign out' %}">Logout</a>
            {% else %}
            <a href="{% url 'sign up' %}">Register</a>
            {% endif %} */}
        </nav>
</header>
    );
}

export default Header;