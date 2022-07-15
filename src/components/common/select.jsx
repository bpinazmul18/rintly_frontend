const Select = ({ name, label, options, error, ...rest}) => {

    return ( 
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
             <select className="form-select rounded-pill" name={name} id={name} {...rest}>
                {
                    options.map(option => (
                        <option key={option._id} value={option._id}>
                            {option.name}
                        </option>
                    ))
                }
             </select>
            {error && <div className="alert alert-danger my-3 py-1 rounded-3">{error}</div> }
        </div>
     );
}
 
export default Select;