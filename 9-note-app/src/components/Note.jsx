import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig';

const Note = ({ note, onDelete }) => {

    const handleDelete = async () => {

        const { user } = useAuth();

        try {
          await deleteDoc(doc(db, 'users', user.uid, 'notes', note.id));
          if (onDelete) onDelete(note.id);
        } catch (error) {
          console.error('Error deleting note:', error);
        }
      };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{note.title}</h2>
      <p className="text-gray-600 mb-4">{note.content}</p>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;