import React, { useState } from 'react'
import AddPersonForm from './AddPersonForm'
import { PeopleList } from './PeopleList'

const ContactManager = ({ data }) => {

    const [contacts, setContacts] = useState(data);

    const addPerson = () => {
        setContacts([...contacts, ])
    }

  return (
   <>
    <AddPersonForm />
    <PeopleList data={contacts}/>
   </>
  )
}

export default ContactManager