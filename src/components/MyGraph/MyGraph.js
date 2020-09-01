import React from 'react';
import { Graph } from 'react-d3-graph';

function MyGraph() {

const data = {
    nodes: [
        { id: "How does Internet work?" }, 
        { id: "What is HTTP?" }, 
        { id: "Browser and how they work?" },
        { id: "DNS and how it works?" },
        { id: "What is Domain Name?" },
        { id: "What is hositng?" },
        { id: "Internet" }
    ],
    links: [
        { source: "How does Internet work?", target: "Internet" },
        { source: "What is HTTP?", target: "Internet" },
        { source: "Browser and how they work?", target: "Internet" },
        { source: "DNS and how it works?", target: "Internet" },
        { source: "What is Domain Name?", target: "Internet" },
        { source: "What is hositng?", target: "Internet" },
    ], 
};

const myConfig = {
    nodeHighlightBehavior: true,
    node: {
        color: "lightgreen",
        size: 120,
        hightlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },
};

// graph event callbacks
const onClickGraph = function() {
    console.log(`Clicked the graph background`);
};
 
const onClickNode = function(nodeId) {
    console.log(`Clicked node ${nodeId}`);
};
 
const onDoubleClickNode = function(nodeId) {
    console.log(`Double clicked node ${nodeId}`);
};
 
const onRightClickNode = function(event, nodeId) {
    console.log(`Right clicked node ${nodeId}`);
};
 
const onMouseOverNode = function(nodeId) {
    console.log(`Mouse over node ${nodeId}`);
};
 
const onMouseOutNode = function(nodeId) {
    console.log(`Mouse out node ${nodeId}`);
};
 
const onClickLink = function(source, target) {
    console.log(`Clicked link between ${source} and ${target}`);
};
 
const onRightClickLink = function(event, source, target) {
    console.log(`Right clicked link between ${source} and ${target}`);
};
 
const onMouseOverLink = function(source, target) {
    console.log(`Mouse over in link between ${source} and ${target}`);
};
 
const onMouseOutLink = function(source, target) {
    console.log(`Mouse out link between ${source} and ${target}`);
};
 
const onNodePositionChange = function(nodeId, x, y) {
    console.log(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
};

    return (<Graph
    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
    data={data}
    config={myConfig}
    onClickNode={onClickNode}
    onDoubleClickNode={onDoubleClickNode}
    onRightClickNode={onRightClickNode}
    onClickGraph={onClickGraph}
    onClickLink={onClickLink}
    onRightClickLink={onRightClickLink}
    onMouseOverNode={onMouseOverNode}
    onMouseOutNode={onMouseOutNode}
    onMouseOverLink={onMouseOverLink}
    onMouseOutLink={onMouseOutLink}
    onNodePositionChange={onNodePositionChange}
/>);
}

export default MyGraph;