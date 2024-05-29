import AddPersonForm from "./components/AddPersonForm";
import ContactManager from "./components/ContactManager";
import { PeopleList } from "./components/PeopleList";

export default function App() {

  const contacts = ["Ama jackson", "Yaa Kolikwa", "Mata Matt", "Kofi Asuoden", "Kobby Koddy"]

  return (
   <>
      <ContactManager data={contacts}/>
   </>
  )
}