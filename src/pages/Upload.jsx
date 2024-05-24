import { useState } from "react"
import { trackService } from "../services/track.service"
import { ErrMsg } from "../cmps/ErrMsg"
import { useNavigate } from "react-router-dom"


export function Upload() {
    const [selected, setSelcted] = useState('')
    const [errMsg, setErrMsg] = useState(null)
    const [productMap, setProductMap] = useState(trackService.getDeTrackToAdd())
    const navigate = useNavigate()

    function setField({ target }) {
        const field = target.name
        const value = target.value
        productMap[field] = (field === 'Cost' || field === 'Price' || field === 'USDPrice' || field === 'Inventory') ? +value : value
        const newProductMap = JSON.parse(JSON.stringify(productMap))
        setProductMap(newProductMap)
    }

    async function onSubmit(ev) {
        ev.preventDefault()
        return
    }

    return (
        <section className='upload-page' >
            <button className="btn-back" onClick={() => navigate('/create')}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1701785794/wednesday/bwudwrzkha2pdcy3ga7q.svg" alt="" />
            </button>
            <h2>Upload Your track</h2>
            <form className="upload-form" onSubmit={onSubmit}>
                <div className="form-input">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" placeholder="Title" />
                </div>
                <div className="form-input">
                    <label htmlFor="description">Description</label>
                    <textarea placeholder="Description" name="description" id="description"></textarea>
                </div>
                <div className="form-input">
                    <label htmlFor="tags">Tags:</label>
                    <input type="text" name="tags" id="tags" placeholder="Enter related tags - separate with ','" />
                </div>
            </form>
            <button className="upload-btn" onClick={(ev) => onSubmit(ev)}>Upload</button>
            {errMsg && <ErrMsg errMsg={errMsg} setErrMsg={setErrMsg} />}
        </section>
    )
}