import React from 'react';
import './error.scss'
import icon from './death-star.png'

const Error = () => {
    return <div className="error">
          <img src={icon} alt="error icon"/>
        <h1>Error</h1>
         <h2>Please, run json-server</h2>
        <h4>To start it, read documentation in this project</h4>

    </div>
}

export default Error;
