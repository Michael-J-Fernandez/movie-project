import { Outlet, NavLink } from 'react-router-dom'

export default function Layout() {


    return (
        <>
            <nav className="nav-bar">
                <NavLink 
                    to="/"
                    className={({isActive}) => isActive ? "link active-link" : "link"}
                >Home</NavLink>

                <NavLink 
                    to="movies"
                    className={({isActive}) => isActive ? "link active-link" : "link"}
                >Movies</NavLink>

            </nav> 
            <Outlet />
        </>
    )
}