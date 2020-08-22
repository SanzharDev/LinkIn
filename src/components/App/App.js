import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Canvas from '../Canvas/Canvas';
import Context from '../Context/Context';
;

function App() {
  const sessionId = uuidv4();
  const contextValues = {sessionId};
  console.log(uuidv4());
  return (
    <Context.Provider value={contextValues}>
      <Canvas />
    </Context.Provider>
  );
}

 
export default App;