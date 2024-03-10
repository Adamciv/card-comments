
import './App.css';
import React from "react";
import { comments } from "./components/comments";
import Card from './components/Card';

function App() {
  return (
    <div>
    {
      comments.map(comment => 
      <Card commentObject={comment} />
    )
    }
  </div>
  );
}

export default App;
