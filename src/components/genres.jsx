const Genres = ({ selectedItem, genres, textProperty, valueProperty, onHandleGenre }) => {
    return ( 
        <div className="genres-wrapper">
            <ul className="list-group">
                {
                    genres.map((genre) => (
                        <li className={`list-group-item text-light clickable ${genre === selectedItem ? 'active' : ''}`} onClick={() => onHandleGenre(genre)} key={genre[valueProperty]} >{genre[textProperty]}</li>
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