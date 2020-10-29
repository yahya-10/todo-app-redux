import React from 'react'
import './App.css';
import AddTodo from './components/addTodo/AddTodo';
import List from './components/List/List'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <AddTodo />
      <List />
      <Footer />
    </div>
  );
}

export default App;
