import { router } from "@inertiajs/react";

export default function Index({ books }) {
    const deleteBook = (id) => {
        router.delete(`/books/${id}`)
    }
    return (
        <>
            <h1>PagePops</h1>
            <hr />
            <a href="/books/create">Create</a>
            {books &&
                books.map((book) => (
                    <div key={book.id}>
                        <h1>{book.title}</h1>
                        <p>{book.description}</p>
                        <a href={`/books/${book.id}/edit`}>Edit</a> <br />
                        <button onClick={() => deleteBook(book.id)} >X</button>
                    </div>
                ))}
        </>
    );
}
