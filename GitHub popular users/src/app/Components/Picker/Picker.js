//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Actions
import pickLanguageAction from '../../Actions/pickLanguageAction'

const languages = [
    'JavaScript',
    'PHP',
    'Python',
    'Ruby',
    'Swift',
    'Java',
    'C#'
];

class Picker extends Component {
    constructor() {
        super();
        this.pickLanguageHandler= this.pickLanguageHandler.bind(this);
    }
    pickLanguageHandler(e) {
        this.props.pickLanguage(e.target.value);
    }
    render() {
        return (
            <select onChange={this.pickLanguageHandler} defaultValue={'Choose'}>
                <option value={'Choose'} disabled hidden>Choose language</option>
                {
                    languages.map((language, index) => <option key={index} value={language}>{language}</option>)
                }
            </select>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pickLanguage: bindActionCreators(pickLanguageAction, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(Picker);
