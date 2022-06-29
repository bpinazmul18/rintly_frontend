const Genres = ({ genres }) => {
    return ( 
        <div className="genres-wrapper">
            <ul className="list-group">
                {
                    genres.map((genre) => (
                        <li key={genre._id} className="list-group-item">{genre.name}</li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default Genres;