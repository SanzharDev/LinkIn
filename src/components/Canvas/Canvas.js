import React from "react";
import Context from "../Context/Context";
import MyGraph from "../MyGraph/MyGraph";

function Canvas({ createNode }) {
  const { sessionId } = React.useContext(Context);
  return (
    <div>
      <p>unique id = {sessionId}</p>
      <MyGraph />
    </div>
  );
}

export default Canvas;
