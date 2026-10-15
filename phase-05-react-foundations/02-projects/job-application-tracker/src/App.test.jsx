import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";

describe("Job Application Tracker", () => {
  it("renders the app heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "Job Application Tracker",
      }),
    ).toBeInTheDocument();
  });

  it("adds a new job", async () => {
    const user = userEvent.setup();

    render(<App />);

    const companyInput = screen.getByPlaceholderText("Company name");
    const roleInput = screen.getByPlaceholderText("Job role");
    const addButton = screen.getByRole("button", { name: "Add Job" });

    await user.type(companyInput, "OpenAI");
    await user.type(roleInput, "Backend Developer");

    await user.click(addButton);

    expect(screen.getByText("OpenAI")).toBeInTheDocument();
    expect(screen.getByText("Backend Developer")).toBeInTheDocument();
  });
});
