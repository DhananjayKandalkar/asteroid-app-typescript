import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RandomAsteroids from "../component/RandomAsteroids";
import { BrowserRouter } from "react-router-dom";



test("is loading status rendering after fetching or not", () => {
  render(
    <BrowserRouter>
      <RandomAsteroids />
    </BrowserRouter>
  );
  const loadingElement = screen.getByText(/Loading.. please wait/i);
  expect(loadingElement).toBeTruthy();
});