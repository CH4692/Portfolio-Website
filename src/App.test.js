import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Testing Header and Routing', () => {
  render(<App />, { wrapper: BrowserRouter });

  expect(screen.getByText(/Hi, my name is/i)).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: 'Charles' }))
  expect(screen.getByText(/About Page coming Soon!/i)).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: 'Projects' }))
  expect(screen.getByText(/Project Page coming Soon!/i)).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: 'Contact' }))
  expect(screen.getByText(/Contact Page coming Soon!/i)).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', {name: 'CH'}))
  expect(screen.getByText(/Hi, my name is/i)).toBeInTheDocument()
});
