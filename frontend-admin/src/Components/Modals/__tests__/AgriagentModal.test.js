import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AgriagentModal from '../Agriagent/AgriagentModal';

describe('AgriagentModal', () => {
  it('submits the form with valid data', () => {
    // Render the form component
    const { getByLabelText, getByText } = render(<AgriagentModal />);
    
    // Fill in the form fields
    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Contact Number'), { target: { value: '1234567890' } });
    fireEvent.change(getByLabelText('Address'), { target: { value: '123 Main St' } });
    fireEvent.change(getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText('Date Of Birth'), { target: { value: '2000-01-01' } });
    fireEvent.change(getByLabelText('Nic'), { target: { value: '123456789V' } });
    fireEvent.change(getByLabelText('Select Gender'), { target: { value: 'male' } });
    
    // Submit the form
    fireEvent.click(getByText('Submit'));
    
    // Add assertions to validate the form submission
    // Example: expect(submitHandlerMock).toHaveBeenCalled();
  });
  
  it('displays an error for invalid form data', () => {
    // Render the form component
    const { getByLabelText, getByText } = render(<AgriagentModal />);
    
    // Fill in the form fields with invalid data
    fireEvent.change(getByLabelText('First Name'), { target: { value: '123' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: '456' } });
    
    // Submit the form
    fireEvent.click(getByText('Submit'));
    
    // Add assertions to validate the error messages are displayed
    // Example: expect(getByText('The name must contain letters only')).toBeInTheDocument();
  });
});
