import React from 'react';
import PropTypes from 'prop-types';

function BranchComponent({ node, removeNode, addNode }) {
    return(
        <li className="collection-item">
            <ul className="collection">
                <li className="collection-item">{ node.name } 
                <i className="secondary-content" ><span onClick={() => removeNode(node.id)}>Remove</span> | <span onClick={() => addNode(node.id)}>Add</span></i>
                </li>
            </ul>
        </li>
    );
}

BranchComponent.propTypes = {
    node: PropTypes.object.isRequired
}

export default BranchComponent;