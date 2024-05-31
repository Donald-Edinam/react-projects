import React from 'react'

export const PeopleList = ({ data, handleRemovePerson }) => {

    const arr = data;
    const listItems = arr.map((val, index) => (
        <li key={index} className='border-b p-2 flex justify-between'>
            <span>{val}</span>
            <button 
            onClick={() => handleRemovePerson(val)}
            className='text-red-600 text-md font-bold cursor-pointer hover:bg-red-200 px-2 rounded-2xl'>
                x
            </button>
        </li>
    ))

    return (
        <>
            <ul className='m-4'>
               {
                arr.lenght === 0 ? <p>Contacts is empty</p> : listItems
               }
            </ul>
        </>
    )
}
