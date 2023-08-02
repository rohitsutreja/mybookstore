import React from 'react'
import {book} from './styles.js'

const BookList = () => {
  return (
    <div className = "book-list">
      <div className="book1" style = {book} >Book1</div>
      <div className="book2" style = {book}>Book2</div>
      <div className="book3" style = {book}>Book3</div>
    </div>
  )
}

export default BookList
