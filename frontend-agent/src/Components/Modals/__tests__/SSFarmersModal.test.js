import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import SSFarmersModal from "../SSFarmers/SSFarmersModal";

jest.mock("axios");

describe("SSFarmersModal", () => {
  test("should render the modal", () => {
    render(<SSFarmersModal />);
    
    // Assert that the modal is rendered
    expect(screen.getByText("Add Small Scale Farmers")).toBeInTheDocument();
  });

  test("should submit the form and make a POST request", async () => {
    render(<SSFarmersModal />);
    
    // Mock the axios post request
    axios.post.mockResolvedValueOnce({ data: {} });

    // Fill in the form inputs
    fireEvent.change(screen.getByLabelText("Initial Name"), {
      target: { value: "John Doe" },
    });
    // Fill in the other form inputs...

    // Submit the form
    fireEvent.click(screen.getByText("Submit"));

    // Assert that the axios post request is made with the correct data
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8070/farmers/add",
      {
        initialName: "John Doe",
        // Add other form data here...
      }
    );

    // Wait for the success toast message
    await screen.findByText("Added Successfully.");

    // Assert that the modal is closed
    expect(screen.queryByText("Add Small Scale Farmers")).not.toBeInTheDocument();
  });
});