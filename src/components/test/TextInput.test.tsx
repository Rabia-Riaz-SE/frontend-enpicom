import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "../TextInput";
import "@testing-library/jest-dom";

describe("TextInput Component", () => {
  it("displays the correct initial value", () => {
    render(
      <TextInput value="ACTG" onChange={() => {}} name="" placeholder="" />,
    );
    const inputElement = screen.getByRole("textbox");

    expect(inputElement).toHaveAttribute("value", "ACTG");
  });

  it("renders the TextInput component", () => {
    render(
      <TextInput
        value=""
        onChange={() => {}}
        name="label text"
        placeholder=""
      />,
    );
    const pElement = screen.getByText("label text");

    // Verify that the <p> element contains the correct text
    expect(pElement).toBeInTheDocument();
    expect(pElement).toHaveTextContent("label text");
  });

  it("calls onChange when text is entered", () => {
    const handleChange = jest.fn();

    render(
      <TextInput value="" onChange={handleChange} name="" placeholder="" />,
    );
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(handleChange).toHaveBeenCalled();
  });
});
