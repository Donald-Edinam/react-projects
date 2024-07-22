import React, { useState, useEffect } from 'react';
import { db, auth } from '../lib/firebaseConfig';
import { collection, addDoc, query, where, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    if (!auth.currentUser) return;
    const q = query(collection(db, 'users', auth.currentUser.uid, 'todos'));
    const querySnapshot = await getDocs(q);
    const fetchedTodos = [];
    querySnapshot.forEach((doc) => {
      fetchedTodos.push({ id: doc.id, ...doc.data() });
    });
    setTodos(fetchedTodos);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim() || !auth.currentUser) return;
    await addDoc(collection(db, 'users', auth.currentUser.uid, 'todos'), {
      text: newTodo,
      completed: false,
    });
    setNewTodo('');
    fetchTodos();
  };

  const toggleTodo = async (id, completed) => {
    await updateDoc(doc(db, 'users', auth.currentUser.uid, 'todos', id), {
      completed: !completed,
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'users', auth.currentUser.uid, 'todos', id));
    fetchTodos();
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={addTodo} className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-4 mb-2 rounded">
            <span
              className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}
              onClick={() => toggleTodo(todo.id, todo.completed)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;