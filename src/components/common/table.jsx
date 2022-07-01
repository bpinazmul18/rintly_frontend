import TableBody from "./table-body";
import TableHeader from "./table-header";

const Table = ({columns, onSort, sortColumn, data}) => {

    return ( 
        <table className="table">
            <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn}/>
            <TableBody columns={columns} data={data}/>
        </table>
     );
}
 
export default Table;