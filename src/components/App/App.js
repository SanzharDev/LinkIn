import React from "react";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import { Router } from "@reach/router";
import Context from "../Context/Context";
import { ProvideFirebase } from "../Firebase/useFirebase";
import Headers from "../Headers/Headers";
import { Layout } from "antd";
import Siders from "../Siders/Siders";
import Home from "../Home/Home";
import Canvas from "../Canvas/Canvas";

const { Content } = Layout;

function App() {
  const sessionId = uuidv4();
  const contextValues = { sessionId };

  function createNode() {
    console.log('hello');
  }

  return (
    <Context.Provider value={contextValues}>
      <ProvideFirebase>
        <Layout>
          <Headers />
          <Layout>
            <Siders createNode={createNode} />
            <Layout>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Router>
                  <Home path="/" />
                  <Canvas path="/canvas" createNode={createNode} />
                </Router>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </ProvideFirebase>
    </Context.Provider>
  );
}

export default App;
