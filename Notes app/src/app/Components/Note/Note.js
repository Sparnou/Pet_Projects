//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Actions
import deleteNoteAction from '../../actions/deleteNoteAction';
//Styles
import './Note.css';

class Note extends Component {
    constructor() {
        super();
        this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    }

    deleteNoteHandler() {
        this.props.deleteNote(this.props.noteId);
    }

    render() {
        return (
            <div className="note grid-item">
                <i
                    className="fas fa-times delete-note-icon"
                    onClick={this.deleteNoteHandler}
                >
                </i>
                <span>
                   {this.props.noteText}
               </span>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteNote: bindActionCreators(deleteNoteAction, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(Note);
