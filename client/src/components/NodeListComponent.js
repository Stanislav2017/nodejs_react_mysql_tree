import React from 'react';
import TreeComponent from './TreeComponent';
import PropTypes from 'prop-types';


function NodeListComponent({ nodes, removeNode, addNode }) {
    if (!nodes.length) {
        return (<p className="center">Nodes not found!</p>);
    }
    return(
        <TreeComponent nodes={nodes} removeNode={removeNode} addNode={addNode} />
    );  
}

NodeListComponent.propTypes = {
    nodes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NodeListComponent;