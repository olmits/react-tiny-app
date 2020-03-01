import React from 'react';
import { render } from '@testing-library/react';
import TinyApp from './tiny-app';

test('renders learn react link', () => {
  const { getByText } = render(<TinyApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
