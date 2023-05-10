import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h3>RB-Materiales</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/obraGruesa`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Obra Gruesa</NavLink>
                <NavLink to={`/category/terminaciones`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Terminaciones</NavLink>
                <NavLink to={`/category/herramientas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Herramientas</NavLink>
                </div>
            <CartWidget />
        </nav>
    )
}