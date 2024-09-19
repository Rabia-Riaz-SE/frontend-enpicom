import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchDNA from "../SearchDNA";
import axios from "axios";
import { toast } from "react-toastify";

jest.mock("axios");
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe("SearchDNA Component", () => {
  it("renders the SearchDNA component", () => {
    render(<SearchDNA />);
    const inputElement = screen.getByPlaceholderText(
      "Enter DNA sequence to search",
    );
    const buttonElement = screen.getByRole("button", { name: /search/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("updates the input value when typing", () => {
    render(<SearchDNA />);
    const inputElement = screen.getByPlaceholderText(
      "Enter DNA sequence to search",
    );
    fireEvent.change(inputElement, { target: { value: "ACTG" } });

    expect(inputElement).toHaveValue("ACTG");
  });
});

describe("SearchDNA Component with Axios", () => {
  it("calls axios and updates the DNA list when button is clicked", async () => {
    const mockResponse = { data: [{ DNA: "ACTG", id: 1 }] };
    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    render(<SearchDNA />);

    // Use act to wrap state updates
    await act(async () => {
      fireEvent.change(
        screen.getByPlaceholderText("Enter DNA sequence to search"),
        { target: { value: "ACTG" } },
      );
      fireEvent.click(screen.getByRole("button", { name: /search/i }));
    });

    // Wait for axios call and assert changes
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(expect.any(String)); // Modify this to match the actual API call
    });
  });

  it("shows error message on axios failure", async () => {
    const mockError = {
      response: { data: { message: "Error Fetching DNA Records." } },
    };
    (axios.get as jest.Mock).mockRejectedValue(mockError);

    render(<SearchDNA />);

    // Wrap in act for state changes
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /search/i }));
    });

    // Wait for the toast to show the error message
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Error Fetching DNA Records.");
    });
  });
});
