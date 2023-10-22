import React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  Matcher,
  configure,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import DynamicForm from "./DynamicForm";
import { Provider, useDispatch } from "react-redux";

import { MemoryRouter } from "react-router-dom";
import store from "../../store";
import { submit } from "../../store/reducers/formSlice";
import FormDataModel from "../../models/FormDataModel";

import jsonData from "../../data/fields.json";
import FormFieldModel from "../../models/FormFieldModel";
import { ALL, promises } from "dns";

describe("Form Component", () => {
  beforeEach(() => {
    configure({
      throwSuggestions: true,
    });
  });
  // test:NO 1
  test("renders Dynamic Form", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]} initialIndex={0}>
          <DynamicForm />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(`First Name`)).toBeInTheDocument();
    expect(screen.getByText(`Last Name`)).toBeInTheDocument();
    expect(screen.getByText(`Email`)).toBeInTheDocument();
    expect(screen.getByText(`Phone`)).toBeInTheDocument();
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  test("Test form Validations", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]} initialIndex={0}>
          <DynamicForm />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(`First Name`)).toBeInTheDocument();
    expect(screen.getByText(`Last Name`)).toBeInTheDocument();
    expect(screen.getByText(`Email`)).toBeInTheDocument();
    expect(screen.getByText(`Phone`)).toBeInTheDocument();
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);
    const json: Array<FormFieldModel> = jsonData;
    await waitFor(() => {
      json.forEach((element) => {
        if (element.required) {
          const validationString = `${capitalizeFirstLetter(
            element.id
          )} is required`;
          expect(
            screen.getByText(new RegExp(validationString, "i"))
          ).toBeInTheDocument();
        }
      });
    });
  });

  test("Test submit valid form", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter   >
          <DynamicForm />
        </MemoryRouter>
      </Provider>
    );

     
    const firstNameInput = screen.getByRole("textbox", { name: "First Name" });
    const lastNameInput = screen.getByRole("textbox", { name: "Last Name" });
    const emailInput = screen.getByRole("textbox", { name: "Email" });
    const phoneInput = screen.getByRole("textbox", { name: "Phone" });

    fireEvent.change(firstNameInput, { target: { value: "Kashif" } });
    fireEvent.change(lastNameInput, { target: { value: "Sattar" } });
    fireEvent.change(emailInput, {
      target: { value: "me_kashif@outlook.com" },
    });
    fireEvent.change(phoneInput, { target: { value: "123456789540" } });

    // Find and click the submit button
   
    await waitFor(() => {
      expect( screen.getByRole("textbox", { name: "First Name" })).toHaveValue('Kashif');
       
        // console.log(screen.debug());
    
      

       // expect(greetingEl).toBeInTheDocument();
    });
  });

  test("test redux store", async () => {
    let state;

    const init: FormDataModel = {
      firstName: "Muhammad Kashif",
      lastName: "Sattar",
      Email: "pos@gmail.com",
      address: "",
      city: "Rawalpindi",
      state: "",
      zip: "46000",
      phone: "923068672409",
      jobTitle: "",
      reason: "",
    };
    store.dispatch(submit(init));

    state = store.getState();
    expect(state).toEqual({
      form: {
        data: {
          firstName: "Muhammad Kashif",
          lastName: "Sattar",
          Email: "pos@gmail.com",
          address: "",
          city: "Rawalpindi",
          state: "",
          zip: "46000",
          phone: "923068672409",
          jobTitle: "",
          reason: "",
        },
      },
    });
  });
});

afterEach(() => {
  cleanup();
});

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
