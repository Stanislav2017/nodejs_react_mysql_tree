import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';
import TreeComponent from './TreeComponent';


function NodeListComponent({ nodes }) {
    const { addNode } = useContext(Context);
    return(
        <div>
            <ul className="collection">
                <li className="collection-item">Node List
                    <i className="secondary-content" ><span onClick={addNode.bind(null, null)}>Add Main Node</span></i>
                </li>
            </ul>
            {
                !nodes.length ? 
                <p className="center">Nodes not found!</p> : 
                <TreeComponent nodes={nodes} />
            }
        </div>
    );  
}

NodeListComponent.propTypes = {
    nodes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NodeListComponent;