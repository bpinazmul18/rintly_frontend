const Input = (props) => {
    const {label, type, name, value, onHandleChange, error} = props

    return ( 
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type={type || name} className="form-control rounded-pill" id={name} name={name} value={value} onChange={onHandleChange} placeholder={`Enter ${name}...`}/>
            {error && <div className="alert alert-danger my-3 py-1 rounded-3">{error}</div> }
        </div>
     );
}
 
export default Input;