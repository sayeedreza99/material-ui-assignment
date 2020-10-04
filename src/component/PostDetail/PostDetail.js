import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = (props) => {
    const { userID } = useParams();

    const [post, setPost] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${userID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [userID]);
    const { userId, id, title, body } = post;
    const postStyle = {
        border: '2px solid purple',
        margin: '10px 50px',
        padding: '20px',
        borderRadius: '20px',
    }

    const [comment, setComment] = useState([])
    useEffect(() => {
        const cmturl = `https://jsonplaceholder.typicode.com/comments?postId=${userID}`;
        fetch(cmturl)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [userID]);

    return (
        <div>
            <div style={postStyle}>
                <div style={{ textAlign: 'center' }}>
                    <b>User Id: </b>{userId}
                    <br />
                    <b>Id: </b> {id}
                </div>
                <br />
                <br />
                <b>Title: </b> {title}
                <br />

                <h2> Post: </h2><p>{body}</p>
            </div>
            <div style={postStyle}>
                <h1>Comments: </h1>
                {
                    comment.map(ct => <Comment comment={ct}></Comment>)
                }
            </div>
        </div >
    );
};

export default PostDetail;