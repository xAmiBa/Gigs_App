import { screen, render } from "@testing-library/react";
import React from "react";
import Gig from "../src/components/Gig";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";


describe("Gig component", () => {
beforeEach(() => {
  render(<Gig
    band_name="Jazz Fusion London"
    image_link="https://traverse-site.s3.amazonaws.com/TJB.png?mtime=20230628163103"
    about_band="A three-piece jazz ensemble blending various musical styles."
    time_date="Friday, September 30, 2023 at 7:30 PM"
    location="Jazz Club, San Francisco"
    />);
});

  test("Should render a h3 with the correct band name", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Jazz Fusion London");
  });
  test("Should render a band with the correct band time", () => {
    expect(screen.getByTestId("time-date")).toHaveTextContent("Friday, September 30, 2023 at 7:30 PM");
  });
  test("Should render a band with the correct band location", () => {
    expect(screen.getByTestId("location")).toHaveTextContent("Jazz Club, San Francisco");
  });
  test("Should render a band with the correct band description", () => {
    expect(screen.getByTestId("band")).toHaveTextContent("A three-piece jazz ensemble blending various musical styles.");
  });
  test("favourite button is displayed", () => {
    expect(screen.getByTestId("checkbox-wrapper")).toHaveTextContent("Add to favourites");
  });
  test("favourite button is clicked and text changed", async () => {
    await userEvent.click(screen.getByText("Add to favourites"));
    expect(screen.getByTestId("checkbox-wrapper")).toHaveTextContent("Your favourite");
  });
});


