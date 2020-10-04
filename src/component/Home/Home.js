import React, { useContext } from 'react';
import { context } from '../../App';
import Post from '../Post/Post';

const Home = () => {
    const [post] = useContext(context)
    return (
        <div>
            {
                post.map(pt => <Post post={pt}></Post>)
            }
        </div>
    );
};

export default Home;