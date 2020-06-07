import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should render without crashing', () => {
  const { getByText } = render(<App />);
  const menuElement = getByText(/page.published.menu/i);
  expect(menuElement).toBeInTheDocument();
});
