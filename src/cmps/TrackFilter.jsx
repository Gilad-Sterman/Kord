import { useState } from "react"

export function TrackFilter({ filterBy, setFilterBy }) {
    const [showSort, setShowSort] = useState(false)
    const { txt, sortBy } = filterBy

    function setSort(val) {
        setShowSort(false)
        filterBy.sortBy = val
        const newFilter = JSON.parse(JSON.stringify(filterBy))
        setFilterBy(newFilter)
    }

    function setSearch({ target }) {
        const val = target.value
        filterBy.txt = val
        const newFilter = JSON.parse(JSON.stringify(filterBy))
        setFilterBy(newFilter)
    }

    return (
        <section className="track-filter" >
            <div className="search">
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194280/svg/search_icsjot.svg" alt="" />
                <input type="text" placeholder="Search" value={txt} onInput={setSearch} />
            </div>
            <div className="sort-btn" onClick={() => setShowSort(!showSort)}>
                <span>{(sortBy === 'title' ? 'Title' : (sortBy === 'tempo') ? 'Tempo' : 'Time')}</span>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1701782110/asset_13_dgdksa.svg" alt="" className={(showSort) ? 'close' : 'open'} />
            </div>
            {showSort && <div className="sort-options">
                <div className="sort-option" onClick={() => setSort('title')}>
                    <span>Title</span>
                    {(sortBy === 'title') && <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194254/svg/checked_paj0fg.svg" alt="" />}
                </div>
                <div className="sort-option" onClick={() => setSort('tempo')}>
                    <span>Tempo</span>
                    {(sortBy === 'tempo') && <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194254/svg/checked_paj0fg.svg" alt="" />}
                </div>
                <div className="sort-option" onClick={() => setSort('duration')}>
                    <span>Time</span>
                    {(sortBy === 'time') && <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194254/svg/checked_paj0fg.svg" alt="" />}
                </div>
            </div>}
        </section>
    )
}