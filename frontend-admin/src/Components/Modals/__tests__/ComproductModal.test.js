import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ComproductModal from "../ComProduct/ComproductModal";

describe("ComproductModal", () => {
  it("renders the component correctly", () => {
    render(<ComproductModal setOpenModal={() => {}} />);
    
    // Assert that the component is rendered
    const modalTitle = screen.getByText("Add Product");
    expect(modalTitle).toBeInTheDocument();
  });

  it("submits the form with valid data", () => {
    const setOpenModal = jest.fn();
    render(<ComproductModal setOpenModal={setOpenModal} />);
    
    // Fill in the form fields
    fireEvent.change(screen.getByLabelText("Product Name"), {
      target: { value: "Test Product" },
    });
    fireEvent.change(screen.getByLabelText("Price"), {
      target: { value: "10.99" },
    });
    fireEvent.change(screen.getByLabelText("Product Quantity"), {
      target: { value: "5" },
    });
    fireEvent.change(screen.getByLabelText("Product Details"), {
      target: { value: "Test details" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Submit"));

    // Assert that the form is submitted
    expect(setOpenModal).toHaveBeenCalled();
  });

  it("displays the selected image", () => {
    render(<ComproductModal setOpenModal={() => {}} />);
    
    // Select an image file
    const imageInput = screen.getByLabelText("Choose Product Image");
    const imageFile = new File(["(image content)"], "test-image.png", {
      type: "image/png",
    });
    fireEvent.change(imageInput, { target: { files: [imageFile] } });
    
    // Assert that the selected image is displayed
    const displayedImage = screen.getByRole("img");
    expect(displayedImage).toBeInTheDocument();
    expect(displayedImage.src).toContain("data:image/png;base64,");
  });
});
