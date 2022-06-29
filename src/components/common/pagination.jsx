import _ from "lodash"

const Pagination = (props) => {
    const {pageSize, currentPage, itemsCount, onPageChange} = props

    const pagesCount = Math.ceil(itemsCount / pageSize)
    const pages = _.range(1, pagesCount + 1)

    if (pagesCount === 1) return null

    return (
        <nav>
            <ul className="pagination">
                {
                    pages.map(page => (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}><a onClick={() => onPageChange(page)} className="page-link" href="#">{page}</a></li>
                    ))
                }
            </ul>
        </nav>
    )
}
 
export default Pagination