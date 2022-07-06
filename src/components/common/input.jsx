const Input = (props) => {
    const {label, type, name, value, onHandleChange} = props

    return ( 
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type={type || name} className="form-control rounded-pill" id={name} name={name} value={value} onChange={onHandleChange} placeholder={`Enter ${name}...`}/>
        </div>
     );
}
 
export default Input;