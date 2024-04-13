import React,{useState} from 'react'

const FormInput = ({id, label, onChange,pattern,  userInfoValue, errorMessage, placeholder={placeholder}}) => {


    const [focused, setFocused] = useState(false)

    const handleFocus = () => {
        setFocused(true)
    }    

    return (
        <div className='forminput'>
            <label htmlFor={id}>{label} </label>
            <input 
            id={id} 
            name={id} 
            pattern={pattern} 
            onChange={onChange} 
            placeholder={placeholder}
            onBlur={handleFocus}
            // onFocus={name === "confirmPassword" && setFocused(true)}
            focused={focused.toString()}
            />
            <p className='errorInfo'>{errorMessage}</p>
        </div>
    )
}

export default FormInput