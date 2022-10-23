import { getAllByRole, getByTestId, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Leftbar from './components/Layout/Leftbar';
import ContactSection from './components/Pages/Home/Contact/ContactSection';
import ProjectSection from './components/Pages/Home/Projects/ProjectSection';
import Accordion from './components/Pages/Home/Skills/Accordion'
import Skills from './components/Pages/Home/Skills/Skills';
import SkillsAnimator from './components/Pages/Home/Skills/SkillsAnimator';

test('Testing Header and Routing', () => {
  render(<App />, { wrapper: BrowserRouter });

  expect(screen.getByText(/Hi, my name is/i)).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: 'Charles' }))
  expect(screen.getByText(/About Page coming Soon!/i)).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: 'Projects' }))
  expect(screen.getByText(/Project Page coming Soon!/i)).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: 'Contact' }))
  expect(screen.getByText(/Contact Page coming Soon!/i)).toBeInTheDocument()

  userEvent.click(screen.getByRole('button', { name: 'CH' }))
  expect(screen.getByText(/Hi, my name is/i)).toBeInTheDocument()
});

test('Testing Social Media links', () => {
  render(<Leftbar />);

  expect(screen.getByLabelText('LinkedIn')).toHaveAttribute('href', 'https://de.linkedin.com/in/charles-heller-068b53233')
  expect(screen.getByLabelText('Github')).toHaveAttribute('href', 'https://github.com/CH4692')
  expect(screen.getByLabelText('Instagram')).toHaveAttribute('href', 'https://www.instagram.com/ch_46/')
  expect(screen.getByLabelText('Youtube')).toHaveAttribute('href', 'https://www.youtube.com')
});

test('Testing Skills Accordion', () => {
  render(<Accordion />);

  const accordions = ['Software Engineer', 'Frontend', 'Backend', 'Native Apps']

  accordions.map((accordion) => {
    expect(screen.getByRole('button', { expanded: false, name: accordion })).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { expanded: false, name: accordion }))
    expect(screen.getByRole('button', { expanded: true, name: accordion })).toBeInTheDocument()
  })
});

test('Testing Skills Icons and Skills Button', async () => {
  render(<SkillsAnimator />);


  expect(screen.getByText('My Skills')).toBeInTheDocument()
  // userEvent.click(screen.getByText('My Skills'))
  const icons =  await screen.getAllByRole('img')
  expect(icons).toHaveLength(16)


});

test('Testing Skills Button', async () => {
  render(<App />, { wrapper: BrowserRouter } );

  expect(screen.getByRole('button', { name: 'More Details' })).toBeInTheDocument()
  userEvent.click(screen.getByRole('button', { name: 'More Details' }))
  expect(screen.getByText(/About Page coming Soon!/i)).toBeInTheDocument()
});

test('Testing Projects', async () => {
  render(<ProjectSection />, { wrapper: BrowserRouter } );

  const projects =  await screen.getAllByRole('img')
  expect(projects).toHaveLength(8)

});

test('Testing Contacts', async () => {
  render(<ContactSection />, { wrapper: BrowserRouter } );

  expect(screen.getByRole('heading', {name: 'Contact Me'})).toBeInTheDocument()

  expect(screen.getByRole('button', {name: 'to livechat'})).toBeInTheDocument()

});






