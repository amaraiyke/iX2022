import React, {useState} from 'react'

import {Book} from '../models/book'

const initialValues = {
    title: "",
    author: "",
    isbn: "",
  };

export default function BookInput(props) {

    const [values, setValues] = useState(initialValues); //creates a state variable for inputs

    const handleInputChange = (e) => {
        //const name = e.target.name 
        //const value = e.target.value 
        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value,
        });
      }; //appends input to respective value


    console.log(values)
    //const [book, setBook] = useState({});

   function onBookFormSubmit(e) { // function submits form and creates a new book based on  received values
        e.preventDefault();

        const book = new Book (
            values.title,
            values.author,
            values.isbn
      
          )

       props.onBookCreate(book); //passes up to the parent the

    }

    //calls function that submits form
  return (
    <div>
        <form onSubmit={onBookFormSubmit}>
            <div className="m-3 d-grid gap-2">
                <label className="form-label fw-bold">Title</label>
                <input type="text" values= {values.title}
                onChange={handleInputChange}
                name="title"/>
            </div>

            <div className="m-3 d-grid gap-2">
                <label className="form-label fw-bold">Author</label>
                <input type="text" values= {values.author}
                onChange={handleInputChange}
                name="author"/>
            </div>

            <div className="m-3 d-grid gap-2">
                <label className="form-label fw-bold">ISBN</label>
                <input type="number" values= {values.isbn}
                onChange={handleInputChange}
                name="isbn"/>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-outline-secondary" type="submit">Submit</button>
            </div>
        </form>
        
    </div>
  )
}
