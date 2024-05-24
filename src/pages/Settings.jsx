import { useNavigate } from "react-router-dom"
import { loggedUser } from "../services/info.service"
import { PillBox } from "../cmps/PillBox"
import { useState } from "react";
import { YesNoCheckbox } from "../cmps/YesNoCheckBox";

export function Settings() {
    const { settings } = loggedUser
    const { notifications } = settings

    const [isDarkTheme, setIsDarkTheme] = useState(settings.isDark)
    const [isPrivate, setIsPrivate] = useState(settings.privateAccount)
    const [followerEnabled, setFollowerEnabled] = useState(notifications.newFollower)
    const [commentsEnabled, setCommentsEnabled] = useState(notifications.newComment)
    const [likesEnabled, setLikesEnabled] = useState(notifications.newLike)
    const [sharesEnabled, setSharesEnabled] = useState(notifications.newShare)

    const handleThemeChange = (checked) => {
        setIsDarkTheme(checked)
        document.body.className = checked ? 'dark-theme' : 'light-theme'
    }

    const navigate = useNavigate()

    return (
        <section className='settings-page'>
            <button className="btn-back" onClick={() => navigate('/profile')}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1701785794/wednesday/bwudwrzkha2pdcy3ga7q.svg" alt="" />
            </button>
            <h2>Settings</h2>
            <section className="user-settings">
                <div className="setting-option">
                    <label>Theme: </label>
                    <PillBox checked={isDarkTheme} onChange={handleThemeChange} labelT={'Dark'} labelF={'Light'} />
                </div>
                <div className="setting-option">
                    <label>Private Account: </label>
                    <YesNoCheckbox onChange={setIsPrivate} checked={isPrivate} />
                </div>
                <div className="notification-settings">
                    <h3>Notification Settings</h3>
                    <div className="setting-option">
                        <label>Alert NewFollower:</label>
                        <YesNoCheckbox onChange={setFollowerEnabled} checked={followerEnabled} />
                    </div>
                    <div className="setting-option">
                        <label>Alert Comment:</label>
                        <YesNoCheckbox onChange={setCommentsEnabled} checked={commentsEnabled} />
                    </div>
                    <div className="setting-option">
                        <label>Alert like:</label>
                        <YesNoCheckbox onChange={setLikesEnabled} checked={likesEnabled} />
                    </div>
                    <div className="setting-option">
                        <label>Alert Share:</label>
                        <YesNoCheckbox onChange={setSharesEnabled} checked={sharesEnabled} />
                    </div>
                </div>
            </section>
        </section>
    )
}