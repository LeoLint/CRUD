import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Posts from './Posts';
import FormModal from './FormModal';
import { getPosts } from './api';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [postToEdit, setPostToEdit] = useState(null);
    const [formMode, setFormMode] = useState('');

    const deletePost = (id) => {
        const newPostsArray = posts.filter(item => item.id !== id);
        setPosts(newPostsArray);
    }

    const initiatePostToEdit = (post) => {
        setPostToEdit(post);
    }

    const saveEditedPost = () => {
        const newPostsArray = posts.map(item => {
            if (item.id === postToEdit.id) {
                return postToEdit;
            }
            return item;
        });
        setPosts(newPostsArray);
        setPostToEdit(null);
    }

    const saveNewPost = () => {
        setPosts([postToEdit, ...posts]);
        setPostToEdit(null);
        setFormMode();
    }

    useEffect(() => {
       (async () => {
            const data = await getPosts();
            setPosts(data);
        })();
    }, []);

    return (
        <div>
            <button onClick={() => {
                setFormMode('new');
                setPostToEdit({
                    id: Math.random()
                });
            }}>NEW POST</button>

            {postToEdit && (
                <div style={{ position: 'fixed', width: 400, height: 400, backgroundColor: '#000' }}>
                    <button onClick={() => initiatePostToEdit(null)}>close</button>
                    <FormModal postToEdit={postToEdit} setPostToEdit={setPostToEdit} submit={formMode === 'new' ? saveNewPost : saveEditedPost} />
                </div>
            )}
            <Posts posts={posts} initiatePostToEdit={initiatePostToEdit} deletePost={deletePost}/>
        </div>
    );
};

export default App;

