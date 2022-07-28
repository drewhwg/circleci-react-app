// Minh Quang Hoang - Cao Minh Nguyen
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import sum from './Sum';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('sums numbers', () => {
  expect(sum(2, 3)).toEqual(8);
  expect(sum(2, 2)).toEqual(4);
});