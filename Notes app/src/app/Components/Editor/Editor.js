//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Actions
import addNoteAction from '../../actions/addNoteAction';
//Styles
import './Editor.css';

class Editor extends Component {
    constructor() {
        super();
        this.addNoteHandler = this.addNoteHandler.bind(this);
        this.textAreaRef = React.createRef();
    }

    addNoteHandler() {
        const textArea = this.textAreaRef.current;
        this.props.addNote(textArea.value);
        textArea.value = '';
    }
    render() {
        return (
            <div className="editor-container">
                <textarea
                    name="new-note-text"
                    id="editor-text-area"
                    placeholder="Аdd text..."
                    ref={this.textAreaRef}
                >
                </textarea>
                <button className="add-button" onClick={this.addNoteHandler}>Add</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNote: bindActionCreators(addNoteAction, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(Editor);