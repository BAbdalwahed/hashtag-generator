import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

xit("renders app", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
