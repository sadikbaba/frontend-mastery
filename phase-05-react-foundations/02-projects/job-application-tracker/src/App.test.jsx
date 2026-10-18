import { render, screen, within } from "@testing-library/react";
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

  it("delete a job", async () => {
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

    const deleteButton = screen.getByRole("button", { name: "Delete" });
    await user.click(deleteButton);
    expect(screen.queryByText("OpenAI")).not.toBeInTheDocument();
    expect(screen.queryByText("Backend Developer")).not.toBeInTheDocument();
  });

  it("find interviewing", async () => {
    const user = userEvent.setup();

    render(<App />);

    const companyInput = screen.getByPlaceholderText("Company name");
    const roleInput = screen.getByPlaceholderText("Job role");
    const addButton = screen.getByRole("button", { name: "Add Job" });

    await user.type(companyInput, "OpenAI");
    await user.type(roleInput, "Backend Developer");

    await user.click(addButton);

    const interviewButton = screen.getByRole("button", { name: "Interview" });
    await user.click(interviewButton);

    const jobCard = screen.getByRole("listitem");

    expect(within(jobCard).getByText("OpenAI")).toBeInTheDocument();
    expect(within(jobCard).getByText("Backend Developer")).toBeInTheDocument();
    expect(within(jobCard).getByText("Interviewing")).toBeInTheDocument();
  });

  it("filter jobs", async () => {
    const user = userEvent.setup();

    render(<App />);

    const companyInput = screen.getByPlaceholderText("Company name");
    const roleInput = screen.getByPlaceholderText("Job role");
    const addButton = screen.getByRole("button", { name: "Add Job" });

    await user.type(companyInput, "OpenAI");
    await user.type(roleInput, "Backend Developer");
    await user.click(addButton);

    const company2Input = screen.getByPlaceholderText("Company name");
    const role2Input = screen.getByPlaceholderText("Job role");
    const addBu2tton = screen.getByRole("button", { name: "Add Job" });

    await user.type(company2Input, "Microsoft");
    await user.type(role2Input, "Frontend Developer");
    await user.click(addBu2tton);

    const jobCards = screen.getAllByRole("listitem");

    const openAiCard = jobCards[0];

    const interviewButton = within(openAiCard).getByRole("button", {
      name: "Interview",
    });

    await user.click(interviewButton);

    const selects = screen.getAllByRole("combobox");
    const filterSelect = selects[1];

    await user.selectOptions(filterSelect, "Interviewing");

    expect(screen.getByText("OpenAI")).toBeInTheDocument();
    expect(screen.getByText("Backend Developer")).toBeInTheDocument();
    expect(screen.queryByText("Microsoft")).not.toBeInTheDocument();
    expect(screen.queryByText("Frontend Developer")).not.toBeInTheDocument();
  });

  it("edit a job", async () => {
    const user = userEvent.setup();

    render(<App />);

    const companyInput = screen.getByPlaceholderText("Company name");
    const roleInput = screen.getByPlaceholderText("Job role");
    const addButton = screen.getByRole("button", { name: "Add Job" });

    await user.type(companyInput, "OpenAI");
    await user.type(roleInput, "Backend Developer");

    await user.click(addButton);

    const editButton = screen.getByRole("button", { name: "Edit" });
    await user.click(editButton);
    const editCompanyInput = screen.getByPlaceholderText("Company name");
    await user.clear(editCompanyInput);

    await user.type(editCompanyInput, "Google");
    const updateButton = screen.getByRole("button", {
      name: "Update Job",
    });

    await user.click(updateButton);

    expect(screen.queryByText("OpenAI")).not.toBeInTheDocument();
    expect(screen.getByText("Google")).toBeInTheDocument();
    expect(screen.queryByText("Backend Developer")).toBeInTheDocument();
  });

  it("restores saved jobs after the app remounts", async () => {
    const user = userEvent.setup();

    const { unmount } = render(<App />);

    const companyInput = screen.getByPlaceholderText("Company name");
    const roleInput = screen.getByPlaceholderText("Job role");
    const addButton = screen.getByRole("button", { name: "Add Job" });

    await user.type(companyInput, "OpenAI");
    await user.type(roleInput, "Backend Developer");

    await user.click(addButton);

    expect(screen.getByText("OpenAI")).toBeInTheDocument();
    expect(screen.getByText("Backend Developer")).toBeInTheDocument();

    unmount();
    render(<App />);

    expect(screen.getByText("OpenAI")).toBeInTheDocument();
    expect(screen.getByText("Backend Developer")).toBeInTheDocument();
  });

  it("deletes a job", async () => {
    const user = userEvent.setup();

    render(<App />);

    const companyInput = screen.getByPlaceholderText("Company name");
    const roleInput = screen.getByPlaceholderText("Job role");
    const addButton = screen.getByRole("button", { name: "Add Job" });

    await user.type(companyInput, "OpenAI");
    await user.type(roleInput, "Backend Developer");

    await user.click(addButton);

    const deleteButton = screen.getByRole("button", { name: "Delete" });
    await user.click(deleteButton);
    expect(screen.queryByText("OpenAI")).not.toBeInTheDocument();
    expect(screen.queryByText("Backend Developer")).not.toBeInTheDocument();
  });
});
