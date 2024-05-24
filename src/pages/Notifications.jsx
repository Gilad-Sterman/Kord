import { useNavigate } from 'react-router-dom'
import { userMsgs } from '../services/info.service'

export function Notifications({ selected, setSelected }) {
    const navigate = useNavigate()

    return (
        <section className="notifications-page">
            <button className="btn-back" onClick={() => navigate('/')}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1701785794/wednesday/bwudwrzkha2pdcy3ga7q.svg" alt="" />
            </button>
            <h3>Notifications</h3>
            <ul className="inbox">
                {userMsgs.map(msg =>
                    <li key={msg._id} className={msg.isRead ? 'read' : 'unread'}>
                        <h4>{msg.title}</h4>
                        <p>{msg.content}</p>
                    </li>
                )}
            </ul>
        </section>
    )
}