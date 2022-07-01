
const Like = ({ liked, onLiked}) => (
    <i onClick={onLiked} className={`fa-${liked ? 'solid' : 'regular'} fa-heart clickable`}></i>
)
export default Like;