import { render, screen } from '@testing-library/react';

import Support from 'views/Support/Support';

describe('Support', () => {
  test('check if title is displayed', () => {
    render(<Support />);
    const title = screen.getByText(/Created by Małgorzata Kowacka/i);
    expect(title).toBeInTheDocument();
  });
  test('check if all contact links are displayed', () => {
    render(<Support />);
    const links = screen.getAllByRole('link');
    console.log(links);
    expect(links.length).toBe(4);
  });
});
