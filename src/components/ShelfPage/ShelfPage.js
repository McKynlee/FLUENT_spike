import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  const deleteBook = (bookID) => {
    axios
      .delete(`/api/shelf${bookID}`)
      .then((res) => {
        console.log('successful Delete: ShelfPage', res);
      })
      .catch((error) => {
        console.log('error on deleteBook: ShelfPage', error);
      });
  };
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here. test</p>
      <ul>
        {shelfItems.map((items) => (
          <li key={items.id}>
            {' '}
            {items.description}
            <button
              onClick={() => {
                deleteBook(iBook.id);
              }}
            >
              {' '}
              TRASH
            </button>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShelfPage;
