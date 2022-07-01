import PropTypes from 'prop-types'
import _ from "lodash"

const Pagination = ({pageSize, currentPage, itemsCount, onPageChange}) => {
    
    const pagesCount = Math.ceil(itemsCount / pageSize)
    const pages = _.range(1, pagesCount + 1)

    if (pagesCount === 1) return null

    return (
        <nav>
            <ul className="pagination">
                {
                    pages.map(page => (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}><a href={'#!'} onClick={() => onPageChange(page)} className="page-link">{page}</a></li>
                    ))
                }
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    itemsCount: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired
}
 
export default Pagination