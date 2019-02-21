//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux'
//Components
import Note from '../Note/Note';
//Styles
import './NotesContainer.css';
//Masonry grid
import Masonry from 'react-masonry-component';

const NotesContainer = props =>  {

        return  (
            <Masonry>
                    {
                        props.notes.map(item => {
                            return <Note key={item.id} noteText={item.text} noteId={item.id} />
                        })
                    }
            </Masonry>
        )

}

const mapStateToProps = state => {
    return {
        notes: state.manageNotesReducer.items
    }
};

export default connect(mapStateToProps)(NotesContainer);
