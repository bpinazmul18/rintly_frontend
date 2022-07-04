import { useParams, useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"

// eslint-disable-next-line
export default function (props) {
    const result = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const x = queryString.parseUrl(location.search)
    console.log(x)

    const handleRoute = () => {
        navigate('/')
    }

    return (
        <div>
            product <span>{'1'}</span>
            <button onClick={() => handleRoute()}>Goto home page</button>
        </div>
    )
}