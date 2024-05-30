import { useNavigate } from "react-router-dom"
import { loggedUser } from "../services/info.service"

export function Profile({ selected, setSelected }) {
    const navigate = useNavigate()

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60)
        const sec = seconds % 60
        const secs = sec >= 10 ? sec : `0${sec}`

        return `${minutes}:${secs}`
    }

    return (
        <section className="profile-page">
            <button className="btn-back" onClick={() => navigate('/')}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1701785794/wednesday/bwudwrzkha2pdcy3ga7q.svg" alt="" />
            </button>
            <div className="user-info">
                <img src={loggedUser.profilePicUrl} alt="user-pic" className="profile-img" />
                <div className="user-details">
                    <h3>{loggedUser.username}</h3>
                    <p>{loggedUser.bio}</p>
                </div>
            </div>
            <div className="followers-following">
                <div>Followers: {loggedUser.followers}</div>
                <div>Following: {loggedUser.following} </div>
            </div>
            <h4>My Clips</h4>
            <ul className="user-clips">
                {loggedUser.createdTracks.map(track =>
                    <li className="my-track" key={track._id}>
                        <span>{track.title}</span>
                        <span>{formatTime(track.duration)}</span>
                    </li>)}
            </ul>
        </section>
    )
}