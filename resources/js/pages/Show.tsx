export default function Show({book}) {
    return (
        <>
        <h1>{book.title}</h1>
        <hr />
        <p>{book.description}</p>
        </>
    )
}