import { render, screen } from "@testing-library/react";
import App from "./App";

test("header render with react testing in the document", () => {
  render(<App />);
  const linkElement = screen.getByText(/Geniome/i);
  expect(linkElement).toBeInTheDocument();
});

test("render header component in the document", () => {
  // const Components = render(<App />);
  const { getByText } = render(<App />);
  const headerElement = getByText("Geniome");
  expect(headerElement).toBeTruthy();
  
});
