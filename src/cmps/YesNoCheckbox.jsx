export function YesNoCheckbox({ onChange, checked, label }) {
    return (
        <div className="square-checkbox-container" onClick={() => onChange(!checked)}>
            <div className={`square-checkbox ${checked ? 'checked' : ''}`}>
                {checked && <div className="checkmark">✔</div>}
            </div>
        </div>
    )
}