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
 
export default Genres;