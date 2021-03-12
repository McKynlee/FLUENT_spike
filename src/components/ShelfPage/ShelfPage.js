import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';



function ShelfPage() {

  const dispatch =useDispatch();

   // Get books info on page load
  useEffect(() => {
    dispatch( {
      type: 'FETCH_BOOKS' // this is going to get the books 
    })
  }, []);

  const theBooks = useSelector(store => store.books); // grab from saga.
  // test


  const deleteBook = (bookID) => {
    axios.delete(`/api/shelf${bookID}`)
    .then((res) => {
      console.log('successful Delete: ShelfPage', res);
    })
    .catch(error => {
      console.log('error on deleteBook: ShelfPage', error);
    })
  };

  return (
    <div className="container">
      <h2>Shelf</h2>

      <ul>
          {theBooks.map( iBook, index => (
            // This index will give us the individual book index.
            <li key={index}> 
              {/* This will give us the name of the book */}
              {iBook.id} 
              <button onClick={() => { deleteBook(iBook.id) }}>TRASH</button>
              </li>
          ))}
        </ul> 




      {/* <p>All of the available items can be seen here.</p> */}
    </div>
  );
}

export default ShelfPage;
