import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig';
import { useAuth } from '../context/AuthContext';

const NoteEditor = ({ onNoteAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newNote = await addDoc(collection(db, 'notes'), {
        title,
        content,
        userId: user.uid,
        createdAt: new Date(),
      });
      setTitle('');
      setContent('');
      if (onNoteAdded) onNoteAdded(newNote);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <textarea
        placeholder="Note content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        rows="4"
        required
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Note
      </button>
    </form>
  );
};

export default NoteEditor;