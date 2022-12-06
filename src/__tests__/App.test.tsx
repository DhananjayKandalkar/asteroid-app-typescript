import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "../App";


test("rendering/navigating to random page", () => {
  render(<BrowserRouter><App/></BrowserRouter>);
  userEvent.click(screen.getByText(/random/i));
  expect(screen.getByText(/Random Asteroids/i)).toBeInTheDocument();
});