import { useState } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { Loader } from "./Loader"
import { loggedUser, userMsgs } from "../services/info.service"
export function AppHeader() {
    // const loggedUser = loggedUser
    const msgCount = userMsgs.filter((msg) => !msg.isRead).length
    const navigate = useNavigate()

    const location = useLocation();

    const goToSettings = () => {
        navigate('/settings');
    };

    const markAllAsRead = () => {
        // Logic to mark all notifications as read
    };

    return (
        <header className={`app-header ${location.pathname === '/login' ? 'hiden' : location.pathname === '/signup' ? 'hiden' : ''}`}>
            {location.pathname === '/profile' ? (
                <>
                    <NavLink to={'/settings'} className="settings-icon">
                        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1701785797/wednesday/k0yjfjexizenpnsjdbge.svg" alt="user-img" />
                    </NavLink>
                    <NavLink to={'/notifications'} className="notifications">
                        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716307162/icons/kord/bell_sc1whj.png" alt="user-img" />
                        <div className="notification-count">{msgCount}</div>
                    </NavLink>
                </>
            ) : location.pathname === '/notifications' ? (
                <>
                    <NavLink to={'/profile'} className="uesr-preview">
                        <img src={loggedUser.profilePicUrl} alt="user-img" />
                    </NavLink>
                    <button onClick={markAllAsRead} className="mark-read-icon">
                        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194254/svg/checked_paj0fg.svg" alt="mark-as-read" />
                    </button>
                </>
            ) : (
                <>
                    <NavLink to={'/profile'} className="uesr-preview">
                        <img src={loggedUser.profilePicUrl} alt="user-img" />
                    </NavLink>
                    <NavLink to={'/notifications'} className="notifications">
                        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716307162/icons/kord/bell_sc1whj.png" alt="user-img" />
                        <div className="notification-count">{msgCount}</div>
                    </NavLink>
                </>
            )}
        </header>
    )
} 