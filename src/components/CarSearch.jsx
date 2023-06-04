import { useSelector, useDispatch } from 'react-redux'
import { changeSearchTerm } from '../store';

const CarSearch = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.cars.searchTerm)

    const handleSearchTermChange = event => dispatch(changeSearchTerm(event.target.value))
    return (
        <div className="list-header">
            <h3 className="is-3 title">My Cars</h3>
            <div className="field is-horizontal search">
                <label className="label">Search</label>
                <input className='input' onChange={handleSearchTermChange} value={searchTerm} />
            </div>

        </div>
    );
}

export default CarSearch;