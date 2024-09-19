import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import AddDNA from "../AddDNA";
import axios from "axios";
import { toast } from "react-toastify";
import "@testing-library/jest-dom";

jest.mock("axios");
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe("AddDNA Component", () => {
  it("renders the AddDNA component", () => {
    render(<AddDNA />);
    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button", { name: /ADD/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("updates the input value when typing", () => {
    render(<AddDNA />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "ACTG" } });

    expect(inputElement).toHaveValue("ACTG");
  });

  it("should show an error if no DNA is provided", () => {
    render(<AddDNA />);
    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(toast.error).toHaveBeenCalledWith("DNA cannot be empty.");
  });
});

describe("AddDNA Component with Axios", () => {
  it("should call axios to save DNA", async () => {
    const mockResponse = { data: { DNA: "ACTG", id: 1 } };

    // Mock the axios.post call
    (axios.post as jest.Mock).mockResolvedValue(mockResponse);

    render(<AddDNA />);

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText("Enter DNA"), {
      target: { value: "ACTG" },
    });

    // Simulate the form submission by clicking the button
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /add/i }));
    });

    // Assert axios.post was called with correct arguments
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(expect.any(String), {
        DNA: "ACTG",
      });
    });
  });

  it("should handle axios error", async () => {
    const mockError = {
      response: { data: { message: "Response Error Adding DNA." } },
    };
    (axios.post as jest.Mock).mockRejectedValue(mockError);

    render(<AddDNA />);
    fireEvent.change(screen.getByPlaceholderText("Enter DNA"), {
      target: { value: "q" },
    });

    // Simulate the form submission by clicking the button
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /add/i }));
    });

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Response Error Adding DNA.");
    });
  });
});
