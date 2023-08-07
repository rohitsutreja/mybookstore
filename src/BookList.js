import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Book from './Book';
import {Box, Container} from '@mui/material'
import BookContext, { useBook } from './Context/BookContext';

const BookList = () => {


  const { books , setBooks } = useBook();

  const renderBooks = books.map((book) => {
   
    return <Book key={book.id} book={book} />});

  return (
      <Box flex = {4}  p ={2} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around",}}>
      {renderBooks}
      </Box>
  )
}

export default BookList
