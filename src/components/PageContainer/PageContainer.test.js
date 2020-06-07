import React from 'react';
import { render } from '@testing-library/react';
import PageContainer from './PageContainer';

test('should render without crashing', () => {
  const { getByText } = render(<PageContainer title={'Test Title'} />);
  const menuElement = getByText(/Test Title/i);
  expect(menuElement).toBeInTheDocument();
});
