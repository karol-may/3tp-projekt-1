import { NavLink } from "react-router";

export const NavBar = () => 
    <nav className='container'>
        <ul className='nav'>
            <li className='nav-item'>
                <NavLink className='nav-link' to="/">Strona główna</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className='nav-link' to="/user">Użytkownicy</NavLink>
            </li>
        </ul>
    </nav>