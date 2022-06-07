class Task {
    constructor(id, title, checked) {
      this.id = id;  
      this.title = title;
      this.checked = checked
    }  
   
    static fromJSON(json) {
      return new Task(
        json.id,
        json.title,
        json.checked,
      );
    }
  }
  
  class UI {
    constructor() {
      this.form = document.getElementById('form');
  
      this.title = document.getElementById('task-input');
  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.books = [];
      this.loadBooksFromLocalStorage();
      this.renderBookTable();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
  
      const task = new Task(
        new Date().getTime(),
        this.title.value,
        false,
      );
      console.log(task)
      //this.books.push(book);
  
      //this.saveBooksToLocalStorage();
      //this.renderBookTable();
    }
  
    renderBookTable() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.books.length; i++) {
        const book = this.books[i];
  
        const tr = this.createBookTableRow(book);
        this.tableBody.appendChild(tr);
      }
    }
  
    /*
      <tr>
        <td></td> // title
        <td></td> // author
        <td></td> // isbn 
        <td></td> // actions
      </tr>
    */
    createBookTableRow(book) {
      const tr = document.createElement('tr');
  
      const tdTask = document.createElement('td');
      const tdAuthor = document.createElement('td');
      const tdISBN = document.createElement('td');
      const tdActions = document.createElement('td');
  
      tdTitle.innerHTML = book.title;
      tdAuthor.innerHTML = book.author;
      tdISBN.innerHTML = book.isbn;
  
      const removeButton = this.createRemoveBookButton(book);
      tdActions.appendChild(removeButton);
  
      tr.appendChild(tdTitle);
      tr.appendChild(tdAuthor);
      tr.appendChild(tdISBN);
      tr.appendChild(tdActions);
  
      return tr;
    }
  
    createRemoveBookButton(book) {
      const button = document.createElement('button');
  
      button.setAttribute('class', 'btn btn-danger btn-sm');
      button.innerHTML = 'X'
      button.addEventListener('click', () => this.onRemoveBookClicked(book));
  
      return button;
    }
  
    onRemoveBookClicked(book) {
      this.books = this.books.filter((x) => {
        return book.isbn !== x.isbn;
      });
  
      //this.saveBooksToLocalStorage();
      //this.renderBookTable();
    }
  
    saveBooksToLocalStorage() {
      const json = JSON.stringify(this.books);
      localStorage.setItem('books', json);
    }
  
    loadBooksFromLocalStorage() {
      const json = localStorage.getItem('books');
      if (json) {
        const bookArr = JSON.parse(json);
        this.books = bookArr.map(x => Book.fromJSON(x));
      }
    }
  }
  
  const ui = new UI();