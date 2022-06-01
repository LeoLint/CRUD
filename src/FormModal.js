import React from 'react'

const FormModal = ({ postToEdit, setPostToEdit, submit }) => {
    return (
        <form onSubmit={submit} action="" className="form">
            <input type="text" placeholder="Title"
                onChange={(e) => setPostToEdit((prevState) => ({
                    ...prevState,
                    title: e.target.value
                }))}
                value={postToEdit.title} />
            <input type="text" placeholder="Body"
                onChange={(e) => setPostToEdit((prevState) => ({
                    ...prevState,
                    body: e.target.value
                }))}
                value={postToEdit.body} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default FormModal;