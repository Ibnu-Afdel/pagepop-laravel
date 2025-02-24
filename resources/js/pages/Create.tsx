import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Create() {
    const [values, setValues] = useState({
        title: '',
        description: ''
    })

    const handelChange = (event) => {
        const key = event.target.id
        const value = event.target.value
        setValues(values => ({
            ...values,
            [key]: value
        }))
    }

    const handelSubmit = (event) => {
        event.preventDefault()
        router.post('/books', values)
    }

    return (
        <>
        <h1>Create Book</h1>
        <hr />
        <form onSubmit={handelSubmit}>
            <label htmlFor="title">Title: </label>
            <input id="title" value={values.title} onChange={handelChange} />

            <label htmlFor="description">Description: </label>
            <textarea  id="description" value={values.description} onChange={handelChange}></textarea>
            <button>Create</button>
        </form>
        </>
    )
}