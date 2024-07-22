import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-8">Firebase Todo App</h1>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;