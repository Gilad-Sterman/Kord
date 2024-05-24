export function PlayingPreview({ track }) {
    const { title, duration, thumbnailUrl, user } = track
    const seconds = duration % 60
    const time = `${Math.floor(duration / 60)}:${(seconds < 10) ? `0${seconds}` : seconds}`
    return (
        <section className="playing-preview" >
            <img src={`${thumbnailUrl ? thumbnailUrl : 'https://res.cloudinary.com/dollaguij/image/upload/v1699199706/no-img-new-playlist_r07sfz.png'}`} alt="" className="track-img" />
            <div className="info">
                <span className="bold">{title}</span>
                <span className="username">{user.username}</span>
            </div>
        </section>
    )
}