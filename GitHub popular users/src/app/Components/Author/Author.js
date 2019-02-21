//React
import React from 'react';

const Author = props => {

    const {info} = props;

    return (
        <div className="author-container">
            <div className="avatar-container">
                <a href={info.html_url}>
                    <img src={info.avatar_url} alt="author`s avatar" className="author-avatar"/>
                </a>
            </div>
            <span className="login-container">
                {info.login}
            </span>
        </div>
    );

};

export default Author;