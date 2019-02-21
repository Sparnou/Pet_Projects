import React from 'react';
//components
import AuthorsList from '../AuthorsList/AuthorsList';
import Picker from '../Picker/Picker';
import Header from '../Header/Header';

const App = () => {
    return (
        <div>
            <Header/>
            <Picker/>
            <AuthorsList/>
        </div>
    )
};

export default App;