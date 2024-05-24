export function PillBox({ onChange, checked, labelT, labelF }) {
    return (
        <div className="pill-box" onClick={() => onChange(!checked)}>
            <div className={`pill ${checked ? 'checked' : ''}`}>
                <div className="indicator"></div>
            </div>
            {/* <span className="label">{checked ? labelT : labelF}</span> */}
        </div>
    )
}