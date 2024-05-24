import { useSelector } from "react-redux"

export function Loader() {
    const isPlaying = useSelector(storeState => storeState.playerModule.isPlaying)

    return (
        <section className={`${isPlaying ? 'loader' : 'loader-static'}`} >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </section>
    )
}