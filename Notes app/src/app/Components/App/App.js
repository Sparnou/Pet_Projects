//React
import React from 'react';
//Components
import Editor from '../Editor/Editor';
import NotesContainer from '../NotesContainer/NotesContainer';
import Header from '../Header/Header';
//Styles
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Editor />
                <NotesContainer />
            </main>
        </div>
    );
};

export default App;

