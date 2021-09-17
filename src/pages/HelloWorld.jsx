import React from 'react';

const HelloWorld = (props) => {
    return (
        <div className="App">
            <h1>
                {props.title}, {props.name}
            </h1>
        </div>
    )
}

export default HelloWorld
