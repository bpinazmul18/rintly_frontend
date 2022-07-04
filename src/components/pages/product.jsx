import { useParams, useLocation } from "react-router-dom"
import queryString from "query-string"

// eslint-disable-next-line
export default function (props) {
    const result = useParams()
    const location = useLocation()
    const x = queryString.parseUrl(location.search)
    console.log(x)

    return (
        <div>
            product <span>{'1'}</span>
        </div>
    )
}