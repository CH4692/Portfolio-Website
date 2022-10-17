import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Testing Header and Routing', () => {
  render(<App />, { wrapper: BrowserRouter });

  expect(screen.getByText(/You are on the home Page/i)).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: 'Charles' }))
  expect(screen.getByText(/You are on the charles page/i)).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: 'Projects' }))
  expect(screen.getByText(/You are on the projects page/i)).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: 'Contact' }))
  expect(screen.getByText(/You are on the contact page/i)).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', {name: 'CH'}))
  expect(screen.getByText(/You are on the home Page/i)).toBeInTheDocument()
});
