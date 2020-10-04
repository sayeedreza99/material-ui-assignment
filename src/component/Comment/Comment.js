import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const Comment = (props) => {
    const { id, name, email, body } = props.comment;
    const commentStyle = {
        border: '2px solid purple',
        margin: '10px 100px',
        padding: '20px',
        borderRadius: '20px',
        display: 'flex',
    }
    const photo = `https://randomuser.me/api/portraits/med/women/${id}.jpg`;
    const useStyles = makeStyles((theme) => ({
        large: {
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
    }));
    const classes = useStyles();
    return (
        <div style={commentStyle}>
            <div >
                <Avatar alt="Remy Sharp" src={photo} className={classes.large} />
            </div>
            <div style={{ marginLeft: '20px' }}>
                <b>name:</b> {name}
                <br />
                <b>email: </b> {email}
                <h2><b>Comment:</b></h2> <p>{body}</p>
            </div>

        </div>
    );
};

export default Comment;