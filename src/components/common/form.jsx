import { Component } from 'react';
import Joi from 'joi-browser'
import Input from './input';
import Select from './select';


class Form extends Component {
    state = { 
        data: {},
        errors: {}
     }
     
     validate = () => {
        const options = {abortEarly: false}
        
        const {error} = Joi.validate(this.state.data, this.schema, options)
        if (!error) return null
        
        const errors = {}

        for (let item of error.details)
            errors[item.path[0]] = item.message

        return errors
    }

    validateProperty = ({ name, value}) => {
        const obj = {[name]: value}
        const schema = {[name]: this.schema[name]}

        const { error } = Joi.validate(obj, schema, { abortEarly: false})
        return error ? error.details[0].message : null

    }

    handleSubmit = (e) => {
        e.preventDefault()

        const errors = this.validate()
        this.setState({ errors: errors || {} })
        if (errors) return;

        this.doSubmit()
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input)

        if (errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name]

        const data = {...this.state.data}
        data[input.name] = input.value

        this.setState({ data, errors })
    }

    renderedButton (label) {
        return <button disabled={this.validate()} type="submit" className="btn btn-outline-primary btn-lg rounded-pill px-5 py-3 mt-4">{label}</button>
    }

    renderedInput (label, type, name) {
        const {data, errors} = this.state
        return <Input label={label} type={type} name={name} value={data[name]} onChange={this.handleChange} error={errors[name]}/>
    }

    renderedSelect (label, name, options) {
        const {data, errors} = this.state
        return <Select label={label} name={name} value={data[name]} options={options} onChange={this.handleChange} error={errors[name]}  />
    }
}
 
export default Form;