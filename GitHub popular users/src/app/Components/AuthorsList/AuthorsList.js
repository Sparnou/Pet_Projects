//React
import React from 'react';
//Redux
import {connect} from 'react-redux';
import Spinner from '../Spinner/Spinner';
//styles
import './authorsList.css';
//Components
import Author from './../Author/Author'

const AuthorsList = props => {
        const {users, isFetched} = props;

        return (
            <div>
                {
                    !isFetched
                        ? <Spinner/>
                        : <div className="authors-container">
                            {
                                users.map(item => <Author key={item.id} info={item}>item.language</Author>)
                            }
                        </div>
                }
            </div>
        )
};

const mapStateToProps = state => {
    return {
        users: state.pickLanguageReducer.items,
        isFetched: state.fetchReducer.isFetched,
    }
};

export default connect(mapStateToProps)(AuthorsList);
