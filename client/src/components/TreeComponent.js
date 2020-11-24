import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';
import BranchComponent from './BranchComponent';

function TreeComponent({ nodes }) {
    const { removeNode, addNode } = useContext(Context);
    return(
        <ul className="collection">
            {nodes.map((node, i) => {
                if (node.children.length > 0) {
                    return (
                        <li className="collection-item">
                            { node.name } 
                            <i className="secondary-content" ><span onClick={() => removeNode(node.id)}>Remove</span> | <span onClick={() => addNode(node.id)}>Add</span></i>
                            <TreeComponent nodes={ node.children } key={i} removeNode={removeNode} addNode={addNode} />
                        </li>
                    );
                }
                return (<BranchComponent node={ node } key={i} removeNode={removeNode} addNode={addNode} />);
            })}  
        </ul>
    );  
}

TreeComponent.propTypes = {
    nodes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TreeComponent;