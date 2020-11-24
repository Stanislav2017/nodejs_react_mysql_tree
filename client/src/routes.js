import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { TreePage } from './pages/TreePage';

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return(
            <Switch>
                <Route path="/tree" exact>
                    <TreePage />
                </Route>
                <Redirect to="/tree" />
            </Switch>
        );
    }
    return(
        <Switch>
            <Route path="/login" exact>
                <IndexPage />
            </Route>
            <Redirect to="/login" />
        </Switch>
    );
};