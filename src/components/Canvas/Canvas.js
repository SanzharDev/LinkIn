import React from 'react';
import Context from '../Context/Context';

function Canvas() {
    const {sessionId} = React.useContext(Context);
    return (
        <div>
            <p>Canvas</p> <br></br>
            <p>unique id = {sessionId}</p>
        </div>  
    );
}

export default Canvas;