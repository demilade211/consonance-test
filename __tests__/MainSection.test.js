// MainSection.test.js

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import MainSection from '../app/subComponents/MainSection';

describe('MainSection', () => {
  test('renders coming soon message and notify me button', () => {
    render(<MainSection />);

    const comingSoonElement = screen.getByText(/coming soon/i);
    expect(comingSoonElement).toBeInTheDocument();

    const notifyMeButton = screen.getByText(/notify me/i);
    expect(notifyMeButton).toBeInTheDocument();
  });
});
