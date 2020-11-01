import React from 'react'
import './App.css';
import AddTodo from './components/addTodo/AddTodo';
import List from './components/List/List'
import Footer from './components/Footer'


function App() {
  

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>TO DO APP</h1>
      <AddTodo />
      <List />
      <Footer />
    </div>
  );
}

export default App;
