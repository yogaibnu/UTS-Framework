import React from 'react'
import spinner from './spinner.gif';

function Spinner() {
    return (
        <div>
            <img
                src={spinner}
                style={{ width: '200px', margin: 'auto', display: 'block' }}
                alt="Loading...">
            </img>
        </div>
    )
}

export default Spinner
