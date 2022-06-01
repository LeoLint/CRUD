import React from 'react'

const Posts = ({ posts, initiatePostToEdit, deletePost }) => {
    if (!posts) return 'No posts'; 
    return (
        <ul>
            {posts && posts.length === 0 ? (
                'No posts'
            ) : posts.map(item => {
                return (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        <button onClick={() => initiatePostToEdit(item)}>Edit</button>
                        <button onClick={() => deletePost(item.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    );
}

export default Posts;