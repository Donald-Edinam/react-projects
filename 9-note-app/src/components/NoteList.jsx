import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig';
import { useAuth } from '../context/AuthContext';
import Note from './Note';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const userNotesRef = collection(db, 'users', user.uid, 'notes');
      const q = query(userNotesRef);
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const notesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNotes(notesList);
      });
      return () => unsubscribe();
    }
  }, [user]);
  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map(note => (
        <Note key={note.id} note={note} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NoteList;