import { render, screen } from '@testing-library/react';

import Header from 'components/Header/Header';
import App from 'components/App';

describe('Header', () => {
  test('check if all links are displayed', () => {
    render(
      <App>
        <Header />
      </App>
    );
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(4);
  });
});
