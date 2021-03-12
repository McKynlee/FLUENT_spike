import React from 'react';

import { useEffect, useState } from 'react';

function ShelfPage() {
  const [shelfItems, setShelfItems] = useState([]);
  const loadShelf = () => {
    // Grab shelf items from db
    axios
      .get('/api/shelf')
      .then((res) => {
        setShelfItems(res.data);
      })
      .catch((err) => {
        console.error('error on get shelf', err);
      });
  };
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
