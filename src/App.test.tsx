import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render Text in app page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Zishan/i);
  expect(linkElement).toBeInTheDocument();
});
