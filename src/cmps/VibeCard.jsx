import { useNavigate } from "react-router-dom"

export function VibeCard({ vibe }) {
    const navigate = useNavigate()

    return (
        <section className="vibe-card" onClick={() => navigate(`/vibe/${vibe}`)} >
            <span>{vibe}</span>
        </section>
    )
}