
import { useNavigate, useParams } from 'react-router-dom';

const MovieForm = () => {
    const params = useParams()
    const navigate = useNavigate()

    return ( 
        <div className='container'>
            <p>movie form {params.id}</p>
            <button onClick={() => navigate('/movies')} className="btn btn-primary">Save</button>
        </div>
     );
}
 
export default MovieForm;