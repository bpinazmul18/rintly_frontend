const Input = ({ name, label, error, ...rest}) => {

    return ( 
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                {...rest}
                name={name}
                id={name} 
                className="form-control rounded-pill" 
                placeholder={`Enter ${name}...`}
             />
            {error && <div className="alert alert-danger my-3 rounded-3">{error}</div> }
        </div>
     );
}
 
export default Input;