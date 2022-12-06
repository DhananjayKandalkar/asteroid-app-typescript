import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AsteroidByID from "../component/AsteroidByID";
import { BrowserRouter } from "react-router-dom";

test("display heading for asteroid by id", () => {
  render(
    <BrowserRouter>
      <AsteroidByID />
    </BrowserRouter>
  );
  const headingElement = screen.getByText(/Single Asteroid By ID/i);
  expect(headingElement).toBeInTheDocument();
});
