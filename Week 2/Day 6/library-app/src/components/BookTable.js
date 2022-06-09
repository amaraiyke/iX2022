import React from "react";

export default function BookTable(props) {
	return (
		<div>
			<table className="table text-center">
				<thead>
					<tr>
						<th>Title</th>
						<th>Author</th>
						<th>ISBN</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>

                    { //passes from parent each book input and maps unto a row for each
                        props.books.map((book) =>
                            <tr>
                                <th>{book.title}</th>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                                <td><i class="bi bi-trash3" onClick={() => props.onRemove(book.isbn)}></i></td>
                            </tr> //last cell receives the isbn of the book on that row and passes unto the remove function for deletion
                        )
                    } 
				</tbody>
			</table>
		</div>
	);
}
