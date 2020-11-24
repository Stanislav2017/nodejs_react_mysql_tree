import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';

function BranchComponent({ node }) {
    const { removeNode, addNode } = useContext(Context);
    return(
        <li className="collection-item">
            <ul className="collection">
                <li className="collection-item">{ node.name } 
                    <i className="secondary-content" >
                        <span onClick={removeNode.bind(null, node.id)}>Remove</span> | <span onClick={addNode.bind(null, node.id)}>Add</span>
                    </i>
                </li>
            </ul>
        </li>
    );
}

BranchComponent.propTypes = {
    node: PropTypes.object.isRequired
}

export default BranchComponent;