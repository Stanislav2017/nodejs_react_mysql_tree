import React, { useState } from 'react';
import { useAuth } from '../hooks/auth.hooks';
import { useHttp } from '../hooks/http.hooks';

export const IndexPage = () => {
    const { login } = useAuth();
    const { request } = useHttp();

    const signIn = async () => {
        request('/api/auth/login', 'POST', null, {}).then(response => {
            login(response.token, response.userId);
        });
    };
    return(
        <div className="container">
            Click on this button for Auth <button onClick={signIn}>Sign In</button>
        </div>
    );
};