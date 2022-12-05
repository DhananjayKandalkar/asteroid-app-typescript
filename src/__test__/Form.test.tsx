import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../component/Form";
import { BrowserRouter } from "react-router-dom";

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




test("random asteroids click should render after fetching", () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  const buttonElement = screen.getByTestId("input-submit");
  const idInputElement = screen.getByPlaceholderText(/find by id for-ex:3542519/i)

  const testValue = "inpValue";

  fireEvent.change(idInputElement, {target: {value : testValue}})
  fireEvent.click(buttonElement);
  
  expect(buttonElement).toHaveBeenCalled();
});




