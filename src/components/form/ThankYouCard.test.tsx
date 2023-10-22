import React from "react";
import {
  render,
  screen,
  cleanup,
  waitFor,
  configure,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ThankYouCard from "./ThankYouCard";
import FormDataModel from "../../models/FormDataModel";
import { submit } from "../../store/reducers/formSlice";
import store from "../../store";

describe("Thanku", () => {


  // test:NO 1
  test("renders Thanku Page on submit", async () => {
    const init: FormDataModel = {
      firstName: "Muhammad Kashif",
      lastName: "Sattar",
      Email: "test@gmail.com",
      address: "",
      city: "Rawalpindi",
      state: "",
      zip: "46000",
      phone: "923068672409",
      jobTitle: "",
      reason: "",
    };
    await store.dispatch(submit(init));

    await waitFor(() => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/thank-you"]} initialIndex={0}>
            <ThankYouCard />
          </MemoryRouter>
        </Provider>
      );

      let state;

      const linkElement = screen.getByText(
        "Your response is submitted for further processing."
      );
      expect(linkElement).toBeInTheDocument();
      state = store.getState().form.data;
      const greetingEl = screen.getByText(`Thank You Muhammad Kashif Sattar !`);
      expect(greetingEl).toBeInTheDocument();
    });
  });
});

afterEach(() => {
  cleanup();
});
