import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RulesModal from "../Agrirules/RulesModal";

describe("RulesModal", () => {
  test("renders correctly", () => {
    render(<RulesModal setOpenModal={() => {}} />);
    
    // Check if the modal title is rendered
    expect(screen.getByText("Add Rule")).toBeInTheDocument();

    // Check if the form inputs are rendered
    expect(screen.getByLabelText("Rule Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Rule Category")).toBeInTheDocument();
    expect(screen.getByLabelText("Select Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Rule Details")).toBeInTheDocument();

    // Check if the submit button is rendered
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("handles form submission", () => {
    const setOpenModal = jest.fn();
    render(<RulesModal setOpenModal={setOpenModal} />);
    
    // Fill in the form inputs
    fireEvent.change(screen.getByLabelText("Rule Name"), {
      target: { value: "Test Rule" },
    });
    fireEvent.change(screen.getByLabelText("Rule Category"), {
      target: { value: "seeds" },
    });
    fireEvent.change(screen.getByLabelText("Select Date"), {
      target: { value: "2023-05-27" },
    });
    fireEvent.change(screen.getByLabelText("Rule Details"), {
      target: { value: "Test rule details" },
    });

    // Submit the form
    fireEvent.submit(screen.getByTestId("rules-modal-form"));

    // Check if the form submission is handled correctly
    expect(setOpenModal).toHaveBeenCalledWith(false);
    // Add more expectations if needed
  });

  test("closes the modal", () => {
    const setOpenModal = jest.fn();
    render(<RulesModal setOpenModal={setOpenModal} />);
    
    // Click the close button
    fireEvent.click(screen.getByLabelText("Close"));

    // Check if the modal is closed
    expect(setOpenModal).toHaveBeenCalledWith(false);
  });
});
