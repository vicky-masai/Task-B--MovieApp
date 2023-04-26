import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "./Search";

describe("Search component", () => {
  it("renders the input element", () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText("Search movie...");
    expect(inputElement).toBeInTheDocument();
  });

  it("displays the search results", async () => {
    const mockSearchResults = {
      Search: [
        { Title: "The Dark Knight", Year: "2008", Poster: "poster1.jpg", id: "1" },
        { Title: "Inception", Year: "2010", Poster: "poster2.jpg", id: "2" }
      ]
    };
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: () => Promise.resolve(mockSearchResults)
    });

    render(<Search />);
    const inputElement = screen.getByPlaceholderText("Search movie...");
    fireEvent.change(inputElement, { target: { value: "Batman" } });

    await waitFor(() => {
      const titleElements = screen.getAllByText(/The Dark Knight|Inception/);
      expect(titleElements.length).toBe(2);
    });
  });

  it("displays 'Movie not found!' if no search results are found", async () => {
    const mockSearchResults = {
      Response: "False",
      Error: "Movie not found!"
    };
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: () => Promise.resolve(mockSearchResults)
    });

    render(<Search />);
    const inputElement = screen.getByPlaceholderText("Search movie...");
    fireEvent.change(inputElement, { target: { value: "Invalid search" } });

    await waitFor(() => {
      const alertElement = screen.getByText("Movie not found!");
      expect(alertElement).toBeInTheDocument();
    });
  });
});
