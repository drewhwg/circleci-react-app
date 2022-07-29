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
  expect(sum(6, 9)).toEqual(15);
  expect(sum(3, 6)).toEqual(9);
});