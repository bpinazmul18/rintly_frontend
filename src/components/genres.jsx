const Genres = (props) => {
    const { selectedItem, genres, textProperty, valueProperty, onHandleGenre } = props
    return ( 
        <div className="genres-wrapper">
            <ul className="list-group">
                {
                    genres.map((genre) => (
                        <li className={`list-group-item ${genre === selectedItem ? 'active' : ''}`} style={{ cursor: 'pointer'}} onClick={() => onHandleGenre(genre)} key={genre[valueProperty]} >{genre[textProperty]}</li>
                    ))
                }
            </ul>
        </div>
     );
}

Genres.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}
 
export default Genres;