// MainSection.test.js

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import MainSection from '../app/subComponents/MainSection';

describe('MainSection', () => {
  test('renders coming soon message and notify me button', () => {
    render(<MainSection />);

    const comingSoonElement = screen.getByText(/coming soon/i);
    expect(comingSoonElement).toBeInTheDocument();

    const notifyMeButtons = screen.getAllByText(/notify me/i);
    expect(notifyMeButtons.length).toBeGreaterThan(0); // Ensure at least one button is found
    notifyMeButtons.forEach((button) => {
      expect(button).toBeInTheDocument(); // Assert each button is present
    });
  });
});
