import React from 'react'

export const PeopleList = ({ data }) => {

    const arr = data;
    const listItems = arr.map((val, index) => (
        <li className='border-b p-2'>{val}</li>
    ))

    return (
        <>
            <ul className='m-4'>
                {listItems}
            </ul>
        </>
    )
}
