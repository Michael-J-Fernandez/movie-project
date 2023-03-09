import { Outlet, NavLink } from 'react-router-dom'

export default function Layout() {


    return (
        <>
            <h1>This is my Layout Nav!</h1>
            <nav className="nav-bar">
                <NavLink to="">Home</NavLink>
                <NavLink to="">Movies</NavLink>
            </nav> 
            <Outlet />
        </>
    )
}