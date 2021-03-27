import style from './Header.module.css';

const Header = () => {
    return (
        <header>
        <h1><a className="home" href="/">Traxxas</a></h1>
        <nav className="nav-buttons">
            <a href="#">Create</a>
            <a href="#">Register</a>
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