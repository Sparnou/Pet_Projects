import React from 'react';

import './spinner.css';

const Spinner = props => {
    const { spinnerSize='2rem' } = props;
    const spinnerStyle = {
        height: spinnerSize,
        width: spinnerSize
    };
    const spinnerClasses = `loading-spinner spinner-border text-primary`;

    return (
        <div className="spinner-container">
            <div className={spinnerClasses}  style={spinnerStyle} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
};

export default Spinner;