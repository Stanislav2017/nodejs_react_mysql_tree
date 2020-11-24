import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hooks';
import Loader from 'react-loader-spinner';
import NodeListComponent from '../components/NodeListComponent';

export const TreePage = () => {
    const [ tree, setTree ] = useState([]);
    const { loading, request } = useHttp();
    const { token } = useContext(AuthContext);

    const nest = (items, id = null, link = 'parent') => items.filter(
        item => item[link] === id
    ).map(
        item => ({ ...item, children: nest(items, item.id) })
    );

    const fetchNodes = useCallback(async () => {
        try {
            const fetched = await request('/api/node/list', 'GET', null, { Authorization: `Bearer ${token}` });            
            setTree(nest(fetched) || []);
        } catch (e) {}
    }, [ token, request ]);

    const removeNode = (id) => {
        request(`/api/node/${id}/delete`, 'DELETE', null, { Authorization: `Bearer ${token}` }).then(() => {
            fetchNodes();
        });
    };

    const addNode = (id = null) => {
        let name = prompt('Enter node name', 'Branch default');
        let url = '/api/node/create';
        if (id) {
            url += `?parent=${id}`;
        }
        if (name) {
            request(url, 'POST', { name }, { Authorization: `Bearer ${token}` }).then(() => {
                fetchNodes();
            });
        }
    };

   

    useEffect(() => {
        fetchNodes();
    }, [ fetchNodes ]);    

    return(
        <>
            {
                loading ? <Loader /> : <NodeListComponent nodes={tree} removeNode={removeNode} addNode={addNode} />
            }
        </>
    );
};