import React from "react";
import TableBody from "./table-body";
import TableHeader from "./table-header";

const Table = ({columns, onSort, sortColumn, data}) => {

    return ( 
        <div className="table-responsive">
            <table className="table bg-dark-400 rounded-2">
                <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn}/>
                <TableBody columns={columns} data={data}/>
            </table>
        </div>
     );
}
 
export default Table;