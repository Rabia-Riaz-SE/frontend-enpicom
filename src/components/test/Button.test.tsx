import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../button";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  it("renders the Button component", () => {
    render(<Button text="Submit" onClick={() => {}} />);
    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
  });

  it("displays the correct label", () => {
    render(<Button text="Submit" onClick={() => {}} />);
    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveTextContent("Submit");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();

    render(<Button text="Submit" onClick={handleClick} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalled();
  });
});
