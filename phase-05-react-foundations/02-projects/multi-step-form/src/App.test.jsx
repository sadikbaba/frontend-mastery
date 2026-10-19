import { render, screen } from "@testing-library/react";
import { describe, it, expect , beforeEach} from "vitest";
import App from "./App.jsx";
import { userEvent } from "@testing-library/user-event";

describe("Multi-step onboarding", () => {
  beforeEach(async () => {
    render(<App />);
  });

  it("renders the app", () => {
    const heading = screen.getByRole("heading", { name: "Personal Details" });

    expect(heading).toBeInTheDocument();
  });

  it("moves to Developer Profile after completing Personal Details", async () => {
    const user = userEvent.setup();
    await personDetails(user);
    const heading = screen.getByRole("heading", { name: "Developer Profile" });
    expect(heading).toBeInTheDocument();
  });

  it("moves to Job Preferences after completing Developer Profile", async () => {
    const user = userEvent.setup();
    await developerProfile(user);
    const heading = screen.getByRole("heading", {
      name: "Job Preferences",
    });
    expect(heading).toBeInTheDocument();
  });

  it("moves to Review Step after completing Job Preferences", async () => {
    const user = userEvent.setup();
    await jobPreferences(user);
    const heading = screen.getByRole("heading", {
      name: "Review",
    });
    expect(heading).toBeInTheDocument();
  });

  it("moves to Dashboard after completing Review Step", async () => {
    const user = userEvent.setup();
    await reviewStep(user);

    const reviewButton = screen.getByRole("button", {
      name: "Complete Onboarding",
    });
    await user.click(reviewButton);

    const heading = screen.getByRole("heading", {
      name: "Dashboard",
    });
    expect(heading).toBeInTheDocument();
  });

  it("shows the correct data on the dashboard", async () => {
    const user = userEvent.setup();
    await dashboard(user);
  });

  it("moves back to Personal Details after clicking Back", async () => {
    const user = userEvent.setup();
    await backToPersonalDetails(user);
  });
});

async function personDetails(user) {
  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const continueButton = screen.getByRole("button", { name: "Continue" });

  await user.type(nameInput, "John Doe");
  await user.type(emailInput, "john@example.com");
  await user.click(continueButton);
}

async function developerProfile(user) {
  await personDetails(user);
  const experienceInput = screen.getByPlaceholderText("Experience");
  const stackInput = screen.getByPlaceholderText("Stack");
  const continueButton = screen.getByRole("button", { name: "Continue" });

  await user.type(stackInput, "React");
  await user.type(experienceInput, "5");
  await user.click(continueButton);
}

async function jobPreferences(user) {
  await developerProfile(user);

  const preferredRoleInput = screen.getByPlaceholderText("Preferred Role");

  const workPreferenceSelect = screen.getByLabelText("Work Preference");

  const continueButton = screen.getByRole("button", { name: "Review Profile" });

  await user.type(preferredRoleInput, "Frontend Developer");
  await user.selectOptions(workPreferenceSelect, "Hybrid");
  await user.click(continueButton);
}

async function reviewStep(user) {
  await jobPreferences(user);
}

async function dashboard(user) {
  await reviewStep(user);

  const reviewButton = screen.getByRole("button", {
    name: "Complete Onboarding",
  });
  await user.click(reviewButton);

  const name = screen.getByText("Name:");
  const email = screen.getByText("Email:");
  const experience = screen.getByText("Experience:");
  const stack = screen.getByText("Stack:");
  const preferredRole = screen.getByText("Preferred Role:");
  const workPreference = screen.getByText("Work Preference:");

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(experience).toBeInTheDocument();
  expect(stack).toBeInTheDocument();
  expect(preferredRole).toBeInTheDocument();
  expect(workPreference).toBeInTheDocument();
}
async function backToPersonalDetails(user) {
  await reviewStep(user);

  let backButton = screen.getByRole("button", { name: "Back" });
  await user.click(backButton);

  expect(
    screen.getByRole("heading", { name: "Job Preferences" }),
  ).toBeInTheDocument();

  backButton = screen.getByRole("button", { name: "Back" });
  await user.click(backButton);

  expect(
    screen.getByRole("heading", { name: "Developer Profile" }),
  ).toBeInTheDocument();

  backButton = screen.getByRole("button", { name: "Back" });
  await user.click(backButton);

  expect(
    screen.getByRole("heading", { name: "Personal Details" }),
  ).toBeInTheDocument();

  expect(screen.getByLabelText("Name")).toHaveValue("John Doe");
expect(screen.getByLabelText("Email")).toHaveValue("john@example.com");
}
