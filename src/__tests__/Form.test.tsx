import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../component/Form";
import { BrowserRouter } from "react-router-dom";

test("Form heading should be render", () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  const headingElement = screen.getByText(/Asteroid App In TypeScript/i);
  expect(headingElement).toBeInTheDocument();
});

test("id input should be render", () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  const idInputElement = screen.getByPlaceholderText(
    /find by id for-ex:3542519/i
  );
  expect(idInputElement).toBeInTheDocument();
});

test("render the user id form with 2 buttons", async () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  const buttonElement = await screen.findAllByRole("button");
  expect(buttonElement).toHaveLength(2);
});