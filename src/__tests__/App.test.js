import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from 'App';

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Map/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('check if corect component is displayed', async () => {
    render(<App />);
    const plannerLink = screen.getAllByRole('link')[1];
    await userEvent.click(plannerLink);
    const textPlanner = screen.getByText(/Start planning route/i);
    expect(textPlanner).toBeInTheDocument();
  });

  test('check if component is stopped to be displayed', async () => {
    render(<App />);
    const homeLink = screen.getAllByRole('link')[0];
    await userEvent.click(homeLink);
    const plannerLink = screen.getAllByRole('link')[1];
    const textHome = screen.getByText(/Recently searched/i);
    expect(textHome).toBeInTheDocument();
    await userEvent.click(plannerLink);
    expect(textHome).not.toBeInTheDocument();
  });
});
