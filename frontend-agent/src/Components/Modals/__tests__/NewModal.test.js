import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsModal from '../News/NewsModal';

describe('NewsModal', () => {
  test('renders NewsModal component', () => {
    render(<NewsModal setOpenModal={() => {}} />);
    // Assert that the component renders without throwing an error
    // You can add more specific assertions if needed
  });

  test('submits the form with valid data', () => {
    const mockSetOpenModal = jest.fn();
    render(<NewsModal setOpenModal={mockSetOpenModal} />);
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    // Assert that the form submission triggers the expected function calls or API requests
    // For example, you can assert that mockSetOpenModal is called with the correct arguments
    expect(mockSetOpenModal).toHaveBeenCalledWith(false);
    // You can add more specific assertions if needed
  });

  test('closes the modal when Close button is clicked', () => {
    const mockSetOpenModal = jest.fn();
    render(<NewsModal setOpenModal={mockSetOpenModal} />);
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);

    // Assert that the close button triggers the expected function calls or state changes
    // For example, you can assert that mockSetOpenModal is called with the correct arguments
    expect(mockSetOpenModal).toHaveBeenCalledWith(false);
    // You can add more specific assertions if needed
  });

  // Add more test cases as needed
});