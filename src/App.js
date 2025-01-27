import React from 'react';
import SearcheList from './SearcheList';

function App() {
  // object "items" 
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Grape" },
    { id: 5, name: "Pineapple" }
  ];

  return (
    <div>
      <h1>Lista de Frutas</h1>
      {/* prop items */}
      <SearcheList items={items} />
    </div>
  );
}

export default App;
