import { useNavigate } from 'react-router-dom'
import { userMsgs } from '../services/info.service'

export function Notifications({ selected, setSelected }) {
    const navigate = useNavigate()

    return (
        <section className="notifications-page">
            <button className="btn-back" onClick={() => navigate('/')}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1701785794/wednesday/bwudwrzkha2pdcy3ga7q.svg" alt="" />
            </button>
            <div className='top'>
                <h3>Notifications</h3>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716307162/icons/kord/bell_sc1whj.png" alt="bell-icon" />
            </div>
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