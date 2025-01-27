import React, { useMemo, useState } from "react";   

function SearcheList({ items }) {
  // Verifica que "items" no sea undefined
  console.log(items);  // Esto imprimirá el arreglo de items

  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredItems = useMemo(() => {
    if (!items) return [];  // Agregamos una comprobación de seguridad
    return items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [items, searchQuery]);

  return (
    <div>
      <input 
        type="text" 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)} 
        placeholder="Buscar..."
      />
      <ul>
        {
          filteredItems.map(item => 
            <li key={item.id}>{item.name}</li>
          )
        }
      </ul>
    </div>
  );
}

export default SearcheList;
