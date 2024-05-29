import React,{ useState } from 'react'

const AddPersonForm = () => {

    const [person, setPerson] = useState("");

    const handleChange = (e) => {
        setPerson(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!person){
            alert("Input is empty")
        }
        else{
            alert(`Item ${person} added succesfully`)
        }
    }


  return (
    <>
        <form 
        className='m-5'
        onSubmit={handleSubmit}
         action="post"
         >
            <input 
            className='border rounded-md p-1 m-5 '
            type="text" 
            name=""
            placeholder='Add New Contact' 
            onChange={handleChange}
            
            />
            <button 
            className='btn bg-gray-800 p-1 px-5 rounded-md text-white'
            type='submit'>Add</button>
        </form>
    </>
  )
}

export default AddPersonForm