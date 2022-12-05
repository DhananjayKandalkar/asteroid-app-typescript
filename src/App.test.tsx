import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title as Asteroid App In TypeScript', () => {
  render(<App />);
  const linkElement = screen.getByText(/Asteroid App In TypeScript/i);
  expect(linkElement).toBeInTheDocument()
});
