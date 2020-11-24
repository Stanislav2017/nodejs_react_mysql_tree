import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';
import TreeComponent from './TreeComponent';


function NodeListComponent({ nodes }) {
    const { removeNode, addNode } = useContext(Context);
    if (!nodes.length) {
        return (
            <div>
                <ul className="collection">
                    <li className="collection-item">Node List
                        <i className="secondary-content" ><span onClick={() => addNode()}>Add Main Node</span></i>
                    </li>
                    <li>
                        <p className="center">Nodes not found!</p>
                    </li>
                </ul>
                
            </div>
        );
    }

    return(
        <div>
            <ul className="collection">
                <li className="collection-item">Node List
                <i className="secondary-content" ><span onClick={() => addNode()}>Add Main Node</span></i>
                </li>
            </ul>
            <TreeComponent nodes={nodes} removeNode={removeNode} addNode={addNode} />
        </div>
    );  
}

NodeListComponent.propTypes = {
    nodes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NodeListComponent;