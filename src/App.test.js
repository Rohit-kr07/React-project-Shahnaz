import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page content', () => {
  render(<App />);
  expect(
    screen.getByText(/Launch your Web Tech practice site in minutes/i)
  ).toBeInTheDocument();
});
