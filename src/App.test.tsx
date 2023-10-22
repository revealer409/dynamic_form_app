import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
test('renders dynamic form app test', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const linkElement = screen.getByText('Muhammad Kashif Sattar');
  expect(linkElement).toBeInTheDocument();
});

 

 