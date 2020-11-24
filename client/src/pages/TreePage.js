import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hooks';
import Loader from 'react-loader-spinner';
import NodeListComponent from '../components/NodeListComponent';
import Context from '../Context';

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
        if (name) {
            let body = { name };
            if (id) {
                body['parent'] = id;
            }
            request('/api/node/create', 'POST', body, { Authorization: `Bearer ${token}` }).then(() => {
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
                loading ?
                    <Loader /> :
                    <Context.Provider value={{ removeNode, addNode }} >
                        <NodeListComponent nodes={tree} />
                    </Context.Provider>
            }
        </>
    );
};