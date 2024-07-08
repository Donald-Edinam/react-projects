import React, { useState } from 'react';

const AddPersonForm = ({ handleAddPerson }) => {
    const [person, setPerson] = useState("");

    const handleChange = (e) => {
        setPerson(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!person) {
            alert("Input is empty");
        } else {
            alert(`Item ${person} added successfully`);
            handleAddPerson(person); // Add the person before clearing the input
            setPerson(""); // Clear the input field after submission
        }
    }

    return (
        <form 
            className='m-5' 
            onSubmit={handleSubmit}
        >
            <input 
                className='border rounded-md p-1 m-5' 
                type="text" 
                placeholder='Add New Contact' 
                value={person} // Make the input controlled
                onChange={handleChange} 
            />
            <button 
                className='btn bg-gray-800 p-1 px-5 rounded-md text-white' 
                type='submit'
            >
                Add
            </button>
        </form>
    );
}

export default AddPersonForm;
