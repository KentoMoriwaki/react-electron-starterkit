import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CounterContainer from './CounterContainer';

const RootContainer = ({ store }) => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

export default RootContainer;
