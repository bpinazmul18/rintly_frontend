
const Like = ({ liked, onLiked}) => <i onClick={onLiked} className={`fa-${liked ? 'solid' : 'regular'} fa-heart`} style={{ cursor: 'pointer'}}></i>
export default Like;