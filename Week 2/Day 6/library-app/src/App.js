import React, {useState} from 'react'

// Import Bootstrap Styling from Node Modules
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


import BookInput from './components/BookInput'
import BookTable from './components/BookTable'

export default function App() {

  const [books, setBooks] = useState([]); //creates a book array for the books in library

  function onBookCreate(book) {

    
    setBooks([...books, book]); //appends books to array
  }

  //function to remove book
  function onRemove(isbn) {
    //filters through the books array to remove book that matches isbn number
    setBooks(books.filter((x) => isbn !== x.isbn))

  }
  return (
    <div className='container my-4'>
      <div className='card card-body text-left'>
        <h1 className='text-left display-2'>Add Book:</h1>
        <hr/>
        <BookInput onBookCreate={onBookCreate}/>
        <BookTable books={books} onRemove={onRemove}/>
      </div>
    </div>
  )
}
