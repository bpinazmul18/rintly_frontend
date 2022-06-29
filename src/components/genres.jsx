const Genres = ({ genres, textProperty, valueProperty }) => {
    return ( 
        <div className="genres-wrapper">
            <ul className="list-group">
                {
                    genres.map((genre) => (
                        <li key={genre[valueProperty]} className="list-group-item">{genre[textProperty]}</li>
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