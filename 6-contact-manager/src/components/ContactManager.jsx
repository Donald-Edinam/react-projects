import React, { useState } from 'react'
import AddPersonForm from './AddPersonForm'
import { PeopleList } from './PeopleList'

const ContactManager = ({ data }) => {

    const [contacts, setContacts] = useState(data);

    const addPerson = (name) => {
        setContacts([...contacts, name])
    }

    // Remove Person
    const removePerson = (name) => {
      setContacts(contacts.filter(contact => contact !== name));
    };

  return (
   <>
    <AddPersonForm handleAddPerson={addPerson}/>
    <PeopleList data={contacts} handleRemovePerson={removePerson}/>
   </>
  )
}

export default ContactManager