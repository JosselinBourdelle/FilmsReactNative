import React, { Component } from 'react';

export let isConnect = false;

export const ConnectedContext = React.createContext({
    isConnect
});