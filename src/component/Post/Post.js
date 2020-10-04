import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Post = (props) => {
    const { userId, id, title, body } = props.post;
    const postStyle = {
        border: '2px solid purple',
        margin: '10px 50px',
        padding: '20px',
        borderRadius: '20px',
    }

    return (
        <div style={postStyle}>
            <div>
                <div style={{ margin: 'auto', textAlign: 'center', border: '5px solid green', borderRadius: '50%', width: '100px', height: '100px' }}>
                    <h3>User ID: {userId}</h3>
                    <h3>ID: {id}</h3>
                </div>
                <b>Title: </b>{title}
                <p><h3>Post:</h3>{body}</p>
            </div>
            <div style={{ textAlign: 'right', color: 'red' }}>
                <Link to={`/post/${id}`}> <Button variant="contained" color="primary">SEE MORE</Button></Link>
            </div>
        </div>
    );
};

export default Post;