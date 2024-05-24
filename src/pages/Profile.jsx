import { useNavigate } from "react-router-dom"
import { loggedUser } from "../services/info.service"

export function Profile({ selected, setSelected }) {
    const navigate = useNavigate()

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
                    <li className="my-tracks" key={track._id}>
                        <span>{track.title}</span>
                    </li>)}
            </ul>
        </section>
    )
}