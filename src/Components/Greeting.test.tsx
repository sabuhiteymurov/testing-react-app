import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello world as a text', () => {
    // The three 'A's Arrange, Act, Assert
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldElement = screen.getByText('Hello world', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
