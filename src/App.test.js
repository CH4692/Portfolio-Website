import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/This Is My First Step To A Big Dream!!!/i);
  expect(linkElement).toBeInTheDocument();
});
