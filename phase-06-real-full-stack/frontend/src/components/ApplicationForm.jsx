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
    <section className="create-section">
      <h1 className="create-title">Add Application</h1>
      <p className="create-description">Track a new job application.</p>

      <form onSubmit={handleSubmit} className="create-form">
        <LabelAndInput
          id="company"
          name="Company"
          value={formData.company}
          setFormData={setFormData}
          formData={formData}
          placeholder="Enter Company"
          required
          setFormDataHelper={setFormDataHelper}
          labelClassName="create-form-label"
          inputClassName="create-form-input"
        />

        <LabelAndInput
          id="role"
          name="Role"
          value={formData.role}
          setFormData={setFormData}
          formData={formData}
          placeholder="Enter Role"
          required
          setFormDataHelper={setFormDataHelper}
          labelClassName="create-form-label"
          inputClassName="create-form-input"
        />

        <LabelAndInput
          id="status"
          name="Status"
          value={formData.status}
          setFormData={setFormData}
          formData={formData}
          placeholder="Enter Status"
          required
          setFormDataHelper={setFormDataHelper}
          labelClassName="create-form-label"
          inputClassName="create-form-input"
        />

        <label htmlFor="notes" className="create-form-label">
          Notes
        </label>
        <textarea
          id="notes"
          value={formData.notes}
          onChange={(event) =>
            setFormDataHelper(setFormData, "notes", event, formData)
          }
          placeholder="Enter Notes"
          className="create-form-textarea"
        />

        <div className="buttons-container">
          <button
            type="button"
            onClick={() => setCurrentView("list")}
            className="back-button"
          >
            Back to list
          </button>
          <button type="submit" className="create-button">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export function LabelAndInput({
  id,
  name,
  value,
  setFormData,
  formData,
  placeholder,
  required = false,
  setFormDataHelper, // pass the helper in
  labelClassName = "",
  inputClassName = "",
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {name}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(event) =>
          setFormDataHelper(setFormData, id, event, formData)
        }
        placeholder={placeholder}
        required={required}
        className={inputClassName}
      />
    </div>
  );
}

export default ApplicationForm;
