import { useState } from "react";
import { createApplication } from "../api/applicationsApi";

function setFormDataHelper(setFormData, key, event, formData) {
  setFormData({
    ...formData,
    [key]: event.target.value,
  });
}

function ApplicationForm({ onCreated, setCurrentView }) {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "",
    notes: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const createdApplication = await createApplication(formData);
    onCreated(createdApplication);
    setCurrentView("list");
  }

  return (
    <section>
      <h1>Application Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          value={formData.company}
          onChange={(event) =>
            setFormDataHelper(setFormData, "company", event, formData)
          }
        />
        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          value={formData.role}
          onChange={(event) =>
            setFormDataHelper(setFormData, "role", event, formData)
          }
        />
        <label htmlFor="status">Status</label>
        <input
          id="status"
          type="text"
          value={formData.status}
          onChange={(event) =>
            setFormDataHelper(setFormData, "status", event, formData)
          }
        />
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          value={formData.notes}
          onChange={(event) =>
            setFormDataHelper(setFormData, "notes", event, formData)
          }
        />
        <div>
          <button type="button" onClick={() => setCurrentView("list")}>
            Back to list
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ApplicationForm;
