import { useEffect, useState } from "react"
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom"
import { Loader } from "./Loader"

export function AppFooter() {
    const loggedUser = true
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <footer className={`app-footer ${location.pathname === '/login' ? 'hiden' : location.pathname === '/signup' ? 'hiden' : ''}`}>
            <nav>
                <NavLink to={'/'} className="go-home">
                    <img src={location.pathname === '/' ? `https://res.cloudinary.com/dollaguij/image/upload/v1699194283/svg/selected-home_sdspes.svg` : `https://res.cloudinary.com/dollaguij/image/upload/v1699194264/svg/home_l4p7sr.svg`} alt="home-icon" />
                </NavLink>
                {location.pathname !== '/create' && <NavLink to={'/create'} className="go-create">
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1701782111/asset_14_sjxee5.svg" alt="create-icon" />
                </NavLink>}
                <NavLink to={'/search'} className="go-search">
                    <img src={location.pathname === '/search' ? `https://res.cloudinary.com/dollaguij/image/upload/v1699194284/svg/selected-search_t3upeo.svg` : `https://res.cloudinary.com/dollaguij/image/upload/v1699194280/svg/search_icsjot.svg`} alt="search-icon" />
                </NavLink>
            </nav>
        </footer>
    )
} 