import { useParams } from "react-router-dom"

// eslint-disable-next-line
export default function (props) {
    const {id} = useParams()
    console.log(id)

    return (
        <div>
            product <span>{'1'}</span>
        </div>
    )
}